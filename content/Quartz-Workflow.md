---
title: 基于 Quartz 4 与 Git 双仓库流搭建极客数字花园 (Digital Garden)
date: 2026-05-22
tags:
  - Workflow
  - Git
  - Quartz
---

为了彻底绕过 Windows 系统下跨盘符创建软链接 (Symlink) 的权限与文件系统限制，本网站采用了更高级、更稳固的 **Git 双仓库联动流 (Two-Repo Workflow)**。本文记录该架构的日常维护命令与全套建站逻辑，以备后查。

---

## 1. 核心架构原理 (Architecture)

本数字花园由两个独立的 GitHub 仓库无缝缝合而成：
* **Repo A (私有库 `my-vault`)**：位于 `D:\资料库\prep_research`，纯粹存放本地 Obsidian 的原始 `.md` 笔记。
* **Repo B (公开库 `NX-diGarden`)**：位于 `F:\NX-diGarden`，存放 Quartz 网站的框架代码。
* **缝合核心 (Git Submodule)**：利用 Git 子模块技术，将 Repo A 作为子目录织入 Repo B 的 `content` 文件夹中，实现跨盘符的“虚拟传送门”。

---

## 2. 日常推送与同步流程 (Daily Push Workflow)

以后在 Obsidian 里写完新的数学推导或宇宙学笔记后，**完全在命令行（终端）中**通过以下标准两步走完成全网发布：

### 第一步：在 Obsidian 仓库（D盘）提交并上传笔记
打开终端，进入你的 Obsidian 笔记目录，将新写的内容推送到云端私有库：
```bash
# 1. 切到 D 盘笔记目录
cd /d D:\资料库\prep_research

# 2. 将所有新笔记和改动添加到暂存区
git add .

# 3. 提交改动
git commit -m "Update notes: 完善广义相对论度规推导"

# 4. 推送到云端私有仓库
git push origin main
### 第二步：在 Quartz 仓库（F盘）拉取内容并全网发布
当你确信 D 盘的笔记已经上传到云端后（无论是通过插件自动上传，还是通过快捷键 `Ctrl+P` 运行 `Git: Create Backup` 强行上传），你需要来到 F 盘通知 Quartz 更新：

```bash
# 1. 跨盘切到 F 盘 Quartz 网站目录
cd /d F:\NX-diGarden

# 2. 让子模块 (content) 去云端把刚才 push 的最新笔记拉下来
git submodule update --remote --merge

# 3. 本地预览你的数字花园（确保一切正常）
npx quartz build --serve