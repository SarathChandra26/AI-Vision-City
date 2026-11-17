@echo off
title AI VISION CITY - Desktop App Launcher
color 0A
echo ===================================================
echo     AI VISION CITY - DESKTOP APP WINDOW MODE
echo ===================================================
echo.

cd /d "%~dp0"

echo Starting background game server...
start /B "" node server.cjs

timeout /t 2 /nobreak >nul

echo Launching standalone borderless game window...
start chrome.exe --app="http://127.0.0.1:3000/" --start-maximized --enable-gpu-rasterization --enable-zero-copy --ignore-gpu-blocklist
if errorlevel 1 (
    start msedge.exe --app="http://127.0.0.1:3000/" --start-maximized --enable-gpu-rasterization --enable-zero-copy --ignore-gpu-blocklist
)
if errorlevel 1 (
    start http://127.0.0.1:3000/
)

echo.
echo Running at http://127.0.0.1:3000/! Enjoy the game.
