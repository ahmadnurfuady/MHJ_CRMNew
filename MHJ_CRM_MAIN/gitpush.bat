@echo off
setlocal
cd /d "%~dp0"

for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set BRANCH=%%b
echo Branch aktif: %BRANCH%
echo.

git status --short
echo.

set "MSG=%*"
if "%MSG%"=="" set /p MSG=Masukkan pesan commit:
if "%MSG%"=="" (
    echo Pesan commit tidak boleh kosong.
    pause
    exit /b 1
)

git add -A
git diff --cached --quiet
if %errorlevel%==0 (
    echo Tidak ada perubahan untuk di-commit.
) else (
    git commit -m "%MSG%"
    if errorlevel 1 goto gagal
)

echo.
echo Menarik perubahan terbaru dari origin/%BRANCH%...
git pull --no-rebase origin %BRANCH%
if errorlevel 1 goto gagal

echo.
echo Mengirim ke origin/%BRANCH%...
git push origin %BRANCH%
if errorlevel 1 goto gagal

echo.
echo Selesai! Perubahan berhasil dikirim.
pause
exit /b 0

:gagal
echo.
echo Terjadi kesalahan. Periksa pesan di atas (mungkin ada konflik merge).
pause
exit /b 1
