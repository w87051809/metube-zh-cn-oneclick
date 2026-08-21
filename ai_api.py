import asyncio
import json
import os
import time
from collections import defaultdict, deque
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen

from aiohttp import web


_STATUS_CACHE: dict[str, Any] = {"expires": 0.0, "value": None}
_RATE_LIMIT: dict[str, deque[float]] = defaultdict(deque)
_RATE_LIMIT_WINDOW = 60.0
_RATE_LIMIT_REQUESTS = 10


def build_chat_endpoints(base_url: str) -> list[str]:
    base = str(base_url or "").strip().rstrip("/")
    if not base:
        return []
    if base.endswith("/v1"):
        return [f"{base}/chat/completions"]
    return [f"{base}/v1/chat/completions", f"{base}/chat/completions"]


def classify_provider_error(status: int | None, message: str) -> str:
    if status in (401, 403):
        return "invalid_key"
    if status == 429:
        return "rate_limited"
    if status is not None and status >= 500:
        return "provider_error"
    text = str(message or "").lower()
    if "timed out" in text or "timeout" in text:
        return "timeout"
    return "unavailable"


def public_ai_config(*, base_url: str, api_key: str, model: str) -> dict[str, Any]:
    host = urlsplit(str(base_url or "")).hostname or ""
    return {
        "configured": bool(str(base_url or "").strip() and str(api_key or "").strip()),
        "provider": host,
        "model": str(model or "").strip(),
    }


def _config() -> tuple[str, str, str]:
    return (
        os.environ.get("TITLE_TRANSLATE_API_BASE", "").strip().rstrip("/"),
        os.environ.get("TITLE_TRANSLATE_API_KEY", "").strip(),
        os.environ.get("TITLE_TRANSLATE_MODEL", "gpt-5.5").strip() or "gpt-5.5",
    )


def _models_endpoint(base_url: str) -> str:
    base = base_url.rstrip("/")
    return f"{base}/models" if base.endswith("/v1") else f"{base}/v1/models"


def _safe_provider_message(body: str) -> str:
    text = str(body or "").strip()
    try:
        payload = json.loads(text)
        error = payload.get("error")
        if isinstance(error, dict):
            text = str(error.get("message") or error.get("code") or "")
        elif error:
            text = str(error)
    except (json.JSONDecodeError, TypeError, AttributeError):
        pass
    return " ".join(text.split())[:240]


def _probe_provider_sync() -> dict[str, Any]:
    base_url, api_key, model = _config()
    result = public_ai_config(base_url=base_url, api_key=api_key, model=model)
    if not result["configured"]:
        return {**result, "state": "not_configured", "message": "AI 尚未配置"}

    request = Request(
        _models_endpoint(base_url),
        headers={"Authorization": f"Bearer {api_key}", "User-Agent": "MeTube AI status"},
    )
    try:
        with urlopen(request, timeout=15) as response:
            payload = json.loads(response.read().decode("utf-8"))
        model_ids = {
            str(item.get("id"))
            for item in payload.get("data", [])
            if isinstance(item, dict) and item.get("id")
        }
        return {
            **result,
            "state": "ready",
            "message": "AI 连接正常",
            "model_available": not model_ids or model in model_ids,
        }
    except HTTPError as exc:
        body = _safe_provider_message(exc.read(800).decode("utf-8", "replace"))
        state = classify_provider_error(exc.code, body)
        messages = {
            "invalid_key": "AI 密钥无效",
            "rate_limited": "AI 请求太频繁",
            "provider_error": "AI 服务暂时异常",
        }
        return {**result, "state": state, "message": messages.get(state, "AI 连接失败")}
    except (URLError, TimeoutError, OSError, json.JSONDecodeError) as exc:
        state = classify_provider_error(None, str(exc))
        return {**result, "state": state, "message": "AI 服务连接超时" if state == "timeout" else "AI 服务无法连接"}


def _chat_sync(message: str, context: str) -> str:
    base_url, api_key, model = _config()
    if not base_url or not api_key:
        raise RuntimeError("AI 尚未配置")
    system = (
        "你是视频下载系统的中文助手。回答要简短、准确、用大白话。"
        "先区分事实和推测；遇到下载错误时说明原因、自动处理顺序和仍需用户操作的部分。"
        "不要编造已经下载成功，也不要输出服务器密钥、Cookie、令牌或内部地址。"
    )
    user_text = message if not context else f"页面上下文：{context[:2000]}\n\n用户问题：{message}"
    body = json.dumps(
        {
            "model": model,
            "messages": [
                {"role": "system", "content": system},
                {"role": "user", "content": user_text},
            ],
            "temperature": 0.2,
            "max_tokens": 800,
        },
        ensure_ascii=False,
    ).encode("utf-8")
    last_error: Exception | None = None
    for endpoint in build_chat_endpoints(base_url):
        request = Request(
            endpoint,
            data=body,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
                "User-Agent": "MeTube AI assistant",
            },
            method="POST",
        )
        try:
            with urlopen(request, timeout=45) as response:
                payload = json.loads(response.read().decode("utf-8"))
            content = payload.get("choices", [{}])[0].get("message", {}).get("content", "")
            answer = str(content or "").strip()
            if not answer:
                raise RuntimeError("AI 返回了空内容")
            return answer[:6000]
        except HTTPError as exc:
            body_text = _safe_provider_message(exc.read(1000).decode("utf-8", "replace"))
            if exc.code in (404, 405):
                last_error = RuntimeError("AI 接口路径不兼容")
                continue
            state = classify_provider_error(exc.code, body_text)
            if state == "invalid_key":
                raise RuntimeError("AI 密钥无效") from exc
            if state == "rate_limited":
                raise RuntimeError("AI 请求太频繁，请稍后再试") from exc
            raise RuntimeError("AI 服务暂时异常") from exc
        except (URLError, TimeoutError, OSError, json.JSONDecodeError) as exc:
            last_error = exc
    raise RuntimeError("AI 服务无法连接") from last_error


def _check_rate_limit(request: web.Request) -> None:
    peer = request.remote or "unknown"
    now = time.monotonic()
    bucket = _RATE_LIMIT[peer]
    while bucket and now - bucket[0] > _RATE_LIMIT_WINDOW:
        bucket.popleft()
    if len(bucket) >= _RATE_LIMIT_REQUESTS:
        raise web.HTTPTooManyRequests(reason="AI 请求太频繁，请稍后再试")
    bucket.append(now)


def register_ai_routes(routes: web.RouteTableDef, url_prefix: str) -> None:
    prefix = url_prefix if url_prefix.endswith("/") else f"{url_prefix}/"

    @routes.get(prefix + "ai/status")
    async def ai_status(_request: web.Request):
        now = time.monotonic()
        cached = _STATUS_CACHE.get("value")
        if cached is None or now >= float(_STATUS_CACHE.get("expires") or 0):
            cached = await asyncio.to_thread(_probe_provider_sync)
            _STATUS_CACHE.update({"value": cached, "expires": now + 60})
        return web.json_response(cached)

    @routes.post(prefix + "ai/chat")
    async def ai_chat(request: web.Request):
        _check_rate_limit(request)
        try:
            payload = await request.json()
        except (json.JSONDecodeError, TypeError) as exc:
            raise web.HTTPBadRequest(reason="请求内容不是有效 JSON") from exc
        if not isinstance(payload, dict):
            raise web.HTTPBadRequest(reason="请求内容格式错误")
        message = str(payload.get("message") or "").strip()
        context = str(payload.get("context") or "").strip()
        if not message:
            raise web.HTTPBadRequest(reason="请输入问题")
        if len(message) > 2000 or len(context) > 4000:
            raise web.HTTPRequestEntityTooLarge(max_size=6000, actual_size=len(message) + len(context))
        try:
            answer = await asyncio.to_thread(_chat_sync, message, context)
        except RuntimeError as exc:
            return web.json_response({"status": "error", "msg": str(exc)}, status=503)
        return web.json_response({"status": "ok", "answer": answer})
