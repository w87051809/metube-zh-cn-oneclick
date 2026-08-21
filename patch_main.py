from pathlib import Path
import sys


_IMPORT = "from ai_api import register_ai_routes"
_IMPORT_MARKER = "from yt_dlp.version import __version__ as yt_dlp_version"
_STATIC_MARKER = "routes.static(config.URL_PREFIX + 'download/', config.DOWNLOAD_DIR"
_REGISTER = "register_ai_routes(routes, config.URL_PREFIX)"


def patch_main_source(source: str) -> str:
    result = source
    if _IMPORT not in result:
        if _IMPORT_MARKER not in result:
            raise ValueError("main.py import marker not found")
        result = result.replace(_IMPORT_MARKER, f"{_IMPORT_MARKER}\n{_IMPORT}", 1)
    if _REGISTER not in result:
        index = result.find(_STATIC_MARKER)
        if index < 0:
            raise ValueError("main.py static route marker not found")
        result = result[:index] + f"{_REGISTER}\n\n" + result[index:]
    return result


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: patch_main.py MAIN_PY", file=sys.stderr)
        return 2
    path = Path(sys.argv[1])
    source = path.read_text(encoding="utf-8")
    path.write_text(patch_main_source(source), encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
