@echo off
chcp 65001 >nul
echo ========================================
echo 1. 正在从 Obsidian 同步笔记到本地 Quartz...
echo ========================================

set "SRC=D:\资料库\prep_research"
set "DST=F:\NX-diGarden\content"

robocopy "%SRC%" "%DST%" /MIR /XD ".obsidian" ".trash" ".git" "templates" "private" /XF ".DS_Store" "*.canvas"

echo.
echo ========================================
echo 2. 正在推送到 GitHub，触发 Vercel 自动部署...
echo ========================================

cd /d F:\NX-diGarden
git add .
git commit -m "Update notes: %date% %time%"
git push

echo.
echo ========================================
echo 全部完成！稍等 1 分钟即可在网页端查看最新内容。
echo ========================================
pause