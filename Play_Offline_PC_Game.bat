@echo off
title AI VISION CITY - Offline PC Game Launcher
color 0B
echo ===================================================
echo     AI VISION CITY - REALISTIC OPEN-WORLD GAME
echo            DEEP LEARNING EDITION (OFFLINE)
echo ===================================================
echo.
echo Launching native desktop PC game window...
echo.

cd /d "%~dp0"

if not exist "dist\index.html" (
    echo Building offline game files...
    call npx vite build
)

echo Starting offline game with GPU acceleration...
call npx electron electron/main.cjs

echo.
echo Game exited.
pause
