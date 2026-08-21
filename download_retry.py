import copy
import time
from collections.abc import Callable, Sequence
from dataclasses import dataclass
from typing import Any, TypeVar
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


_T = TypeVar("_T")

_RECOVERABLE_DOWNLOAD_ERRORS = (
    "timed out",
    "timeout",
    "connection reset",
    "connection aborted",
    "connection refused",
    "network is unreachable",
    "remote end closed connection",
    "temporary failure in name resolution",
    "name or service not known",
    "failed to resolve",
    "unable to connect",
    "incomplete read",
    "broken pipe",
    "http error 403",
    "http error 408",
    "http error 429",
    "http error 500",
    "http error 502",
    "http error 503",
    "http error 504",
)


@dataclass(frozen=True)
class DownloadAttempt:
    key: str
    label: str
    delay: float = 0.0
    player_client: str | None = None
    anonymous: bool = False
    format_selector: str | None = None
    force_ipv4: bool = False


def build_media_download_attempts(
    download_type: str,
    base_format: str,
    compatibility_format: str | None = None,
) -> list[DownloadAttempt]:
    """Ordered recovery chain for YouTube media downloads.

    The first retry only refreshes the signed media URL. Later attempts change
    one compatibility boundary at a time, preserving best quality until the
    final combined-stream fallback.
    """
    attempts = [
        DownloadAttempt("default", "默认最佳线路"),
        DownloadAttempt("refresh", "刷新 YouTube 授权地址", delay=6),
        DownloadAttempt("mweb", "切换 mweb 播放器线路", delay=8, player_client="mweb", force_ipv4=True),
        DownloadAttempt(
            "android_vr",
            "切换匿名兼容线路",
            delay=10,
            player_client="android_vr",
            anonymous=True,
            force_ipv4=True,
        ),
    ]
    if download_type == "video" and compatibility_format:
        attempts.append(
            DownloadAttempt(
                "compatible",
                "切换兼容合并视频流",
                delay=12,
                player_client="android_vr",
                anonymous=True,
                format_selector=compatibility_format,
                force_ipv4=True,
            )
        )
    return attempts


def apply_download_attempt(base_params: dict[str, Any], attempt: DownloadAttempt) -> dict[str, Any]:
    params = copy.deepcopy(base_params)
    if attempt.player_client:
        extractor_args = copy.deepcopy(params.get("extractor_args") or {})
        youtube_args = copy.deepcopy(extractor_args.get("youtube") or {})
        youtube_args["player_client"] = [attempt.player_client]
        extractor_args["youtube"] = youtube_args
        params["extractor_args"] = extractor_args
    if attempt.anonymous:
        params.pop("cookiefile", None)
        params.pop("cookiesfrombrowser", None)
        headers = copy.deepcopy(params.get("http_headers") or {})
        for key in list(headers):
            if key.lower() in {"authorization", "cookie"}:
                headers.pop(key, None)
        if headers or "http_headers" in params:
            params["http_headers"] = headers
    if attempt.format_selector:
        params["format"] = attempt.format_selector
    if attempt.force_ipv4:
        params["source_address"] = "0.0.0.0"
    return params


def retry_download_attempts(
    operation: Callable[[DownloadAttempt, int], _T],
    attempts: Sequence[DownloadAttempt],
    *,
    sleep: Callable[[float], Any] = time.sleep,
    on_retry: Callable[[BaseException, DownloadAttempt, DownloadAttempt, int, int], Any] | None = None,
) -> _T:
    if not attempts:
        raise ValueError("attempts must not be empty")

    total = len(attempts)
    for index, attempt in enumerate(attempts):
        if attempt.delay > 0:
            sleep(float(attempt.delay))
        try:
            return operation(attempt, index + 1)
        except Exception as exc:
            if index + 1 >= total or not is_recoverable_download_error(exc):
                raise
            next_attempt = attempts[index + 1]
            if on_retry is not None:
                on_retry(exc, attempt, next_attempt, index + 1, total)

    raise RuntimeError("unreachable")


def wait_for_http_ready(
    url: str,
    *,
    timeout: float = 20.0,
    interval: float = 1.0,
    opener: Callable[..., Any] = urlopen,
    sleep: Callable[[float], Any] = time.sleep,
) -> bool:
    """Wait for a local helper service without making download startup fatal."""
    deadline = time.monotonic() + max(float(timeout), 0.0)
    while True:
        try:
            with opener(Request(url, headers={"User-Agent": "MeTube readiness check"}), timeout=2) as response:
                if 200 <= int(getattr(response, "status", 200)) < 500:
                    return True
        except (HTTPError, URLError, TimeoutError, OSError):
            pass
        if time.monotonic() >= deadline:
            return False
        sleep(max(float(interval), 0.05))


def is_recoverable_download_error(exc: BaseException) -> bool:
    message = str(exc).lower()
    return any(marker in message for marker in _RECOVERABLE_DOWNLOAD_ERRORS)


def retry_recoverable_download(
    operation: Callable[[], _T],
    *,
    max_attempts: int = 3,
    delays: Sequence[float] = (3, 8),
    sleep: Callable[[float], Any] = time.sleep,
    on_retry: Callable[[BaseException, int, int, float], Any] | None = None,
) -> _T:
    """Retry network failures; each operation call should create a fresh extractor."""
    if max_attempts < 1:
        raise ValueError("max_attempts must be at least 1")

    for attempt in range(1, max_attempts + 1):
        try:
            return operation()
        except Exception as exc:
            if attempt >= max_attempts or not is_recoverable_download_error(exc):
                raise
            delay = float(delays[min(attempt - 1, len(delays) - 1)]) if delays else 0.0
            if on_retry is not None:
                on_retry(exc, attempt, max_attempts, delay)
            if delay > 0:
                sleep(delay)

    raise RuntimeError("unreachable")
