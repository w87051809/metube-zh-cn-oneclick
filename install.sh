#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/www/metube}"
CUSTOM_DIR="${CUSTOM_DIR:-$APP_DIR/custom}"
STATE_DIR="${STATE_DIR:-$APP_DIR/state}"
DOWNLOAD_DIR="${DOWNLOAD_DIR:-/mnt/2TB/优兔视频}"
DOWNLOAD_TEMP_DIR="${DOWNLOAD_TEMP_DIR:-$DOWNLOAD_DIR/.下载临时文件}"
PORT="${PORT:-8081}"
IMAGE="${IMAGE:-ghcr.io/alexta69/metube:latest}"
RAW_BASE="${RAW_BASE:-https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main}"
SCRIPT_VERSION="${SCRIPT_VERSION:-20260720-3}"
DEFAULT_YTDL_OPTIONS='{"remote_components":["ejs:github"]}'
YTDL_OPTIONS_VALUE="${YTDL_OPTIONS:-$DEFAULT_YTDL_OPTIONS}"

if [ "${EUID:-$(id -u)}" -ne 0 ]; then
  echo "请用 root 运行，或者在命令前加 sudo。"
  exit 1
fi

need_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "缺少命令：$1"
    exit 1
  fi
}

need_cmd docker
need_cmd curl
need_cmd python3

if ! docker compose version >/dev/null 2>&1; then
  echo "Docker Compose 不可用。请先安装 Docker Compose 插件。"
  exit 1
fi

echo "创建目录..."
mkdir -p "$APP_DIR" "$CUSTOM_DIR" "$STATE_DIR" "$DOWNLOAD_DIR" "$DOWNLOAD_TEMP_DIR"

echo "下载中文覆盖脚本..."
curl -fsSL "$RAW_BASE/metube-zh-cn.js" -o "$CUSTOM_DIR/metube-zh-cn.js"

echo "下载后端素材包补丁..."
curl -fsSL "$RAW_BASE/ytdl.py" -o "$CUSTOM_DIR/ytdl.py"
curl -fsSL "$RAW_BASE/subscriptions.py" -o "$CUSTOM_DIR/subscriptions.py"
curl -fsSL "$RAW_BASE/dl_formats.py" -o "$CUSTOM_DIR/dl_formats.py"

echo "拉取 MeTube 镜像..."
docker pull "$IMAGE"

TMP_CONTAINER="metube-index-source-$$"
cleanup() {
  docker rm -f "$TMP_CONTAINER" >/dev/null 2>&1 || true
}
trap cleanup EXIT

echo "生成中文入口页面..."
docker create --name "$TMP_CONTAINER" "$IMAGE" >/dev/null
docker cp "$TMP_CONTAINER:/app/ui/dist/metube/browser/index.html" "$CUSTOM_DIR/index.html"

python3 - "$CUSTOM_DIR/index.html" "$SCRIPT_VERSION" <<'PY'
from pathlib import Path
import sys

path = Path(sys.argv[1])
version = sys.argv[2]
html = path.read_text(encoding="utf-8")

html = html.replace('<html lang="en"', '<html lang="zh-CN"')
html = html.replace(
    "<noscript>Please enable JavaScript to continue using this application.</noscript>",
    "<noscript>请启用 JavaScript 后继续使用这个页面。</noscript>",
)

script = f'<script src="metube-zh-cn.js?v={version}" defer></script>'
if "metube-zh-cn.js" not in html:
    html = html.replace("</body>", f"{script}</body>")

path.write_text(html, encoding="utf-8")
PY

echo "写入 Docker Compose 配置..."
cat > "$APP_DIR/docker-compose.yml" <<YAML
services:
  metube:
    image: $IMAGE
    container_name: metube
    restart: unless-stopped
    ports:
      - "0.0.0.0:$PORT:8081"
    volumes:
      - $DOWNLOAD_DIR:/downloads
      - $STATE_DIR:/state
      - $CUSTOM_DIR/index.html:/app/ui/dist/metube/browser/index.html:ro
      - $CUSTOM_DIR/metube-zh-cn.js:/app/ui/dist/metube/browser/metube-zh-cn.js:ro
      - $CUSTOM_DIR/dl_formats.py:/app/app/dl_formats.py:ro
      - $CUSTOM_DIR/ytdl.py:/app/app/ytdl.py:ro
      - $CUSTOM_DIR/subscriptions.py:/app/app/subscriptions.py:ro
    environment:
      - DOWNLOAD_DIR=/downloads
      - STATE_DIR=/state
      - TEMP_DIR=/downloads/.下载临时文件
      - SUBSCRIPTION_DEFAULT_CHECK_INTERVAL=5
      - SUBSCRIPTION_SCAN_PLAYLIST_END=50
      - DEFAULT_OPTION_PLAYLIST_ITEM_LIMIT=1
      - MAX_CONCURRENT_DOWNLOADS=3
      - DELETE_FILE_ON_TRASHCAN=true
      - DEFAULT_THEME=auto
      - YTDL_OPTIONS=$YTDL_OPTIONS_VALUE
      - TITLE_TRANSLATE_ENABLED=${TITLE_TRANSLATE_ENABLED:-true}
      - TITLE_TRANSLATE_TARGET_LANG=${TITLE_TRANSLATE_TARGET_LANG:-zh-CN}
      - TITLE_TRANSLATE_API_BASE=${TITLE_TRANSLATE_API_BASE:-}
      - TITLE_TRANSLATE_API_KEY=${TITLE_TRANSLATE_API_KEY:-}
      - TITLE_TRANSLATE_MODEL=${TITLE_TRANSLATE_MODEL:-gpt-5.5}
YAML

echo "启动 MeTube..."
cd "$APP_DIR"
docker compose up -d

echo
echo "安装完成。"
echo "访问地址：http://服务器IP:$PORT/"
echo "视频保存目录：$DOWNLOAD_DIR"
echo "临时下载目录：$DOWNLOAD_TEMP_DIR"
echo "配置文件：$APP_DIR/docker-compose.yml"
echo
echo "注意：已完成列表点删除，会同时删除硬盘里的对应视频文件。"
