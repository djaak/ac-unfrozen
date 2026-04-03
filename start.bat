@echo off
title AC Unfrozen - Dev Server
echo ========================================
echo   AC UNFROZEN - Starting Dev Server
echo ========================================
echo.

cd /d "%~dp0"

echo [1/2] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [2/2] Starting development server...
echo.
echo   Local:  http://localhost:3000
echo.
echo   Press Ctrl+C to stop
echo.

call npm run dev
