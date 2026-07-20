(function () {
  const PROJECT_REPO_URL = "https://github.com/w87051809/metube-zh-cn-oneclick";

  const translations = new Map([
    ["MeTube", "视频下载"],
    ["MeTube Logo", "视频下载标志"],
    ["GitHub", "GitHub"],
    ["yt-dlp", "下载内核 yt-dlp"],
    ["yt-dlp-options", "yt-dlp 参数"],

    ["Enter video, channel, or playlist URL", "输入视频、频道或播放列表链接"],
    ["Download", "下载"],
    ["Subscribe", "订阅"],
    ["Download or subscribe", "下载或订阅"],
    ["Adding...", "正在添加..."],
    ["Subscribing...", "正在订阅..."],
    ["Canceling...", "正在取消..."],
    ["Cancel adding URL", "取消添加链接"],
    ["Connecting to server...", "正在连接服务器..."],
    ["Waiting for stream", "等待下载流"],
    ["Please enter a URL", "请输入一个链接"],
    ["No valid URLs found.", "没有找到有效链接。"],
    ["No URLs found for the selected filter.", "当前筛选条件下没有找到链接。"],
    ["No items found", "没有找到项目"],
    ["No results available", "没有可用结果"],

    ["Advanced Options", "高级选项"],
    ["Output", "输出"],
    ["Download Folder", "下载文件夹"],
    ["Custom Name Prefix", "自定义文件名前缀"],
    ["Add a prefix to downloaded filenames.", "给下载文件名前面加一段自定义文字。"],
    ["Split by chapters", "按章节拆分"],
    ["Clip start", "剪辑开始"],
    ["Clip end", "剪辑结束"],
    ["Optional start time (seconds, M:SS, or H:MM:SS). Blank = from start or YouTube &t= in URL.", "可选：开始时间，支持秒数、M:SS 或 H:MM:SS。留空就是从开头开始，或使用 YouTube 链接里的 &t= 时间。"],
    ["Optional end time. Blank = until end of media.", "可选：结束时间。留空就是一直到视频结束。"],
    ["Behavior", "行为"],
    ["Auto Start", "自动开始"],
    ["Items Limit", "条数限制"],
    ["Subscription Check (min)", "订阅检查间隔（分钟）"],
    ["Subscription Title Filter", "订阅标题过滤"],
    ["Skip members-only subscription videos", "跳过会员专属视频"],
    ["Option Presets", "参数预设"],
    ["Custom yt-dlp Options", "自定义 yt-dlp 参数"],
    ["Optional per-download yt-dlp overrides as a JSON object.", "可选：给这一次下载单独填写 yt-dlp JSON 参数，不影响其他下载。"],

    ["Tools", "工具"],
    ["Cookies", "登录凭据"],
    ["Upload Cookies", "上传登录凭据"],
    ["Replace Cookies", "替换登录凭据"],
    ["Remove uploaded cookies", "删除已上传登录凭据"],
    ["No cookies configured", "未配置登录凭据"],
    ["Cookies active", "登录凭据已启用"],
    ["Upload a cookies.txt file from your browser to authenticate restricted or private downloads.", "上传浏览器导出的 cookies.txt，用来下载需要登录、受限或私有的视频。"],
    ["Error uploading cookies.", "上传登录凭据失败。"],
    ["Error deleting cookies.", "删除登录凭据失败。"],
    ["Error reloading yt-dlp options:", "重新加载 yt-dlp 参数失败："],

    ["Bulk Actions", "批量操作"],
    ["Import URLs", "导入链接"],
    ["Export URLs", "导出链接"],
    ["Copy URLs", "复制链接"],
    ["Batch Import URLs", "批量导入链接"],
    ["Paste one video URL per line", "每行粘贴一个视频链接"],
    ["Cancel Import", "取消导入"],
    ["No URLs found for the selected filter.", "当前筛选条件下没有可导出的链接。"],
    ["Failed to copy URLs.", "复制链接失败。"],
    ["Failed to copy to clipboard. Your browser may require HTTPS for clipboard access.", "复制到剪贴板失败。浏览器可能要求 HTTPS 才允许访问剪贴板。"],
    ["Copied!", "已复制！"],

    ["Downloading", "下载中"],
    ["Completed", "已完成"],
    ["Cancel selected", "取消选中"],
    ["Download selected", "下载选中"],
    ["Download Selected", "下载选中"],
    ["Clear selected", "删除选中和文件"],
    ["Clear completed", "删除已完成和文件"],
    ["Clear completed failed", "清除已完成项目失败"],
    ["Clear failed", "删除失败记录"],
    ["Clear failed downloads failed", "清除失败下载记录失败"],
    ["Retry failed", "重试失败"],
    ["Delete failed", "删除失败"],
    ["Delete completed item", "删除记录和硬盘文件"],
    ["Delete", "删除"],
    ["Remove", "移除"],
    ["Clear all", "清空全部"],
    ["completed", "已完成"],
    ["failed", "失败"],

    ["Video", "视频"],
    ["Audio", "音频"],
    ["Captions", "字幕"],
    ["Thumbnail", "封面图"],
    ["Speed", "速度"],
    ["ETA", "剩余时间"],
    ["Type", "类型"],
    ["Quality", "画质"],
    ["Codec", "编码"],
    ["Codec / Format", "编码 / 格式"],
    ["Format", "格式"],
    ["File Size", "文件大小"],
    ["Downloaded", "已下载"],
    ["Language", "语言"],
    ["Subtitle Source", "字幕来源"],
    ["Template", "模板"],

    ["Subscriptions", "订阅"],
    ["Check all now", "立即检查全部"],
    ["Check selected", "立即检查选中"],
    ["Check now", "立即检查"],
    ["Checking", "正在检查"],
    ["Checking now", "正在检查"],
    ["Delete selected", "删除选中"],
    ["Delete subscription", "删除订阅"],
    ["Delete subscription failed", "删除订阅失败"],
    ["Delete subscriptions failed", "删除订阅失败"],
    ["Subscribe failed", "订阅失败"],
    ["Invalid subscription title filter (regex)", "订阅标题过滤写错了：正则表达式无效"],
    ["Edit subscription title filter (subscriptions only; not for one-off downloads)", "编辑订阅标题过滤（只影响订阅，不影响单次下载）"],
    ["Name", "名称"],
    ["URL", "链接"],
    ["URL:", "链接:"],
    ["Filter", "过滤"],
    ["Interval (min)", "间隔（分钟）"],
    ["Last checked", "上次检查"],
    ["Status", "状态"],

    ["Select all", "全选"],
    ["Select all queue items", "全选下载队列"],
    ["Select all done items", "全选已完成"],
    ["Select all subscriptions", "全选订阅"],
    ["Select item", "选择项目"],
    ["Select subscription", "选择订阅"],
    ["Pause", "暂停"],
    ["Resume", "恢复"],
    ["Edit", "编辑"],
    ["Save", "保存"],
    ["Cancel", "取消"],
    ["Close", "关闭"],
    ["Paused", "已暂停"],
    ["Active", "已启用"],

    ["Default", "默认"],
    ["Auto", "自动"],
    ["Dark", "深色"],
    ["Light", "浅色"],
    ["Best", "最佳"],
    ["Worst", "最低"],
    ["Yes", "是"],
    ["No", "否"],
    ["Oldest first", "最早优先"],
    ["Newest first", "最新优先"],
    ["Add item", "添加项目"],
    ["Optional regex", "可选正则"],
    ["e.g. 2:26", "例如 2:26"],
    ["e.g. 3:24", "例如 3:24"],
    ["e.g. en, es, zh-Hans", "例如 zh-Hans, en, es"],
    ["LIVE", "直播"],
    ["- starts in", "- 开始于"],
    [" - starts in", " - 开始于"],
    ["iOS Compatible", "iOS 兼容"],

    ["Error:", "错误:"],
    ["Message:", "消息:"],
    ["Important", "重要"],
    ["Click for details", "点击查看详情"],
    ["Copy error details to clipboard", "复制错误详情到剪贴板"],
    ["Failed to cancel adding:", "取消添加失败："],
    ["Invalid event target", "事件目标无效"],
    ["No transports available", "没有可用的连接通道"],
    ["Failed to sanitize html because the input is unstable", "清理 HTML 失败：输入内容不稳定"],
    ["DownloadProgress", "下载进度"],
    ["UploadProgress", "上传进度"],
    ["MissingIcon", "缺少图标"],
    ["aria-labelledby", "由标签说明"],
    ["control", "控件"],
    ["role", "角色"],

    ["Error adding URL: 400: missing 'url', 'download_type', or 'quality'", "添加链接失败：请输入一个链接"],
    ["Error subscribing URL: 400: missing 'url', 'download_type', or 'quality'", "订阅失败：请输入一个链接"],
    ["Error adding subscription: 400: missing 'url', 'download_type', or 'quality'", "订阅失败：请输入一个链接"],
  ]);

  const dynamicRules = [
    [/^Error adding URL:\s*(.*)$/i, "添加链接失败："],
    [/^Error subscribing URL:\s*(.*)$/i, "订阅失败："],
    [/^Error adding subscription:\s*(.*)$/i, "订阅失败："],
    [/^Subscribe failed:\s*(.*)$/i, "订阅失败："],
    [/^This material is already subscribed for this URL$/i, "这个素材已经订阅过了"],
    [/^This URL is already subscribed$/i, "这个链接已经订阅过了"],
    [/^Delete failed:\s*(.*)$/i, "删除失败："],
    [/^Delete completed item:\s*(.*)$/i, "删除已完成项目失败："],
    [/^Delete subscription failed:\s*(.*)$/i, "删除订阅失败："],
    [/^Delete subscriptions failed:\s*(.*)$/i, "删除订阅失败："],
    [/^Clear completed failed:\s*(.*)$/i, "清除已完成项目失败："],
    [/^Clear failed downloads failed:\s*(.*)$/i, "清除失败下载记录失败："],
    [/^Failed to cancel adding:\s*(.*)$/i, "取消添加失败："],
    [/^Error uploading cookies\.\s*(.*)$/i, "上传登录凭据失败："],
    [/^Error deleting cookies\.\s*(.*)$/i, "删除登录凭据失败："],
    [/^Error reloading yt-dlp options:\s*(.*)$/i, "重新加载 yt-dlp 参数失败："],
    [/^Download result file for\s+(.+)$/i, "下载文件："],
    [/^Share result file for\s+(.+)$/i, "分享文件："],
    [/^Open source URL for\s+(.+)$/i, "打开原始链接："],
    [/^Start download for\s+(.+)$/i, "开始下载："],
    [/^Retry download for\s+(.+)$/i, "重试下载："],
    [/^Toggle error details for\s+(.+)$/i, "展开或收起错误详情："],
    [/^Download chapter file\s+(.+)$/i, "下载章节文件："],
    [/^Open chapter file\s+(.+)$/i, "打开章节文件："],
    [/^Delete completed item\s+(.+)$/i, "删除记录和硬盘文件："],
    [/^Select item\s+(.+)$/i, "选择项目："],
    [/^Select subscription\s+(.+)$/i, "选择订阅："],
    [/^Check now\s+(.+)$/i, "立即检查："],
    [/^Pause\s+(.+)$/i, "暂停订阅："],
    [/^Resume\s+(.+)$/i, "恢复订阅："],
    [/^Delete subscription\s+(.+)$/i, "删除订阅："],
    [/^(\d+)\s+completed$/i, "$1 个已完成"],
    [/^(\d+)\s+failed$/i, "$1 个失败"],
  ];

  const detailTranslations = [
    [/^400:\s*missing 'url', 'download_type', or 'quality'$/i, "请输入链接，并确认下载类型和画质已选择"],
    [/missing 'url'/i, "缺少链接"],
    [/missing 'download_type'/i, "缺少下载类型"],
    [/missing 'quality'/i, "缺少画质"],
    [/network/i, "网络连接异常"],
    [/timeout/i, "连接超时"],
    [/forbidden|403/i, "没有权限访问，可能需要 Cookie"],
    [/unauthorized|401/i, "未登录或登录已失效，可能需要重新上传 Cookie"],
    [/not found|404/i, "没有找到内容，链接可能失效"],
    [/No video formats found/i, "没有找到视频格式，通常是 YouTube 要登录确认，请点 YouTube 登录入口上传 cookies.txt"],
    [/Only images are available/i, "只拿到封面，视频需要 YouTube 登录凭据"],
    [/Private video/i, "这是私有视频，需要有权限的 Cookie"],
    [/Sign in to confirm/i, "需要登录确认，请点 YouTube 登录入口上传 cookies.txt"],
    [/This video is unavailable/i, "这个视频不可用"],
  ];

  const attributeNames = [
    "aria-label",
    "aria-description",
    "alt",
    "title",
    "placeholder",
    "ngbtooltip",
    "ng-reflect-ngb-tooltip",
    "data-bs-original-title",
    "data-original-title",
  ];
  const observedAttributeNames = [...attributeNames, "href"];

  const thumbnailState = {
    byUrl: new Map(),
    byTitle: new Map(),
    byId: new Map(),
    loading: false,
  };

  function installThumbnailStyles() {
    if (document.getElementById("metube-thumb-style")) return;
    const style = document.createElement("style");
    style.id = "metube-thumb-style";
    style.textContent = `
      .metube-row-thumb {
        width: 38px;
        height: 22px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 0 8px 0 2px;
        border-radius: 3px;
        background: rgba(108, 117, 125, .28);
        border: 1px solid rgba(173, 181, 189, .32);
        vertical-align: middle;
        line-height: 0;
      }
      .metube-row-thumb img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
      td.metube-video-thumb-cell {
        white-space: nowrap;
      }
      td.metube-video-thumb-cell > a,
      td.metube-video-thumb-cell > button {
        max-width: calc(100% - 56px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
      td.metube-video-thumb-cell > button {
        display: inline-flex;
        align-items: center;
      }
      .metube-row-thumb.is-empty::before {
        content: "";
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 8px solid currentColor;
        color: rgba(255, 255, 255, .72);
      }
      @media (max-width: 700px) {
        .metube-row-thumb {
          width: 34px;
          height: 20px;
          margin-right: 6px;
        }
      }
      .metube-material-bundle {
        max-width: 960px;
        margin: .75rem auto 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px 14px;
        color: var(--bs-body-color);
        font-size: .95rem;
      }
      .metube-material-bundle strong {
        font-weight: 600;
      }
      .metube-material-bundle label {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        margin: 0;
        white-space: nowrap;
        cursor: pointer;
      }
      .metube-material-bundle input {
        margin: 0;
      }
      .metube-material-hint {
        color: var(--bs-secondary-color);
        font-size: .85rem;
      }
      .metube-youtube-login-entry {
        position: fixed;
        top: 8px;
        right: 14px;
        z-index: 1050;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: 8px;
        min-height: 34px;
        max-width: calc(100vw - 190px);
        padding: 0;
        border: 0;
        background: transparent;
        color: var(--bs-body-color);
        font-size: .86rem;
      }
      .metube-youtube-login-entry strong {
        font-weight: 600;
        white-space: nowrap;
      }
      .metube-youtube-login-entry button,
      .metube-youtube-login-entry a {
        border: 1px solid rgba(13, 110, 253, .72);
        border-radius: 4px;
        padding: 3px 8px;
        background: rgba(13, 110, 253, .14);
        color: #6ea8fe;
        text-decoration: none;
        line-height: 1.25;
        cursor: pointer;
        white-space: nowrap;
      }
      .metube-youtube-login-entry button:hover,
      .metube-youtube-login-entry a:hover {
        background: rgba(13, 110, 253, .24);
        color: #9ec5fe;
        text-decoration: none;
      }
      .metube-youtube-login-entry .metube-youtube-login-note {
        display: none;
      }
      .metube-youtube-login-entry .metube-youtube-login-status {
        margin-left: 2px;
        color: #ffc107;
        white-space: nowrap;
      }
      .metube-youtube-login-entry .metube-youtube-login-status.is-active {
        color: #20c997;
      }
      @media (max-width: 900px) {
        .metube-youtube-login-entry {
          top: 48px;
          right: 8px;
          max-width: calc(100vw - 16px);
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 6px;
        }
      }
      .metube-material-toast {
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 99999;
        max-width: min(420px, calc(100vw - 36px));
        padding: 10px 12px;
        border-radius: 6px;
        color: #fff;
        background: rgba(25, 135, 84, .96);
        box-shadow: 0 8px 22px rgba(0, 0, 0, .2);
        font-size: 14px;
      }
      .metube-material-toast.is-error {
        background: rgba(220, 53, 69, .96);
      }
    `;
    document.head.appendChild(style);
  }

  function normalizeKey(value) {
    return cleanText(String(value || "")).toLowerCase();
  }

  function getYoutubeIdFromUrl(value) {
    if (!value) return "";
    try {
      const url = new URL(value, window.location.href);
      const host = url.hostname.replace(/^www\./, "");
      if (host === "youtu.be") {
        const id = url.pathname.split("/").filter(Boolean)[0] || "";
        if (/^[A-Za-z0-9_-]{11}$/.test(id)) return id;
      }
      if (host.endsWith("youtube.com")) {
        const watchId = url.searchParams.get("v");
        if (/^[A-Za-z0-9_-]{11}$/.test(watchId || "")) return watchId || "";
        const parts = url.pathname.split("/").filter(Boolean);
        const markerIndex = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
        const id = markerIndex >= 0 ? parts[markerIndex + 1] : "";
        if (/^[A-Za-z0-9_-]{11}$/.test(id || "")) return id || "";
      }
    } catch (_) {
      const match = String(value).match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([A-Za-z0-9_-]{11})/);
      if (match) return match[1];
    }
    return "";
  }

  function getYoutubeId(item) {
    if (!item) return "";
    if (/^[A-Za-z0-9_-]{11}$/.test(item.id || "")) return item.id;
    return getYoutubeIdFromUrl(item.url);
  }

  function indexDownloadItem(item) {
    if (!item || typeof item !== "object") return;
    const title = normalizeKey(item.title);
    const url = normalizeKey(item.url);
    const id = normalizeKey(item.id || getYoutubeId(item));
    if (title) thumbnailState.byTitle.set(title, item);
    if (url) thumbnailState.byUrl.set(url, item);
    if (id) thumbnailState.byId.set(id, item);
  }

  async function refreshThumbnailIndex() {
    if (thumbnailState.loading) return;
    thumbnailState.loading = true;
    try {
      const response = await fetch("history", { cache: "no-store" });
      if (!response.ok) return;
      const data = await response.json();
      const byUrl = new Map();
      const byTitle = new Map();
      const byId = new Map();
      thumbnailState.byUrl = byUrl;
      thumbnailState.byTitle = byTitle;
      thumbnailState.byId = byId;
      for (const listName of ["done", "queue", "pending"]) {
        const list = Array.isArray(data[listName]) ? data[listName] : [];
        for (const item of list) indexDownloadItem(item);
      }
      enhanceThumbnails();
    } catch (_) {
      // 网络临时失败时不打扰页面，下一轮轮询会继续补。
    } finally {
      thumbnailState.loading = false;
    }
  }

  function findItemForCell(cell) {
    const anchors = Array.from(cell.querySelectorAll("a[href]"));
    for (const anchor of anchors) {
      const href = normalizeKey(anchor.getAttribute("href"));
      const absoluteHref = normalizeKey(anchor.href);
      const id = getYoutubeIdFromUrl(anchor.href || anchor.getAttribute("href"));
      if (thumbnailState.byUrl.has(href)) return thumbnailState.byUrl.get(href);
      if (thumbnailState.byUrl.has(absoluteHref)) return thumbnailState.byUrl.get(absoluteHref);
      if (id && thumbnailState.byId.has(normalizeKey(id))) return thumbnailState.byId.get(normalizeKey(id));
    }

    const titleSources = anchors.concat(Array.from(cell.querySelectorAll("button")));
    const title = titleSources
      .map((source) => cleanText(source.textContent || ""))
      .filter(Boolean)
      .sort((a, b) => b.length - a.length)[0];
    const titleKey = normalizeKey(title);
    if (titleKey && thumbnailState.byTitle.has(titleKey)) return thumbnailState.byTitle.get(titleKey);

    const cellText = normalizeKey(cell.textContent || "");
    if (cellText && thumbnailState.byTitle.has(cellText)) return thumbnailState.byTitle.get(cellText);
    for (const [knownTitle, item] of thumbnailState.byTitle) {
      if (knownTitle && cellText.includes(knownTitle)) return item;
    }
    return null;
  }

  function createThumbnail(item, fallbackUrl) {
    const id = getYoutubeId(item) || getYoutubeIdFromUrl(fallbackUrl);
    const holder = document.createElement("span");
    holder.className = "metube-row-thumb";
    holder.setAttribute("aria-hidden", "true");
    holder.title = "视频封面";

    if (!id) {
      holder.classList.add("is-empty");
      return holder;
    }

    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.referrerPolicy = "no-referrer";
    img.alt = "";
    img.src = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
    img.onerror = () => {
      img.remove();
      holder.classList.add("is-empty");
    };
    holder.appendChild(img);
    return holder;
  }

  function enhanceThumbnails() {
    installThumbnailStyles();
    for (const row of document.querySelectorAll("table tbody tr")) {
      const cells = row.querySelectorAll("td");
      if (cells.length < 2) continue;
      const cell = cells[1];
      if (cell.querySelector(".metube-row-thumb")) continue;
      const item = findItemForCell(cell);
      if (!item) continue;
      const anchor = cell.querySelector("a[href]");
      cell.classList.add("metube-video-thumb-cell");
      cell.insertBefore(createThumbnail(item, anchor && anchor.href), cell.firstChild);
    }
  }

  function cleanText(value) {
    return value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
  }

  function translateDetail(value) {
    const cleaned = cleanText(value);
    const exact = translations.get(cleaned);
    if (exact) return exact;
    for (const [pattern, translated] of detailTranslations) {
      if (pattern.test(cleaned)) return translated;
    }
    return cleaned;
  }

  function translateCleaned(cleaned) {
    const exact = translations.get(cleaned);
    if (exact) return exact;

    for (const [pattern, prefix] of dynamicRules) {
    const match = cleaned.match(pattern);
      if (match) {
        if (prefix.includes("$1")) return prefix.replace("$1", match[1] || "");
        return `${prefix}${translateDetail(match[1] || "")}`;
      }
    }

    return null;
  }

  function translateValue(value) {
    if (!value) return value;
    const cleaned = cleanText(value);
    const translated = translateCleaned(cleaned);
    if (!translated) return value;

    const leading = value.match(/^\s*/)[0];
    const trailing = value.match(/\s*$/)[0];
    return `${leading}${translated}${trailing}`;
  }

  function translateTextNode(node) {
    const next = translateValue(node.nodeValue);
    if (next !== node.nodeValue) node.nodeValue = next;
  }

  function translateElement(element) {
    if (!element.hasAttribute) return;
    for (const name of attributeNames) {
      if (!element.hasAttribute(name)) continue;
      const current = element.getAttribute(name);
      const next = translateValue(current);
      if (next !== current) element.setAttribute(name, next);
    }
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateElement(root);
    if (root.nodeType === Node.TEXT_NODE) translateTextNode(root);

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    );

    let node = walker.currentNode;
    while (node) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
      if (node.nodeType === Node.ELEMENT_NODE) translateElement(node);
      node = walker.nextNode();
    }
  }

  function rewriteProjectLinks(root = document) {
    if (!root.querySelectorAll) return;
    const links = root.querySelectorAll('a[href="https://github.com/alexta69/metube"], a.github-link');
    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const text = cleanText(link.textContent || "");
      if (!link.classList.contains("github-link") && !href.includes("alexta69/metube") && text !== "GitHub") return;
      if (href !== PROJECT_REPO_URL) link.setAttribute("href", PROJECT_REPO_URL);
      link.setAttribute("title", "\u6253\u5f00\u672c\u4ed3\u5e93");
      link.setAttribute("aria-label", "\u6253\u5f00\u672c\u4ed3\u5e93 GitHub");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
  }

  let defaultAutoFormatApplied = false;
  function applyDefaultAutoFormat() {
    if (defaultAutoFormatApplied) return;

    const formatSelect = Array.from(document.querySelectorAll("select")).find((select) => {
      const optionTexts = Array.from(select.options).map((option) => cleanText(option.textContent || option.label || ""));
      return optionTexts.some((text) => text === "MP4") && optionTexts.some((text) => text.includes("iOS"));
    });
    if (!formatSelect) return;

    const currentText = cleanText(formatSelect.selectedOptions[0]?.textContent || "");
    const currentValue = String(formatSelect.value || "").toLowerCase();
    const isAuto = currentText === "自动" || currentText === "Auto" || currentValue.includes("any") || formatSelect.selectedIndex === 0;
    if (isAuto) {
      defaultAutoFormatApplied = true;
      return;
    }

    const autoOption = Array.from(formatSelect.options).find((option) => {
      const text = cleanText(option.textContent || option.label || "");
      const value = String(option.value || "").toLowerCase();
      return text === "自动" || text === "Auto" || value.includes("any");
    });
    if (!autoOption) return;

    formatSelect.value = autoOption.value;
    autoOption.selected = true;
    formatSelect.dispatchEvent(new Event("input", { bubbles: true }));
    formatSelect.dispatchEvent(new Event("change", { bubbles: true }));
    defaultAutoFormatApplied = true;
  }

  function findTypeSelect() {
    return Array.from(document.querySelectorAll("select")).find((select) => {
      const optionTexts = Array.from(select.options).map((option) => cleanText(option.textContent || option.label || ""));
      return optionTexts.includes("视频") && optionTexts.includes("字幕") && optionTexts.includes("封面图");
    });
  }

  function findUrlInput() {
    const inputs = Array.from(document.querySelectorAll("input, textarea")).filter((input) => {
      const rect = input.getBoundingClientRect();
      const type = String(input.getAttribute("type") || "text").toLowerCase();
      return rect.width > 160 && rect.height > 10 && !input.disabled && !["checkbox", "radio", "file", "hidden"].includes(type);
    });
    return inputs.find((input) => /视频|频道|播放列表|video|channel|playlist/i.test(input.getAttribute("placeholder") || "")) || inputs[0] || null;
  }

  function installMaterialBundleControls() {
    installThumbnailStyles();
    if (document.getElementById("metube-material-bundle")) return;
    const typeSelect = findTypeSelect();
    if (!typeSelect) return;

    const bundle = document.createElement("div");
    bundle.id = "metube-material-bundle";
    bundle.className = "metube-material-bundle";
    bundle.innerHTML = `
      <strong>素材包</strong>
      <label><input type="checkbox" data-material-asset="video" checked> 视频自动</label>
      <label><input type="checkbox" data-material-asset="captions" checked> 字幕SRT</label>
      <label><input type="checkbox" data-material-asset="thumbnail" checked> 封面JPG</label>
      <span class="metube-material-hint">点“下载/订阅”时一次添加这些任务，不单独下音频。</span>
    `;

    const row = typeSelect.closest(".row") || typeSelect.parentElement?.parentElement || typeSelect.parentElement;
    if (row && row.parentElement) {
      row.insertAdjacentElement("afterend", bundle);
    }
  }

  let youtubeLoginStatusLoading = false;
  let youtubeLoginLastStatusCheck = 0;

  function updateYoutubeLoginStatus(hasCookies, text) {
    const status = document.querySelector("#metube-youtube-login-entry .metube-youtube-login-status");
    if (!status) return;
    status.classList.toggle("is-active", !!hasCookies);
    status.textContent = text || (hasCookies ? "登录凭据已启用" : "未配置登录凭据");
  }

  async function refreshYoutubeLoginStatus(force = false, options = {}) {
    const notify = !!options.notify;
    const now = Date.now();
    if (youtubeLoginStatusLoading) {
      if (notify) showMaterialToast("正在检查登录状态，请稍等");
      return null;
    }
    if (!force && now - youtubeLoginLastStatusCheck < 15000) return;
    youtubeLoginStatusLoading = true;
    youtubeLoginLastStatusCheck = now;
    if (force || notify) updateYoutubeLoginStatus(false, "正在检查...");
    try {
      const response = await fetch("cookie-status", { cache: "no-store" });
      const raw = await response.text();
      let data = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch (_) {
        data = { msg: raw };
      }
      if (!response.ok || data.status === "error") {
        throw new Error(translateDetail(data.msg || response.statusText || "检查登录状态失败"));
      }
      const hasCookies = !!data.has_cookies;
      updateYoutubeLoginStatus(hasCookies);
      if (notify) {
        showMaterialToast(hasCookies ? "登录凭据已启用" : "未配置登录凭据，请先上传 cookies.txt", hasCookies ? "success" : "error");
      }
      return hasCookies;
    } catch (error) {
      updateYoutubeLoginStatus(false, "登录状态检查失败");
      if (notify) showMaterialToast(`登录状态检查失败：${error.message || error}`, "error");
      return false;
    } finally {
      youtubeLoginStatusLoading = false;
    }
  }

  async function uploadYoutubeCookies(file) {
    if (!file) return;
    const formData = new FormData();
    formData.append("cookies", file, file.name || "cookies.txt");
    updateYoutubeLoginStatus(false, "正在上传...");
    try {
      const response = await fetch("upload-cookies", { method: "POST", body: formData });
      const raw = await response.text();
      let data = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch (_) {
        data = { msg: raw };
      }
      if (!response.ok || data.status === "error") {
        throw new Error(translateDetail(data.msg || response.statusText || "上传登录凭据失败"));
      }
      updateYoutubeLoginStatus(true);
      showMaterialToast("YouTube 登录凭据已上传");
      refreshYoutubeLoginStatus(true);
    } catch (error) {
      updateYoutubeLoginStatus(false, "上传失败");
      showMaterialToast(`上传登录凭据失败：${error.message || error}`, "error");
    }
  }

  function installYoutubeLoginEntry() {
    installThumbnailStyles();
    if (document.getElementById("metube-youtube-login-entry")) return;
    const typeSelect = findTypeSelect();
    if (!typeSelect) return;

    const entry = document.createElement("div");
    entry.id = "metube-youtube-login-entry";
    entry.className = "metube-youtube-login-entry";
    entry.innerHTML = `
      <strong>YouTube 登录入口</strong>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener">打开登录</a>
      <button type="button" data-youtube-cookie-upload>上传 Cookie</button>
      <button type="button" data-youtube-cookie-status>检查</button>
      <span class="metube-youtube-login-note">视频提示需要登录时，用这里上传登录凭据。</span>
      <span class="metube-youtube-login-status">正在检查...</span>
      <input type="file" accept=".txt,text/plain" hidden>
    `;

    document.body.appendChild(entry);

    const input = entry.querySelector("input[type=file]");
    entry.querySelector("[data-youtube-cookie-upload]")?.addEventListener("click", () => input?.click());
    const statusButton = entry.querySelector("[data-youtube-cookie-status]");
    statusButton?.addEventListener("click", async () => {
      const oldText = statusButton.textContent || "检查状态";
      statusButton.disabled = true;
      statusButton.textContent = "正在检查...";
      try {
        await refreshYoutubeLoginStatus(true, { notify: true });
      } finally {
        statusButton.disabled = false;
        statusButton.textContent = oldText;
      }
    });
    input?.addEventListener("change", () => {
      const file = input.files && input.files[0];
      uploadYoutubeCookies(file).finally(() => {
        input.value = "";
      });
    });
    refreshYoutubeLoginStatus(true);
  }

  function selectedMaterialAssets() {
    const checked = Array.from(document.querySelectorAll("#metube-material-bundle input[data-material-asset]:checked"))
      .map((input) => input.getAttribute("data-material-asset"));
    return checked.length ? checked : ["video", "captions", "thumbnail"];
  }

  function showMaterialToast(message, level = "success") {
    const toast = document.createElement("div");
    toast.className = `metube-material-toast${level === "error" ? " is-error" : ""}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), level === "error" ? 6000 : 3500);
  }

  function materialPayload(url, asset) {
    const base = {
      url,
      folder: "",
      custom_name_prefix: "",
      playlist_item_limit: 1,
      auto_start: true,
      split_by_chapters: false,
      chapter_template: "%(title)s - %(section_number)02d - %(section_title)s.%(ext)s",
      subtitle_language: "en",
      subtitle_mode: "prefer_manual",
      check_interval_minutes: 5,
      title_regex: "",
      skip_subscriber_only: false,
      ytdl_options_presets: [],
      ytdl_options_overrides: {},
    };

    if (asset === "video") {
      return { ...base, download_type: "video", codec: "auto", format: "any", quality: "best" };
    }
    if (asset === "captions") {
      return { ...base, download_type: "captions", codec: "auto", format: "srt", quality: "best" };
    }
    return { ...base, download_type: "thumbnail", codec: "auto", format: "jpg", quality: "best" };
  }

  function isAlreadySubscribedMessage(message) {
    return /already subscribed|已经订阅过/.test(String(message || ""));
  }

  async function postMaterialAsset(payload, endpoint, options = {}) {
    const response = await fetch(new URL(endpoint, window.location.href), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const raw = await response.text();
    let data = {};
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch (_) {
      data = { status: response.ok ? "ok" : "error", msg: raw };
    }
    if (!response.ok || data.status === "error") {
      const message = translateDetail(data.msg || response.statusText || "添加失败");
      if (options.ignoreAlreadySubscribed && isAlreadySubscribedMessage(message)) {
        return { status: "skipped", msg: message };
      }
      throw new Error(message);
    }
    return data;
  }

  function materialButtonAction(button) {
    const text = cleanText(button.textContent || button.getAttribute("aria-label") || "");
    let action = "";
    if (text === "下载" || text === "Download") action = "add";
    if (text === "订阅" || text === "Subscribe") action = "subscribe";
    if (!action) return "";
    const input = findUrlInput();
    if (!input) return "";
    const inputRect = input.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    return buttonRect.top < inputRect.bottom + 80 && buttonRect.bottom > inputRect.top - 80 ? action : "";
  }

  let materialSubmitInProgress = false;
  async function handleMaterialActionClick(event) {
    const button = event.target.closest?.("button");
    if (!button || button.disabled) return;
    const action = materialButtonAction(button);
    if (!action) return;
    const bundle = document.getElementById("metube-material-bundle");
    if (!bundle) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (materialSubmitInProgress) return;
    const input = findUrlInput();
    const url = cleanText(input?.value || "");
    if (!url) {
      showMaterialToast("请输入一个链接", "error");
      return;
    }

    const assets = selectedMaterialAssets();
    const oldText = button.textContent;
    const isSubscribe = action === "subscribe";
    materialSubmitInProgress = true;
    button.disabled = true;
    button.textContent = isSubscribe ? "正在订阅素材包..." : "正在添加素材包...";
    try {
      let skipped = 0;
      for (const asset of assets) {
        const result = await postMaterialAsset(
          materialPayload(url, asset),
          isSubscribe ? "subscribe" : "add",
          { ignoreAlreadySubscribed: isSubscribe },
        );
        if (result.status === "skipped") skipped += 1;
      }
      if (isSubscribe) {
        const added = Math.max(assets.length - skipped, 0);
        showMaterialToast(skipped ? `素材包订阅已处理：新增 ${added} 条，已存在 ${skipped} 条` : `已添加素材包订阅：${assets.length} 条`);
      } else {
        showMaterialToast(`已添加素材包：${assets.length} 个任务`);
      }
      input.value = "";
      input.dispatchEvent(new Event("input", { bubbles: true }));
      refreshThumbnailIndex();
    } catch (error) {
      showMaterialToast(`${isSubscribe ? "素材包订阅失败" : "素材包添加失败"}：${error.message || error}`, "error");
    } finally {
      materialSubmitInProgress = false;
      button.disabled = false;
      button.textContent = oldText;
    }
  }

  document.addEventListener("click", handleMaterialActionClick, true);

  let scheduled = false;
  function scheduleTranslate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      document.documentElement.lang = "zh-CN";
      document.title = "视频下载";
      translateTree(document.body);
      rewriteProjectLinks(document);
      enhanceThumbnails();
      applyDefaultAutoFormat();
      installMaterialBundleControls();
      installYoutubeLoginEntry();
      refreshYoutubeLoginStatus();
    });
  }

  document.addEventListener("DOMContentLoaded", scheduleTranslate);
  window.addEventListener("load", scheduleTranslate);

  const observer = new MutationObserver(scheduleTranslate);
  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: observedAttributeNames,
  });

  scheduleTranslate();
  refreshThumbnailIndex();
  setInterval(refreshThumbnailIndex, 10000);
  setTimeout(scheduleTranslate, 300);
  setTimeout(scheduleTranslate, 800);
  setTimeout(scheduleTranslate, 1500);
  setTimeout(scheduleTranslate, 3000);
})();
