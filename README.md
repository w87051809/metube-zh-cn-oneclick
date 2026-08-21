# 视频下载（MeTube 中文增强版）

[![许可证](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](LICENSE)
[![质量检查](https://github.com/w87051809/metube-zh-cn-oneclick/actions/workflows/quality-gate.yml/badge.svg)](https://github.com/w87051809/metube-zh-cn-oneclick/actions/workflows/quality-gate.yml)

这是一个基于 [MeTube](https://github.com/alexta69/metube) 的中文增强和一键安装项目。

项目继续使用官方镜像 `ghcr.io/alexta69/metube:latest`，通过只读挂载加入中文界面、订阅增强、素材包、自动修复和 AI 助手，不重新打包、不冒充上游官方版本。

## 核心功能

### 下载与素材包

- 视频格式默认设为“自动”，优先保证成功率和最佳可用画质，不强制 MP4。
- 一次下载可以同时建立视频、SRT 字幕和 JPG 封面任务，不单独下载音频。
- 已完成列表显示“视频 / 字幕 / 封面”标签，避免把同名字幕误认为视频已经成功。
- 下载前尽量把英文标题翻译成简体中文；翻译失败时保留原标题继续下载。
- 视频、字幕、封面和临时文件都保存在配置的下载目录中。
- 在网页已完成列表点垃圾桶时，可以同步删除对应硬盘文件。

### 订阅

- 支持频道和播放列表订阅。
- 订阅任务同样可以自动建立视频、字幕和封面任务。
- 默认每 5 分钟检查一次更新。
- 新建订阅只补下最近 24 小时发布的视频；更早的视频会标记为已见，不会一次下载整个频道历史。
- 订阅列表显示频道头像，方便快速识别作者。

### YouTube 自动修复

遇到 403、连接超时、临时网络异常或媒体地址过期时，下载器按固定规则自动处理：

1. 等待本机 PO Token 服务就绪。
2. 使用默认最佳线路下载。
3. 重新解析视频，刷新带时效的媒体地址。
4. 切换到 `mweb` 播放器线路并优先使用 IPv4。
5. 切换到匿名 `android_vr` 兼容线路。
6. 最后回退到带音视频的兼容合并格式。

自动修复不依赖 AI。详细说明见 [YouTube 自动修复机制](docs/automatic-recovery.md)。

### 中文界面和 AI 助手

- 品牌名称、按钮、状态、错误详情和操作说明均做中文覆盖。
- 顶部提供 `YouTube 登录入口`，可以上传 Netscape 格式的 `cookies.txt`。
- 顶部提供 `AI 助手`，用于解释失败原因、当前任务和自动修复顺序。
- AI 只负责解释和辅助判断；真正的格式、线路和重试切换由下载器按固定规则执行。
- API Key 只保存在服务器端，不会返回给浏览器。

AI 是可选功能。没有配置 AI 时，下载、订阅和自动修复仍然可以正常使用。详细说明见 [AI 助手配置与隐私](docs/ai-assistant.md)。

## 一键安装

适用于已经安装 Docker 和 Docker Compose 的 Ubuntu / Debian 服务器：

```bash
curl -fsSL https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main/install.sh | sudo bash
```

安装完成后访问：

```text
http://服务器地址:8081/
```

默认下载目录：

```text
/mnt/2TB/优兔视频
```

## 自定义安装

修改端口和下载目录：

```bash
curl -fsSL https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main/install.sh -o install.sh
sudo env PORT=8081 DOWNLOAD_DIR='/你的/视频目录' bash install.sh
```

常用安装变量：

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `PORT` | `8081` | 网页端口 |
| `DOWNLOAD_DIR` | `/mnt/2TB/优兔视频` | 视频、字幕、封面保存目录 |
| `STATE_DIR` | `/www/metube/state` | 下载历史、订阅和 Cookie 状态目录 |
| `TITLE_TRANSLATE_ENABLED` | `true` | 是否翻译英文标题 |
| `TITLE_TRANSLATE_TARGET_LANG` | `zh-CN` | 标题目标语言 |
| `TITLE_TRANSLATE_API_BASE` | 空 | OpenAI 兼容接口地址 |
| `TITLE_TRANSLATE_API_KEY` | 空 | AI 接口密钥，只能配置在私有服务器上 |
| `TITLE_TRANSLATE_MODEL` | `gpt-5.5` | AI 模型名称 |
| `YTDL_NIGHTLY_UPDATE_TIME` | `04:15` | 每日更新 yt-dlp nightly 的时间 |

不要把真实服务器地址、Cookie、SSH Key、密码或 API Key 写进仓库、Issue、截图和 Release Notes。

## 更新现有安装

重新运行安装命令即可同步最新版覆盖文件，并保留下载目录和状态目录：

```bash
curl -fsSL https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main/install.sh | sudo bash
```

更新后建议浏览器执行一次强制刷新：

- Windows / Linux：`Ctrl + F5`
- macOS：`Command + Shift + R`

## YouTube 登录 Cookie

只有 YouTube 明确提示需要登录、年龄确认或权限验证时才需要 Cookie。

1. 在自己的浏览器登录 YouTube。
2. 导出 Netscape 格式的 `cookies.txt`。
3. 打开网页右上角 `YouTube 登录入口`。
4. 上传文件并点击 `检查状态`。

Cookie 会保存在服务器状态目录，不应该提交到 Git。账号退出登录、修改密码或 Cookie 过期后，需要重新导出。

## 删除文件行为

安装脚本默认启用：

```yaml
- DELETE_FILE_ON_TRASHCAN=true
```

因此，在网页“已完成”列表点击删除，会同时删除硬盘上的对应文件。

如果只想删除网页记录，请把 `/www/metube/docker-compose.yml` 中的值改成：

```yaml
- DELETE_FILE_ON_TRASHCAN=false
```

然后应用配置：

```bash
cd /www/metube
docker compose up -d
```

## 常用维护命令

查看状态：

```bash
cd /www/metube && docker compose ps
```

查看日志：

```bash
cd /www/metube && docker compose logs -f
```

重启服务：

```bash
cd /www/metube && docker compose restart
```

更新官方 MeTube 镜像：

```bash
cd /www/metube
docker compose pull
docker compose up -d
```

## 故障判断

| 页面提示 | 常见原因 | 系统处理 |
| --- | --- | --- |
| `HTTP Error 403` | YouTube 临时授权、客户端或线路变化 | 自动刷新地址并切换客户端 |
| `Connection timed out` | CDN 节点连接超时 | 自动重试并重新解析媒体地址 |
| `Postprocessing: Conversion failed` | 音视频组合或编码兼容问题 | 自动模式改选其他可用格式 |
| `No video formats found` | Cookie、PO Token 或客户端受限 | 尝试兼容客户端；必要时上传 Cookie |
| `AI 密钥无效` | AI 服务认证失败 | 只影响 AI 解释，不影响下载 |
| `AI 服务连接超时` | 外部 AI 服务暂时不可用 | 只影响 AI 解释，不影响下载 |

## 项目结构

| 文件 | 作用 |
| --- | --- |
| `install.sh` | 一键安装、生成 Compose 配置并挂载增强文件 |
| `metube-zh-cn.js` | 中文界面、主题、封面、任务标签和 AI 入口 |
| `ytdl.py` | 下载、中文标题和素材任务增强 |
| `download_retry.py` | 网络重试和 YouTube 客户端回退链 |
| `dl_formats.py` | 自动格式与兼容格式选择 |
| `subscriptions.py` | 订阅更新、最近视频补下和频道头像 |
| `ai_api.py` | 服务器端 AI 状态和对话接口 |
| `patch_main.py` | 在官方后端入口注册 AI 路由 |
| `tests/` | 自动格式、重试、AI 和接口兼容测试 |

## 发布与质量

- 变更日志：[CHANGELOG.md](CHANGELOG.md)
- 发布流程：[docs/release-process.md](docs/release-process.md)
- 安全说明：[SECURITY.md](SECURITY.md)
- 当前发行说明：[docs/releases/v1.2.0.md](docs/releases/v1.2.0.md)

GitHub Actions 会检查脚本语法、Python 语法、JavaScript 语法、自动化测试和常见敏感信息。

## 上游作者与致谢

- 原始项目：[alexta69/metube](https://github.com/alexta69/metube)
- 原始作者：[alexta69](https://github.com/alexta69)

感谢 MeTube 原作者和所有贡献者。本仓库是社区维护的中文增强版本，不是 MeTube 官方项目。

## 许可证

本仓库使用 [AGPL-3.0](LICENSE)，与上游 MeTube 保持一致。
