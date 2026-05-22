#!/usr/bin/env bash
# 强行清理残留
rm -rf content
# 使用环境变量中的 Token 强行克隆私有笔记仓库作为 content
git clone https://${GITHUB_ACCESS_TOKEN}@github.com/NathanX927/my-vault.git content
# 继续执行原有的依赖安装
npm install