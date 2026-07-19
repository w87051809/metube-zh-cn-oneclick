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

视频格式交给 yt-dlp 自动选择，下载更稳。

英文标题会尽量翻译成中文后保存到网页记录和硬盘文件名；翻译失败时保留原标题继续下载。

音频不会单独下载。

## 改完配置后重启

```bash
cd /www/metube
docker compose up -d
```
