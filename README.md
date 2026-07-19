# MeTube 中文一键安装版

这是一个给 [MeTube](https://github.com/alexta69/metube) 做的中文覆盖和一键安装脚本。

它不会重新打包 MeTube 镜像，只是使用官方 Docker 镜像 `ghcr.io/alexta69/metube:latest`，再挂载中文前端覆盖脚本和一个很小的后端补丁。

## 一键安装

在 Ubuntu / Debian 服务器上执行：

```bash
curl -fsSL https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main/install.sh | sudo bash
```

安装后访问：

```text
http://服务器IP:8081/
```

默认视频保存目录：

```text
/mnt/2TB/优兔视频
```

## 自定义安装

可以改端口和下载目录：

```bash
curl -fsSL https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main/install.sh | sudo env PORT=8081 DOWNLOAD_DIR='/mnt/2TB/优兔视频' bash
```

也可以先下载脚本再执行：

```bash
curl -fsSL https://raw.githubusercontent.com/w87051809/metube-zh-cn-oneclick/main/install.sh -o install.sh
sudo PORT=8081 DOWNLOAD_DIR='/mnt/2TB/优兔视频' bash install.sh
```

## 已包含功能

- 中文界面覆盖
- 中文错误提示和详情说明
- 默认视频格式是自动，让 yt-dlp 自己选最稳的格式
- 素材包默认全选：一次点下载，同时添加自动视频、SRT 字幕、JPG 封面图
- 点“订阅”也是素材包：以后频道有新视频，会自动排队下载自动视频、SRT 字幕、JPG 封面图
- 不会单独下载音频
- 下载前会把英文标题翻译成中文，网页标题和硬盘文件名都会保存成中文；翻译失败时保留原标题继续下载
- 页面有明显的 `YouTube 登录入口`，遇到“需要登录确认”时可以上传 `cookies.txt`
- 默认启用 yt-dlp 的 YouTube 新校验求解组件，减少“只拿到封面、没有视频格式”的情况
- 订阅默认每 5 分钟检查一次
- 新订阅会补下 24 小时内刚发布的视频；更早的历史视频会记为已见过，不会一次拉一堆老视频
- 下载临时文件也放在视频目录里的 `.下载临时文件`，不会跑到网站目录外面
- 已完成列表点垃圾桶时，同时删除硬盘里的视频文件
- 视频标题前显示很小的 YouTube 封面，不额外加新列
- 后端补丁允许同一个视频地址、同一个订阅地址同时排队视频、字幕、封面，不会互相覆盖
- 独立状态目录，避免订阅记录和视频文件混在一起

## 重要提醒

`DELETE_FILE_ON_TRASHCAN=true` 已开启。

意思是：在网页“已完成”列表里点删除，会同时删除服务器硬盘里的对应视频文件。

如果你只想删网页记录，不想删硬盘文件，请编辑：

```text
/www/metube/docker-compose.yml
```

把：

```yaml
- DELETE_FILE_ON_TRASHCAN=true
```

改成：

```yaml
- DELETE_FILE_ON_TRASHCAN=false
```

然后执行：

```bash
cd /www/metube && docker compose up -d
```

## 常用命令

查看状态：

```bash
cd /www/metube && docker compose ps
```

看日志：

```bash
cd /www/metube && docker compose logs -f
```

重启：

```bash
cd /www/metube && docker compose restart
```

更新 MeTube 镜像：

```bash
cd /www/metube
docker compose pull
docker compose up -d
```

## 感谢

感谢 [alexta69/metube](https://github.com/alexta69/metube) 的作者和贡献者。

MeTube 是一个非常好用的自托管视频下载 Web UI，基于 `yt-dlp`，支持视频、音频、字幕、封面下载，也支持订阅频道和播放列表自动检查更新。

本仓库只是中文覆盖和安装脚本，不是 MeTube 官方项目。

## 许可证

为了和上游 MeTube 的许可证保持一致，本仓库使用 AGPL-3.0。
