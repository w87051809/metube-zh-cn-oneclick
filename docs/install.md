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

## 改完配置后重启

```bash
cd /www/metube
docker compose up -d
```

