@echo off
title AC Unfrozen - Stop Server
echo ========================================
echo   AC UNFROZEN - Stopping Dev Server
echo ========================================
echo.

echo Stopping any process on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000 " ^| findstr "LISTENING"') do (
    echo Killing PID %%a
    taskkill /PID %%a /F >nul 2>&1
)

echo Done. Server stopped.
echo.
pause
