@echo off
echo ========================================
echo   AC UNFROZEN - Starting Server...
echo ========================================

cd /d "%~dp0"

echo.
echo [1/2] Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [2/2] Starting development server...
echo Server will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev