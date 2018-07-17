@echo off
SETLOCAL
:: Set global variable and create folder
set install_dir=C:\GreenSoft
set aria2=%install_dir%\aria2\aria2c.exe
set vimlink=http://tuxproject.de/projects/vim/complete-x64.7z
set vimpack=vim-x64.7z
set vimdir=%install_dir%\vim-x64
set zipper=C:\PROGRA~1\7-Zip\7z.exe
set luabin=http://joedf.ahkscript.org/LuaBuilds/hdata/lua-5.3.4_Win64_bin.zip
:: get this from https://tuxproject.de/projects/vim/
set python_ver=37

call :Uninstall
call :Download_vim
call :Download_lua
call :Clean
call :Link_python

exit /B %ERRORLEVEL% 
:Uninstall
IF EXIST %vimdir% rmdir /s /q %vimdir%

:Download_vim
REM https://tuxproject.de/projects/vim/
%aria2% --split=15 --max-connection-per-server=15 --dir=%install_dir% --out=%vimpack% %vimlink%
%zipper% x %install_dir%\%vimpack% -o%vimdir% -y

:Download_lua
REM http://joedf.ahkscript.org/LuaBuilds/
%aria2% --split=15 --max-connection-per-server=15 --dir=%install_dir% --out=lua_bin.zip %luabin%
%zipper% x %install_dir%\lua_bin.zip -o%vimdir% -y

:Clean
del %install_dir%\%vimpack%
del %install_dir%\lua_bin.zip

:Link_python
if exist %HOMEPATH%\Anaconda3\python35.dll (
  mklink %HOMEPATH%\Anaconda3\python%python_ver%.dll %HOMEPATH%\Anaconda3\python35.dll
)
if exist %HOMEPATH%\Anaconda3\python36.dll (
  mklink %HOMEPATH%\Anaconda3\python%python_ver%.dll %HOMEPATH%\Anaconda3\python36.dll
)
:: mklink C:\Users\Han\Anaconda3\python36.dll C:\Users\Han\Anaconda3\python35.dll

