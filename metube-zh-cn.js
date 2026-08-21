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
    ["Automatically start downloads when added.", "添加任务后自动开始下载。"],
    ["Type to filter existing folders, or enter a new folder name.", "输入文字筛选已有文件夹，也可以直接填新文件夹名。"],
    ["Choose one or more yt-dlp option presets configured on the server (applied in order).", "选择服务器上配置好的 yt-dlp 参数预设，可多选，会按顺序生效。"],

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
    ["Chinese (Simplified)", "简体中文"],
    ["Chinese (Traditional)", "繁体中文"],
    ["Portuguese (Brazil)", "巴西葡萄牙语"],
    ["Subtitle Source", "字幕来源"],
    ["Template", "模板"],
    ["Manual Only", "只要人工字幕"],
    ["Auto Only", "只要自动字幕"],
    ["Prefer Manual", "优先人工字幕"],
    ["Prefer Auto", "优先自动字幕"],
    ["Choose manual, auto, or fallback preference for captions mode.", "选择字幕来源：只要人工、只要自动，或优先使用其中一种。"],
    ["Subtitle language (you can type any language code).", "字幕语言，可以直接输入任意语言代码。"],
    ["Subtitle output format for captions mode.", "字幕下载后的文件格式。"],
    ["Output template for chapter files.", "章节文件的命名模板。"],

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
    ["Subscription check failed", "订阅检查失败"],
    ["Refresh subscriptions failed", "刷新订阅失败"],
    ["Update subscription failed", "更新订阅失败"],
    ["Invalid subscription title filter (regex)", "订阅标题过滤写错了：正则表达式无效"],
    ["Edit subscription title filter (subscriptions only; not for one-off downloads)", "编辑订阅标题过滤（只影响订阅，不影响单次下载）"],
    ["How often to poll subscriptions for new videos.", "多久检查一次订阅有没有新视频。"],
    ["When enabled, subscription checks skip videos marked members-only by yt-dlp (channel Join). Ignored for one-off downloads.", "开启后，订阅检查会跳过 yt-dlp 标记为会员专属的视频。这个设置不影响单次下载。"],
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
    ["Request failed", "请求失败"],
    ["Request timed out", "请求超时"],
    ["Request timeout", "请求超时"],
    ["URI too long", "链接太长"],
    ["Clipboard write failed:", "写入剪贴板失败："],
    ["Share failed:", "分享失败："],
    ["Start download failed", "开始下载失败"],
    ["Try anyway", "仍然尝试"],
    ["Download result file for", "下载文件"],
    ["Share result file for", "分享文件"],
    ["Open source URL for", "打开原始链接"],
    ["Start download for", "开始下载"],
    ["Retry download for", "重试下载"],
    ["Toggle error details for", "展开或收起错误详情"],
    ["Download chapter file", "下载章节文件"],
    ["Open chapter file", "打开章节文件"],
    ["Your device's share sheet doesn't accept this file (most likely because it's too large). Please use the download button instead.", "系统分享面板不接受这个文件，通常是文件太大。请改用下载按钮。"],
    ["Invalid event target", "事件目标无效"],
    ["No transports available", "没有可用的连接通道"],
    ["Failed to sanitize html because the input is unstable", "清理 HTML 失败：输入内容不稳定"],
    ["Expecting array here", "这里需要数组格式"],
    ["Multiple select ngModel should be array.", "多选控件的值必须是数组。"],
    ["Object is not iterable.", "对象不能被遍历。"],
    ["Scheduled action threw falsy error", "定时任务抛出了空错误"],
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
    [/request failed/i, "请求失败，请检查网络或服务状态"],
    [/Expecting array here/i, "这里需要数组格式，请检查参数写法"],
    [/Multiple select ngModel should be array/i, "多选控件的值必须是数组，请检查页面参数"],
    [/Object is not iterable/i, "对象不能被遍历，请检查返回数据格式"],
    [/Scheduled action threw falsy error/i, "定时任务出错，但没有返回具体错误信息"],
    [/URI too long/i, "链接太长，请缩短链接后再试"],
    [/clipboard write failed/i, "写入剪贴板失败，浏览器可能没有允许剪贴板权限"],
    [/share failed/i, "分享失败，请改用下载按钮"],
    [/start download failed/i, "开始下载失败，请稍后重试"],
    [/subscription check failed/i, "订阅检查失败，请稍后重试"],
    [/refresh subscriptions failed/i, "刷新订阅失败，请稍后重试"],
    [/update subscription failed/i, "更新订阅失败，请稍后重试"],
    [/HTTP Error 429|Too Many Requests/i, "请求太频繁，被网站临时限制了，请等一会儿再试"],
    [/HTTP Error 500|Internal Server Error/i, "对方服务器出错，请稍后重试"],
    [/HTTP Error 502|Bad Gateway/i, "对方服务器网关异常，请稍后重试"],
    [/HTTP Error 503|Service Unavailable/i, "对方服务暂时不可用，请稍后重试"],
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
  const subscriptionState = {
    byUrl: new Map(),
    byName: new Map(),
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
      .metube-subscription-cell {
        white-space: nowrap;
      }
      .metube-subscription-cell > a,
      .metube-subscription-cell > input,
      .metube-subscription-cell > .text-break,
      .metube-subscription-cell > .flex-grow-1 {
        max-width: calc(100% - 36px);
        vertical-align: middle;
      }
      .metube-subscription-avatar {
        width: 24px;
        height: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 24px;
        overflow: hidden;
        margin: 0 8px 0 2px;
        border-radius: 50%;
        background: rgba(108, 117, 125, .28);
        border: 1px solid rgba(173, 181, 189, .38);
        color: rgba(255, 255, 255, .78);
        font-size: 11px;
        font-weight: 700;
        line-height: 1;
        vertical-align: middle;
      }
      .metube-subscription-avatar img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
      .metube-subscription-avatar.is-empty::before {
        content: attr(data-letter);
      }
      td.metube-subscription-cell .d-flex,
      td.metube-subscription-cell > div {
        display: inline-flex !important;
        align-items: center;
        max-width: calc(100% - 36px);
        vertical-align: middle;
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
      .metube-asset-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 42px;
        height: 22px;
        margin: 0 7px 0 2px;
        padding: 0 7px;
        border: 1px solid rgba(100, 116, 139, .28);
        border-radius: 999px;
        background: rgba(100, 116, 139, .1);
        color: var(--bs-secondary-color);
        font-size: 12px;
        font-weight: 700;
        line-height: 1;
        vertical-align: middle;
        white-space: nowrap;
      }
      .metube-asset-badge[data-asset-type="video"] {
        border-color: rgba(37, 99, 235, .3);
        background: rgba(37, 99, 235, .11);
        color: #2563eb;
      }
      .metube-asset-badge[data-asset-type="captions"] {
        border-color: rgba(15, 118, 110, .3);
        background: rgba(15, 118, 110, .11);
        color: #0f766e;
      }
      .metube-asset-badge[data-asset-type="thumbnail"] {
        border-color: rgba(180, 83, 9, .3);
        background: rgba(180, 83, 9, .11);
        color: #b45309;
      }
      [data-bs-theme="dark"] .metube-asset-badge[data-asset-type="video"] { color: #93c5fd; }
      [data-bs-theme="dark"] .metube-asset-badge[data-asset-type="captions"] { color: #5eead4; }
      [data-bs-theme="dark"] .metube-asset-badge[data-asset-type="thumbnail"] { color: #fcd34d; }
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
      .metube-ai-open {
        display: inline-flex !important;
        align-items: center;
        gap: 6px;
        font-weight: 700;
      }
      .metube-ai-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #94a3b8;
        box-shadow: 0 0 0 3px rgba(148, 163, 184, .16);
      }
      .metube-ai-open[data-ai-state="ready"] .metube-ai-dot {
        background: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, .18);
      }
      .metube-ai-open[data-ai-state="invalid_key"],
      .metube-ai-open[data-ai-state="unavailable"] {
        color: #dc2626;
      }
      .metube-ai-open[data-ai-state="invalid_key"] .metube-ai-dot,
      .metube-ai-open[data-ai-state="unavailable"] .metube-ai-dot {
        background: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, .16);
      }
      .metube-ai-backdrop[hidden] { display: none !important; }
      .metube-ai-backdrop {
        position: fixed;
        inset: 0;
        z-index: 1200;
        display: grid;
        place-items: center;
        padding: 20px;
        background: rgba(15, 23, 42, .58);
        backdrop-filter: blur(5px);
      }
      .metube-ai-dialog {
        width: min(680px, 100%);
        max-height: min(760px, calc(100vh - 40px));
        overflow: auto;
        border: 1px solid var(--metube-border, rgba(148, 163, 184, .35));
        border-radius: 16px;
        background: var(--metube-surface, #fff);
        color: var(--bs-body-color);
        box-shadow: 0 30px 90px rgba(15, 23, 42, .28);
      }
      .metube-ai-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        padding: 20px 22px 14px;
        border-bottom: 1px solid var(--metube-border, rgba(148, 163, 184, .25));
      }
      .metube-ai-header h2 {
        margin: 0 0 5px;
        font-size: 20px;
      }
      .metube-ai-subtitle {
        margin: 0;
        color: var(--bs-secondary-color);
        font-size: 13px;
      }
      .metube-ai-close {
        width: 34px;
        height: 34px;
        border: 1px solid var(--metube-border, rgba(148, 163, 184, .35));
        border-radius: 9px;
        background: transparent;
        color: inherit;
        font-size: 22px;
        cursor: pointer;
      }
      .metube-ai-body { padding: 18px 22px 22px; }
      .metube-ai-status-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 14px;
        padding: 11px 13px;
        border: 1px solid var(--metube-border, rgba(148, 163, 184, .3));
        border-radius: 10px;
        background: var(--metube-surface-strong, rgba(148, 163, 184, .08));
      }
      .metube-ai-status-card strong { font-size: 14px; }
      .metube-ai-status-card span { color: var(--bs-secondary-color); font-size: 12px; text-align: right; }
      .metube-ai-quick {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 12px;
      }
      .metube-ai-quick button,
      .metube-ai-send {
        border: 1px solid rgba(37, 99, 235, .35);
        border-radius: 8px;
        padding: 7px 11px;
        background: rgba(37, 99, 235, .1);
        color: #2563eb;
        font-weight: 700;
        cursor: pointer;
      }
      .metube-ai-answer {
        min-height: 96px;
        max-height: 280px;
        overflow: auto;
        margin-bottom: 12px;
        padding: 13px 14px;
        border: 1px solid var(--metube-border, rgba(148, 163, 184, .28));
        border-radius: 10px;
        background: rgba(15, 23, 42, .035);
        white-space: pre-wrap;
        line-height: 1.65;
      }
      [data-bs-theme="dark"] .metube-ai-answer { background: rgba(255, 255, 255, .035); }
      .metube-ai-answer.is-error { border-color: rgba(239, 68, 68, .42); color: #dc2626; }
      .metube-ai-compose {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 9px;
      }
      .metube-ai-compose textarea {
        min-height: 72px;
        resize: vertical;
        border: 1px solid var(--metube-border, rgba(148, 163, 184, .35));
        border-radius: 9px;
        padding: 10px 11px;
        background: var(--metube-surface, #fff);
        color: inherit;
      }
      .metube-ai-send { align-self: stretch; min-width: 82px; }
      .metube-ai-send:disabled,
      .metube-ai-quick button:disabled { opacity: .55; cursor: wait; }
      .metube-ai-footnote {
        margin: 10px 0 0;
        color: var(--bs-secondary-color);
        font-size: 12px;
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
      :root {
        --metube-bg: #f2f5f7;
        --metube-surface: #ffffff;
        --metube-surface-strong: #eef2f5;
        --metube-panel: rgba(255, 255, 255, .88);
        --metube-border: rgba(37, 49, 60, .14);
        --metube-text-soft: #62707d;
        --metube-accent: #0f766e;
        --metube-accent-strong: #0b5f59;
        --metube-blue: #2563eb;
        --metube-amber: #b7791f;
        --metube-danger: #dc3545;
        --metube-shadow: 0 18px 45px rgba(31, 41, 55, .11);
        --metube-soft-shadow: 0 8px 24px rgba(31, 41, 55, .075);
      }
      [data-bs-theme="dark"] {
        --metube-bg: #10151a;
        --metube-surface: #151c22;
        --metube-surface-strong: #1f2931;
        --metube-panel: rgba(21, 28, 34, .9);
        --metube-border: rgba(150, 165, 180, .18);
        --metube-text-soft: #9aa8b5;
        --metube-accent: #21a69a;
        --metube-accent-strong: #34c2b5;
        --metube-blue: #5b8def;
        --metube-amber: #f2b84b;
        --metube-danger: #ff6b7a;
        --metube-shadow: 0 20px 48px rgba(0, 0, 0, .36);
        --metube-soft-shadow: 0 12px 30px rgba(0, 0, 0, .24);
      }
      html,
      body {
        letter-spacing: 0;
      }
      body {
        background:
          linear-gradient(180deg, rgba(15, 118, 110, .09), rgba(37, 99, 235, .055) 260px, transparent 520px),
          linear-gradient(90deg, rgba(15, 23, 42, .035) 1px, transparent 1px),
          linear-gradient(180deg, rgba(15, 23, 42, .03) 1px, transparent 1px),
          var(--metube-bg) !important;
        background-size: auto, 36px 36px, 36px 36px, auto;
      }
      [data-bs-theme="dark"] body {
        background:
          linear-gradient(180deg, rgba(33, 166, 154, .13), rgba(91, 141, 239, .08) 260px, transparent 520px),
          linear-gradient(90deg, rgba(255, 255, 255, .035) 1px, transparent 1px),
          linear-gradient(180deg, rgba(255, 255, 255, .03) 1px, transparent 1px),
          var(--metube-bg) !important;
      }
      .navbar {
        position: sticky;
        top: 0;
        z-index: 1045;
        min-height: 54px;
        border-bottom: 1px solid var(--metube-border);
        background: color-mix(in srgb, var(--metube-surface) 88%, transparent) !important;
        box-shadow: 0 1px 0 rgba(15, 23, 42, .04), 0 10px 32px rgba(15, 23, 42, .055);
        backdrop-filter: blur(14px);
      }
      [data-bs-theme="dark"] .navbar {
        background: #141b21 !important;
      }
      .navbar-brand {
        color: var(--bs-emphasis-color) !important;
        font-weight: 650;
      }
      .navbar-brand img {
        width: 28px;
        height: 28px;
        border-radius: 7px;
      }
      .download-metrics {
        gap: 10px !important;
        margin-left: 18px !important;
      }
      .download-metrics .metric {
        min-height: 28px;
        padding: 3px 9px;
        border: 1px solid var(--metube-border);
        border-radius: 6px;
        background: var(--metube-surface-strong);
        color: var(--metube-text-soft) !important;
        font-size: .82rem !important;
      }
      main.container,
      main.container-xl {
        max-width: 1320px;
      }
      .add-url-box {
        max-width: 980px;
        margin: 2.25rem auto 2.5rem !important;
        padding: 18px;
        border: 1px solid var(--metube-border);
        border-top: 4px solid var(--metube-accent);
        border-radius: 12px;
        background: var(--metube-panel);
        box-shadow: var(--metube-shadow);
        backdrop-filter: blur(12px);
      }
      .add-url-box > .input-group:first-child {
        box-shadow: 0 10px 24px rgba(37, 99, 235, .1);
      }
      .add-url-box .form-control,
      .add-url-box .form-select,
      .add-url-box .input-group-text {
        min-height: 40px;
      }
      .input-group,
      .btn-group,
      .form-control,
      .form-select,
      .input-group-text,
      .btn {
        border-radius: 7px;
      }
      .input-group > .form-control,
      .input-group > .form-select,
      .input-group > .input-group-text,
      .input-group > .btn {
        border-color: var(--metube-border);
      }
      .input-group-text {
        background: var(--metube-surface-strong);
        color: var(--metube-text-soft);
        font-weight: 600;
      }
      .btn-primary {
        background: var(--metube-blue);
        border-color: var(--metube-blue);
        box-shadow: 0 8px 18px rgba(37, 99, 235, .22);
      }
      .btn-primary:hover {
        filter: brightness(.96);
      }
      .btn-outline-secondary,
      .btn-secondary {
        border-color: var(--metube-border);
      }
      .btn-link {
        color: var(--metube-blue);
      }
      .metube-section-header {
        display: flex;
        align-items: center;
        min-height: 58px;
        margin: 1.85rem 0 0 !important;
        padding: 0 16px !important;
        border-top: 1px solid var(--metube-border);
        border-left: 4px solid var(--metube-accent);
        border-bottom: 1px solid var(--metube-border);
        border-radius: 10px 10px 0 0;
        background:
          linear-gradient(90deg, rgba(15, 118, 110, .1), transparent 38%),
          var(--metube-surface-strong) !important;
        color: var(--bs-emphasis-color);
        font-size: 1.42rem !important;
        font-weight: 680 !important;
      }
      .metube-section-header::before {
        border-left-color: var(--metube-surface-strong) !important;
        box-shadow: 9999px 0 0 var(--metube-surface-strong) !important;
      }
      #metube-subscriptions-target {
        border-left-color: var(--metube-amber);
        background:
          linear-gradient(90deg, rgba(183, 121, 31, .16), transparent 42%),
          var(--metube-surface-strong) !important;
      }
      .overflow-auto {
        margin-bottom: 1.25rem;
        border-right: 1px solid var(--metube-border);
        border-bottom: 1px solid var(--metube-border);
        border-left: 1px solid var(--metube-border);
        border-radius: 0 0 10px 10px;
        background: var(--metube-surface);
        box-shadow: var(--metube-soft-shadow);
      }
      .table {
        --bs-table-bg: transparent;
        --bs-table-color: var(--bs-body-color);
        margin-bottom: 0;
      }
      .table thead th {
        background: var(--metube-surface);
        border-bottom: 2px solid var(--metube-border) !important;
        color: var(--bs-emphasis-color);
        font-size: .9rem;
        font-weight: 650;
        padding-top: 12px;
        padding-bottom: 12px;
      }
      .table tbody td {
        border-color: var(--metube-border);
        padding-top: 11px;
        padding-bottom: 11px;
        vertical-align: middle;
      }
      .table tbody tr:nth-child(even) {
        background: rgba(15, 23, 42, .018);
      }
      [data-bs-theme="dark"] .table tbody tr:nth-child(even) {
        background: rgba(255, 255, 255, .018);
      }
      .table tbody tr:hover {
        background: rgba(15, 118, 110, .055);
      }
      [data-bs-theme="dark"] .table tbody tr:hover {
        background: rgba(33, 166, 154, .08);
      }
      .download-progressbar {
        width: 12rem;
      }
      .metube-row-thumb {
        width: 44px;
        height: 25px;
        position: relative;
        flex: 0 0 44px;
        margin: 0 10px 0 2px;
        border-radius: 5px;
        background: linear-gradient(135deg, rgba(226, 232, 240, .94), rgba(148, 163, 184, .62));
        border-color: rgba(255, 255, 255, .2);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .08);
        color: rgba(71, 85, 105, .82);
        cursor: default;
      }
      [data-bs-theme="dark"] .metube-row-thumb {
        background: linear-gradient(135deg, rgba(51, 65, 85, .96), rgba(15, 23, 42, .96));
        color: rgba(226, 232, 240, .82);
      }
      .metube-row-thumb::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 8px solid currentColor;
      }
      .metube-row-thumb.has-image::before {
        display: none;
      }
      .metube-row-thumb img {
        opacity: 0;
        transition: opacity .12s ease, transform .16s ease;
      }
      .metube-row-thumb.has-image img {
        opacity: 1;
      }
      .metube-row-thumb:hover img {
        transform: scale(1.06);
      }
      td.metube-video-thumb-cell > a,
      td.metube-video-thumb-cell > button {
        max-width: calc(100% - 66px);
      }
      .metube-thumb-preview {
        position: fixed;
        z-index: 99998;
        width: 260px;
        aspect-ratio: 16 / 9;
        pointer-events: none;
        opacity: 0;
        transform: translateY(6px) scale(.98);
        transition: opacity .12s ease, transform .12s ease;
        border: 1px solid rgba(255, 255, 255, .28);
        border-radius: 8px;
        overflow: hidden;
        background: #111820;
        box-shadow: 0 18px 44px rgba(0, 0, 0, .34);
      }
      .metube-thumb-preview.is-visible {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      .metube-thumb-preview img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
      .metube-subscription-cell {
        position: sticky;
        left: 2.6rem;
        z-index: 3;
        background: var(--metube-bg);
        box-shadow: 10px 0 16px rgba(15, 23, 42, .035);
      }
      .metube-subscriptions-table thead th:nth-child(2) {
        position: sticky;
        left: 2.6rem;
        z-index: 4;
      }
      .metube-subscription-avatar {
        width: 28px;
        height: 28px;
        flex-basis: 28px;
        margin-right: 10px;
        border: 2px solid var(--metube-surface);
        box-shadow: 0 0 0 1px var(--metube-border), 0 4px 10px rgba(15, 23, 42, .12);
      }
      .metube-material-bundle {
        max-width: 980px;
        margin: 1rem auto 0;
        padding: 12px 0 0;
        border: 0;
        border-top: 1px solid var(--metube-border);
        border-radius: 0;
        background: transparent;
        box-shadow: none;
      }
      .metube-material-bundle strong {
        color: var(--bs-emphasis-color);
      }
      .metube-material-bundle label {
        padding: 5px 8px;
        border: 1px solid var(--metube-border);
        border-radius: 6px;
        background: color-mix(in srgb, var(--metube-surface-strong) 84%, var(--metube-accent) 16%);
        font-weight: 600;
      }
      .metube-material-hint {
        flex-basis: 100%;
        margin-left: 0;
      }
      .metube-youtube-login-entry {
        top: 10px;
        right: 12px;
        min-height: 32px;
        padding: 4px;
        border: 1px solid var(--metube-border);
        border-radius: 8px;
        background: var(--metube-surface);
        box-shadow: 0 8px 24px rgba(15, 23, 42, .08);
      }
      [data-bs-theme="dark"] .metube-youtube-login-entry {
        box-shadow: 0 8px 24px rgba(0, 0, 0, .22);
      }
      .metube-youtube-login-entry strong {
        padding: 0 5px 0 6px;
      }
      .metube-youtube-login-entry button,
      .metube-youtube-login-entry a {
        border-color: var(--metube-border);
        background: var(--metube-surface-strong);
        color: var(--bs-emphasis-color);
      }
      .metube-youtube-login-entry button:hover,
      .metube-youtube-login-entry a:hover {
        background: rgba(37, 99, 235, .12);
        color: var(--metube-blue);
      }
      .metube-youtube-login-entry .metube-youtube-login-status {
        padding-right: 6px;
        color: #b7791f;
      }
      .metube-youtube-login-entry .metube-youtube-login-status.is-active {
        color: var(--metube-accent);
      }
      .metube-left-rail {
        position: fixed;
        left: 18px;
        top: 86px;
        z-index: 1040;
        width: 78px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border: 1px solid var(--metube-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--metube-surface) 94%, transparent);
        box-shadow: var(--metube-shadow);
        backdrop-filter: blur(10px);
      }
      .metube-left-rail button {
        min-height: 50px;
        width: 100%;
        border: 1px solid transparent;
        border-radius: 9px;
        background: transparent;
        color: var(--metube-text-soft);
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
      }
      .metube-left-rail button::before {
        display: block;
        margin-bottom: 2px;
        color: color-mix(in srgb, var(--metube-text-soft) 72%, transparent);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0;
      }
      .metube-left-rail button:nth-child(1)::before { content: "01"; }
      .metube-left-rail button:nth-child(2)::before { content: "02"; }
      .metube-left-rail button:nth-child(3)::before { content: "03"; }
      .metube-left-rail button:nth-child(4)::before { content: "04"; }
      .metube-left-rail button:hover,
      .metube-left-rail button.is-active {
        border-color: rgba(15, 118, 110, .25);
        background: rgba(15, 118, 110, .12);
        color: var(--metube-accent-strong);
      }
      @media (min-width: 1180px) {
        body.metube-has-left-rail main.container,
        body.metube-has-left-rail main.container-xl {
          max-width: calc(100vw - 170px);
          margin-left: 112px;
          margin-right: 36px;
        }
      }
      @media (max-width: 1179px) {
        .metube-left-rail {
          display: none;
        }
      }
      @media (max-width: 900px) {
        body.metube-has-youtube-login main.container,
        body.metube-has-youtube-login main.container-xl {
          padding-top: 76px;
        }
        .metube-youtube-login-entry {
          position: fixed;
          top: 54px;
          left: 8px;
          right: auto;
          width: calc(100% - 16px);
          box-sizing: border-box;
          margin: 0;
          max-width: none;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto auto auto;
          align-items: center;
          justify-content: stretch;
          gap: 6px;
        }
        .metube-youtube-login-entry strong {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .metube-youtube-login-entry a,
        .metube-youtube-login-entry button {
          padding: 3px 8px;
          white-space: nowrap;
        }
        .metube-youtube-login-entry .metube-youtube-login-note {
          display: none;
        }
        .metube-youtube-login-entry .metube-youtube-login-status {
          grid-column: 1 / -1;
          justify-self: end;
        }
      }
      @media (max-width: 700px) {
        .metube-ai-backdrop { padding: 8px; }
        .metube-ai-dialog { max-height: calc(100vh - 16px); border-radius: 12px; }
        .metube-ai-header, .metube-ai-body { padding-left: 15px; padding-right: 15px; }
        .metube-ai-compose { grid-template-columns: 1fr; }
        .metube-ai-send { min-height: 42px; }
        .overflow-auto table {
          min-width: 760px;
        }
        .overflow-auto .metube-subscriptions-table {
          min-width: 920px;
        }
        footer,
        .footer {
          display: flex !important;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px 14px;
          padding: 14px 16px;
          text-align: center;
        }
        .footer .container {
          width: 100%;
          max-width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
        .footer .footer-content {
          display: flex !important;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px 12px;
          width: 100%;
        }
        .footer .version-item,
        .footer .github-link {
          display: inline-flex !important;
          flex-direction: row !important;
          align-items: center;
          gap: 6px;
        }
        .footer .version-separator {
          display: none !important;
        }
        footer *,
        .footer * {
          width: auto !important;
          max-width: 100%;
          writing-mode: horizontal-tb !important;
          word-break: keep-all;
          white-space: normal;
        }
        footer a,
        footer code,
        .footer a,
        .footer code {
          white-space: nowrap;
        }
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

  function youtubeThumbnailUrls(id) {
    if (!id) return [];
    return [
      `https://i.ytimg.com/vi/${id}/hq720.jpg`,
      `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    ];
  }

  function installImageFallbacks(img, urls, onEmpty) {
    let index = 0;
    img.onload = () => {
      img.parentElement?.classList.add("has-image");
    };
    img.onerror = () => {
      index += 1;
      if (index < urls.length) {
        img.src = urls[index];
        return;
      }
      img.remove();
      onEmpty?.();
    };
    img.src = urls[index] || "";
  }

  function ensureThumbnailPreview() {
    let preview = document.getElementById("metube-thumb-preview");
    if (preview) return preview;
    preview = document.createElement("div");
    preview.id = "metube-thumb-preview";
    preview.className = "metube-thumb-preview";
    preview.innerHTML = '<img alt="">';
    document.body.appendChild(preview);
    return preview;
  }

  function moveThumbnailPreview(event) {
    const preview = ensureThumbnailPreview();
    const width = 260;
    const height = 146;
    const pad = 14;
    let left = event.clientX + 16;
    let top = event.clientY + 16;
    if (left + width + pad > window.innerWidth) left = event.clientX - width - 16;
    if (top + height + pad > window.innerHeight) top = window.innerHeight - height - pad;
    preview.style.left = `${Math.max(pad, left)}px`;
    preview.style.top = `${Math.max(pad, top)}px`;
  }

  function showThumbnailPreview(src, event) {
    if (!src) return;
    const preview = ensureThumbnailPreview();
    const img = preview.querySelector("img");
    if (img && img.src !== src) img.src = src;
    moveThumbnailPreview(event);
    preview.classList.add("is-visible");
  }

  function hideThumbnailPreview() {
    const preview = document.getElementById("metube-thumb-preview");
    if (preview) preview.classList.remove("is-visible");
  }

  function normalizeUrlKey(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    try {
      const url = new URL(raw, window.location.href);
      url.hash = "";
      return normalizeKey(url.toString().replace(/\/$/, ""));
    } catch (_) {
      return normalizeKey(raw.replace(/\/$/, ""));
    }
  }

  function subscriptionBaseName(value) {
    return cleanText(String(value || "").replace(/\s+-\s+(视频自动|MP4优先|视频|字幕SRT|字幕|封面JPG|封面图|音频)$/u, ""));
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
      enhanceAssetBadges();
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

    const urls = youtubeThumbnailUrls(id);
    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.referrerPolicy = "no-referrer";
    img.alt = "";
    installImageFallbacks(img, urls, () => holder.classList.add("is-empty"));
    holder.addEventListener("mouseenter", (event) => {
      if (!holder.classList.contains("has-image")) return;
      showThumbnailPreview(img.currentSrc || img.src || urls[0], event);
    });
    holder.addEventListener("mousemove", (event) => moveThumbnailPreview(event));
    holder.addEventListener("mouseleave", hideThumbnailPreview);
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

  const assetTypeLabels = {
    video: "视频",
    audio: "音频",
    captions: "字幕",
    thumbnail: "封面",
  };

  function normalizeAssetType(value) {
    const text = cleanText(String(value || "")).toLowerCase();
    if (["video", "视频"].includes(text)) return "video";
    if (["audio", "音频"].includes(text)) return "audio";
    if (["captions", "caption", "subtitles", "subtitle", "字幕"].includes(text)) return "captions";
    if (["thumbnail", "封面", "封面图"].includes(text)) return "thumbnail";
    return "";
  }

  function findAssetTypeForRow(row, item) {
    const cells = Array.from(row.querySelectorAll("td"));
    for (const cell of cells.slice(2)) {
      const type = normalizeAssetType(cell.textContent || "");
      if (type) return type;
    }
    return normalizeAssetType(item?.download_type);
  }

  function enhanceAssetBadges() {
    for (const row of document.querySelectorAll("table tbody tr")) {
      if (row.querySelector(".metube-asset-badge")) continue;
      const cells = row.querySelectorAll("td");
      if (cells.length < 2) continue;
      const titleCell = cells[1];
      const item = findItemForCell(titleCell);
      const assetType = findAssetTypeForRow(row, item);
      if (!assetType || !assetTypeLabels[assetType]) continue;
      const badge = document.createElement("span");
      badge.className = "metube-asset-badge";
      badge.dataset.assetType = assetType;
      badge.textContent = assetTypeLabels[assetType];
      badge.title = `任务类型：${assetTypeLabels[assetType]}`;
      const thumbnail = titleCell.querySelector(".metube-row-thumb");
      if (thumbnail) thumbnail.insertAdjacentElement("afterend", badge);
      else titleCell.insertBefore(badge, titleCell.firstChild);
    }
  }

  function indexSubscriptionItem(item) {
    if (!item || typeof item !== "object") return;
    for (const value of [item.url, item.channel_url]) {
      const key = normalizeUrlKey(value);
      if (key) subscriptionState.byUrl.set(key, item);
    }
    for (const value of [item.name, subscriptionBaseName(item.name)]) {
      const key = normalizeKey(value);
      if (key) subscriptionState.byName.set(key, item);
    }
  }

  async function refreshSubscriptionIndex() {
    if (subscriptionState.loading) return;
    subscriptionState.loading = true;
    try {
      const response = await fetch("subscriptions", { cache: "no-store" });
      if (!response.ok) return;
      const data = await response.json();
      const list = Array.isArray(data) ? data : Array.isArray(data.items) ? data.items : [];
      const byUrl = new Map();
      const byName = new Map();
      subscriptionState.byUrl = byUrl;
      subscriptionState.byName = byName;
      for (const item of list) indexSubscriptionItem(item);
      enhanceSubscriptionAvatars();
    } catch (_) {
      // 订阅列表临时不可用时不打扰页面，下一轮会继续补。
    } finally {
      subscriptionState.loading = false;
    }
  }

  function tableLooksLikeSubscriptions(table) {
    if (!table) return false;
    const headerText = cleanText(Array.from(table.querySelectorAll("thead th")).map((th) => th.textContent || "").join(" "));
    return /(Name|名称)/i.test(headerText) && /(URL|链接)/i.test(headerText) && /(Interval|间隔|Last checked|上次检查|Status|状态)/i.test(headerText);
  }

  function findSubscriptionItemForRow(row) {
    for (const anchor of row.querySelectorAll("a[href]")) {
      const href = normalizeUrlKey(anchor.getAttribute("href"));
      const absoluteHref = normalizeUrlKey(anchor.href);
      if (href && subscriptionState.byUrl.has(href)) return subscriptionState.byUrl.get(href);
      if (absoluteHref && subscriptionState.byUrl.has(absoluteHref)) return subscriptionState.byUrl.get(absoluteHref);
    }

    const rowText = normalizeKey(row.textContent || "");
    for (const [name, item] of subscriptionState.byName) {
      if (name && rowText.includes(name)) return item;
    }
    return null;
  }

  function findSubscriptionCell(row, item) {
    const cells = Array.from(row.querySelectorAll("td"));
    const nameKeys = [normalizeKey(item?.name), normalizeKey(subscriptionBaseName(item?.name))].filter(Boolean);
    for (const cell of cells) {
      const text = normalizeKey(cell.textContent || "");
      if (nameKeys.some((key) => text.includes(key))) return cell;
    }
    return cells[1] || cells[0] || null;
  }

  function createSubscriptionAvatar(item) {
    const holder = document.createElement("span");
    holder.className = "metube-subscription-avatar";
    holder.setAttribute("aria-hidden", "true");
    holder.title = "订阅头像";
    holder.dataset.letter = (subscriptionBaseName(item?.name).charAt(0) || "频").toUpperCase();

    const source = String(item?.thumbnail || "").trim();
    if (!/^https?:\/\//i.test(source)) {
      holder.classList.add("is-empty");
      return holder;
    }

    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.referrerPolicy = "no-referrer";
    img.alt = "";
    img.src = source;
    img.onerror = () => {
      img.remove();
      holder.classList.add("is-empty");
    };
    holder.appendChild(img);
    return holder;
  }

  function enhanceSubscriptionAvatars() {
    installThumbnailStyles();
    if (!subscriptionState.byUrl.size && !subscriptionState.byName.size) return;
    for (const row of document.querySelectorAll("table tbody tr")) {
      const table = row.closest("table");
      if (!tableLooksLikeSubscriptions(table)) continue;
      table.classList.add("metube-subscriptions-table");
      if (row.querySelector(".metube-subscription-avatar")) continue;
      const item = findSubscriptionItemForRow(row);
      if (!item) continue;
      const cell = findSubscriptionCell(row, item);
      if (!cell) continue;
      cell.classList.add("metube-subscription-cell");
      cell.insertBefore(createSubscriptionAvatar(item), cell.firstChild);
    }
  }

  function sectionTargetByText(pattern) {
    const headers = Array.from(document.querySelectorAll(".metube-section-header"));
    const header = headers.find((item) => pattern.test(cleanText(item.textContent || "")));
    return header || null;
  }

  function isSectionHeaderElement(node) {
    if (!(node instanceof HTMLElement)) return false;
    const tagName = node.tagName || "";
    if (!/^H[1-6]$/.test(tagName) && !node.classList.contains("metube-section-header")) return false;
    return /Downloading|Completed|Subscriptions|下载中|已完成|订阅/.test(cleanText(node.textContent || ""));
  }

  function collectSectionNodes(header) {
    const nodes = [];
    for (let node = header; node; node = node.nextElementSibling) {
      if (node !== header && isSectionHeaderElement(node)) break;
      nodes.push(node);
    }
    return nodes;
  }

  function moveSectionBefore(header, beforeHeader) {
    if (!header || !beforeHeader || header === beforeHeader) return;
    if (header.parentElement !== beforeHeader.parentElement) return;
    const order = header.compareDocumentPosition(beforeHeader);
    if (order & Node.DOCUMENT_POSITION_FOLLOWING) return;
    const nodes = collectSectionNodes(header);
    if (!nodes.length || nodes.includes(beforeHeader)) return;
    const fragment = document.createDocumentFragment();
    for (const node of nodes) fragment.appendChild(node);
    beforeHeader.parentElement.insertBefore(fragment, beforeHeader);
  }

  function prioritizeSubscriptionsSection() {
    const subscriptions = sectionTargetByText(/Subscriptions|订阅/);
    const downloading = sectionTargetByText(/Downloading|下载中/);
    const completed = sectionTargetByText(/Completed|已完成/);
    moveSectionBefore(subscriptions, downloading || completed);
  }

  function scrollToSection(target) {
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateLeftRailActive() {
    const rail = document.getElementById("metube-left-rail");
    if (!rail) return;
    const targets = Array.from(rail.querySelectorAll("button[data-target]"));
    let active = targets[0] || null;
    for (const button of targets) {
      const target = document.querySelector(button.getAttribute("data-target") || "");
      if (!target) continue;
      if (target.getBoundingClientRect().top < 140) active = button;
    }
    for (const button of targets) button.classList.toggle("is-active", button === active);
  }

  function installLeftRail() {
    installThumbnailStyles();
    document.body.classList.add("metube-has-left-rail");
    prioritizeSubscriptionsSection();
    let addTarget = document.getElementById("metube-add-target");
    if (!addTarget) {
      addTarget = findUrlInput()?.closest("form") || document.querySelector("main");
      addTarget?.setAttribute("id", "metube-add-target");
    }
    const downloading = sectionTargetByText(/Downloading|下载中/);
    const completed = sectionTargetByText(/Completed|已完成/);
    const subscriptions = sectionTargetByText(/Subscriptions|订阅/);
    downloading?.setAttribute("id", "metube-downloading-target");
    completed?.setAttribute("id", "metube-completed-target");
    subscriptions?.setAttribute("id", "metube-subscriptions-target");

    let rail = document.getElementById("metube-left-rail");
    if (!rail) {
      rail = document.createElement("nav");
      rail.id = "metube-left-rail";
      rail.className = "metube-left-rail";
      rail.setAttribute("aria-label", "页面快捷导航");
      rail.innerHTML = `
        <button type="button" data-target="#metube-add-target" title="回到添加区">添加</button>
        <button type="button" data-target="#metube-subscriptions-target" title="查看订阅">订阅</button>
        <button type="button" data-target="#metube-downloading-target" title="查看下载中">下载</button>
        <button type="button" data-target="#metube-completed-target" title="查看已完成">完成</button>
      `;
      rail.addEventListener("click", (event) => {
        const button = event.target.closest?.("button[data-target]");
        if (!button) return;
        scrollToSection(document.querySelector(button.getAttribute("data-target") || ""));
      });
      document.body.appendChild(rail);
      window.addEventListener("scroll", updateLeftRailActive, { passive: true });
      window.addEventListener("resize", updateLeftRailActive);
    }

    for (const button of rail.querySelectorAll("button[data-target]")) {
      const target = document.querySelector(button.getAttribute("data-target") || "");
      button.disabled = !target;
    }
    updateLeftRailActive();
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
    document.body.classList.add("metube-has-youtube-login");

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

  const aiAssistantState = {
    loading: false,
    status: null,
  };

  function updateAiStatusUi(data) {
    aiAssistantState.status = data || null;
    const state = data?.state || "unknown";
    const button = document.querySelector("[data-ai-open]");
    if (button) {
      button.dataset.aiState = state;
      const label = button.querySelector(".metube-ai-label");
      if (label) label.textContent = state === "ready" ? "AI 助手" : state === "invalid_key" ? "AI 密钥无效" : "AI 助手";
    }
    const card = document.querySelector("#metube-ai-dialog .metube-ai-status-card");
    if (!card) return;
    const title = card.querySelector("strong");
    const detail = card.querySelector("span");
    if (title) title.textContent = data?.message || "正在检查 AI 状态";
    if (detail) {
      const parts = [data?.provider, data?.model].filter(Boolean);
      detail.textContent = parts.join(" · ") || "未配置供应商";
    }
  }

  async function refreshAiStatus(force = false) {
    if (aiAssistantState.loading) return aiAssistantState.status;
    if (!force && aiAssistantState.status) return aiAssistantState.status;
    aiAssistantState.loading = true;
    try {
      const response = await fetch("ai/status", { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.msg || response.statusText || "AI 状态检查失败");
      updateAiStatusUi(data);
      return data;
    } catch (error) {
      const data = { state: "unavailable", message: "AI 后端尚未启用", detail: String(error?.message || error) };
      updateAiStatusUi(data);
      return data;
    } finally {
      aiAssistantState.loading = false;
    }
  }

  async function buildAiPageContext() {
    try {
      const response = await fetch("history", { cache: "no-store" });
      if (!response.ok) return "";
      const data = await response.json();
      const failures = (Array.isArray(data.done) ? data.done : []).filter((item) => item?.status === "error");
      const rows = failures.slice(0, 20).map((item) => {
        const type = assetTypeLabels[normalizeAssetType(item.download_type)] || "未知任务";
        const message = cleanText(String(item.msg || "未知错误")).slice(0, 300);
        return `[${type}] ${cleanText(String(item.title || "未命名"))}：${message}`;
      });
      return `当前失败任务 ${failures.length} 条。\n${rows.join("\n")}`.trim();
    } catch (_) {
      return "";
    }
  }

  function setAiAnswer(text, isError = false) {
    const answer = document.querySelector("#metube-ai-dialog .metube-ai-answer");
    if (!answer) return;
    answer.textContent = text;
    answer.classList.toggle("is-error", isError);
  }

  async function sendAiQuestion(message) {
    const question = cleanText(String(message || ""));
    if (!question) {
      setAiAnswer("请输入问题。", true);
      return;
    }
    const status = await refreshAiStatus(true);
    if (status?.state !== "ready") {
      setAiAnswer(status?.message || "AI 当前不可用。", true);
      return;
    }
    const dialog = document.getElementById("metube-ai-dialog");
    const controls = Array.from(dialog?.querySelectorAll("button, textarea") || []);
    controls.forEach((control) => { control.disabled = true; });
    setAiAnswer("AI 正在分析，请稍等...");
    try {
      const context = await buildAiPageContext();
      const response = await fetch("ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, context }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.status === "error") throw new Error(data.msg || response.statusText || "AI 请求失败");
      setAiAnswer(data.answer || "AI 没有返回内容。", !data.answer);
    } catch (error) {
      setAiAnswer(`AI 请求失败：${error.message || error}`, true);
      refreshAiStatus(true);
    } finally {
      controls.forEach((control) => { control.disabled = false; });
    }
  }

  function installAiAssistant() {
    const loginEntry = document.getElementById("metube-youtube-login-entry");
    if (!loginEntry || document.querySelector("[data-ai-open]")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "metube-ai-open";
    button.dataset.aiOpen = "";
    button.dataset.aiState = "unknown";
    button.innerHTML = '<span class="metube-ai-dot" aria-hidden="true"></span><span class="metube-ai-label">AI 助手</span>';
    const status = loginEntry.querySelector(".metube-youtube-login-status");
    loginEntry.insertBefore(button, status || null);

    const backdrop = document.createElement("div");
    backdrop.className = "metube-ai-backdrop";
    backdrop.hidden = true;
    backdrop.innerHTML = `
      <section id="metube-ai-dialog" class="metube-ai-dialog" role="dialog" aria-modal="true" aria-labelledby="metube-ai-title">
        <header class="metube-ai-header">
          <div>
            <h2 id="metube-ai-title">AI 下载助手</h2>
            <p class="metube-ai-subtitle">解释失败原因、分析当前任务、给出下一步处理建议。</p>
          </div>
          <button class="metube-ai-close" type="button" aria-label="关闭">×</button>
        </header>
        <div class="metube-ai-body">
          <div class="metube-ai-status-card"><strong>正在检查 AI 状态...</strong><span></span></div>
          <div class="metube-ai-quick">
            <button type="button" data-ai-question="分析当前失败任务，告诉我哪些是视频失败、哪些只是素材任务，并说明系统会怎样自动处理。">分析当前失败</button>
            <button type="button" data-ai-question="用大白话说明当前下载系统的自动格式和线路回退顺序。">说明自动修复</button>
          </div>
          <div class="metube-ai-answer" aria-live="polite">可以直接提问，也可以点上面的快捷分析。</div>
          <div class="metube-ai-compose">
            <textarea maxlength="2000" placeholder="例如：为什么这些视频会出现 403？系统会自动换什么线路？"></textarea>
            <button class="metube-ai-send" type="button">发送</button>
          </div>
          <p class="metube-ai-footnote">AI 只负责解释和辅助判断；真正的格式、线路切换由下载内核按固定规则执行。</p>
        </div>
      </section>
    `;
    document.body.appendChild(backdrop);

    const close = () => { backdrop.hidden = true; };
    button.addEventListener("click", () => {
      backdrop.hidden = false;
      refreshAiStatus(true);
      setTimeout(() => backdrop.querySelector("textarea")?.focus(), 0);
    });
    backdrop.querySelector(".metube-ai-close")?.addEventListener("click", close);
    backdrop.addEventListener("click", (event) => { if (event.target === backdrop) close(); });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !backdrop.hidden) close();
    });
    backdrop.querySelectorAll("[data-ai-question]").forEach((quick) => {
      quick.addEventListener("click", () => sendAiQuestion(quick.dataset.aiQuestion));
    });
    const textarea = backdrop.querySelector("textarea");
    const send = () => sendAiQuestion(textarea?.value || "");
    backdrop.querySelector(".metube-ai-send")?.addEventListener("click", send);
    textarea?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) send();
    });
    refreshAiStatus();
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
      if (isSubscribe) refreshSubscriptionIndex();
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
      enhanceAssetBadges();
      enhanceSubscriptionAvatars();
      applyDefaultAutoFormat();
      installMaterialBundleControls();
      installYoutubeLoginEntry();
      installAiAssistant();
      installLeftRail();
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
  refreshSubscriptionIndex();
  setInterval(refreshThumbnailIndex, 10000);
  setInterval(refreshSubscriptionIndex, 15000);
  setTimeout(scheduleTranslate, 300);
  setTimeout(scheduleTranslate, 800);
  setTimeout(scheduleTranslate, 1500);
  setTimeout(scheduleTranslate, 3000);
})();
