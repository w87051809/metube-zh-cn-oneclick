# 安全提醒

这个安装脚本默认把 MeTube 暴露在 `8081` 端口，没有自带登录密码。

如果要放到公网，请先加反向代理和访问密码，比如 Nginx Basic Auth、Cloudflare Access、内网 VPN 等。

不要把下面这些内容上传到公开仓库：

- 服务器 IP、密码、SSH key
- `.env`
- 安装日记
- 数据库账号密码
- cookies.txt

本仓库的 `.gitignore` 已经排除常见敏感文件，但最终发布前还是要自己再看一眼。

