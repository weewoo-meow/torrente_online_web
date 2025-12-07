@echo off
setlocal enabledelayedexpansion

:: Verificar si se está ejecutando como administrador
openfiles >nul 2>&1
if %errorlevel% neq 0 (
    echo Solicitando permisos de administrador...
    powershell -Command "Start-Process '%~f0' -Verb runAs"
    exit /b
)

:: Ruta del archivo hosts
set "hostsFile=%SystemRoot%\System32\drivers\etc\hosts"

:: Línea a añadir
set "newEntry=185.228.138.108       tol.trewq.com"

:: Comprobar si ya existe la línea
findstr /C:"%newEntry%" "%hostsFile%" >nul
if %errorlevel%==0 (
    echo La entrada ya existe en el archivo hosts.
    goto end
)

:: Hacer una copia de seguridad por si acaso
copy "%hostsFile%" "%hostsFile%.bak" >nul

:: Añadir la línea
(
    echo.
    echo %newEntry%
) >> "%hostsFile%"

echo Línea añadida correctamente.

:end
pause
