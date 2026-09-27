@echo off
cd /d "%~dp0"
set PORT=8060
echo ========================================================
echo   Wordventure Demo - Local Server
echo   Membuka http://localhost:%PORT% di browser...
echo ========================================================
start http://localhost:%PORT%
python -m http.server %PORT%
if %ERRORLEVEL% neq 0 (
    echo.
    echo Mencoba server alternatif via Node.js...
    npx -y serve -p %PORT% .
)
pause
