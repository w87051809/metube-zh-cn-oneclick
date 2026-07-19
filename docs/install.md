# 安装说明

## 最快安装

```bash
curl -fsSL https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main/install.sh | sudo bash
```

## 改下载目录

```bash
curl -fsSL https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main/install.sh | sudo env DOWNLOAD_DIR='/data/videos' bash
```

## 改端口

```bash
curl -fsSL https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main/install.sh | sudo env PORT=18081 bash
```

## 默认下载内容

网页默认是素材包模式：点一次下载，会同时添加自动视频、SRT 字幕、JPG 封面图。

点一次订阅，也会同时创建自动视频、SRT 字幕、JPG 封面图三条订阅。

新订阅会补下 24 小时内刚发布的视频；更早的历史视频只记为已见过，不会一次拉一堆老视频。

视频格式交给 yt-dlp 自动选择，下载更稳。

英文标题会尽量翻译成中文后保存到网页记录和硬盘文件名；翻译失败时保留原标题继续下载。

遇到 YouTube 提示需要登录确认时，用页面上的 `YouTube 登录入口` 上传 `cookies.txt`。

音频不会单独下载。

## 改完配置后重启

```bash
cd /www/metube
docker compose up -d
```
