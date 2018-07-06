@echo off
:: author mach6 i.e. genius2k
:: download from https://raw.githubusercontent.com/machsix/personal-scripts/master/download_potplayer.bat
SETLOCAL
:: Set global variable and create folder
set aria2=C:\GreenSoft\aria2\aria2c.exe
set zipper=C:\PROGRA~1\7-Zip\7z.exe
set potplayerroot=C:\GreenSoft\PotPlayer
set potplayerpath=%potplayerroot%\PotPlayer
set temppot=%temp%\pot
set tempinstall=%temppot%\PotPlayer
set PotPlayerLink=http://get.daum.net/PotPlayer64/Version/Latest/PotPlayerSetup64.exe
set PotPlayerPack=PotPlayerSetup64.exe
set FFmpegMininumLink=http://get.daum.net/PotPlayer64/v4/Module/FFmpeg/FFmpegMininum64.dll
set OpenCodecLink=http://get.daum.net/PotPlayer/Codec/OpenCodecSetup64.exe
set LAVFilteLinkr=https://github.com/Nevcairiel/LAVFilters/releases/download/0.72/LAVFilters-0.72-x64.zip
set MadvrLink=http://madshi.net/madVR.zip
:: OpenCodec
:: http://get.daum.net/PotPlayer/Codec/OpenCodecSetup.exe
:: http://get.daum.net/PotPlayer/Codec/OpenCodecSetup64.exe
:: http://get.daum.net/PotPlayer/v4/Module/FFmpeg/FFmpegMininum.dll
:: http://get.daum.net/PotPlayer64/v4/Module/FFmpeg/FFmpegMininum64.dll
:: -------------- You should only modify things above -------------------------
:: -- main program
call :Create_folders
call :Download
call :Extracfiles
call :Temp_install
call :Copy_files
call :Install_LAV_madVR
exit /B %ERRORLEVEL% 


:Create_folders
IF EXIST %temppot% rmdir /s /q %temppot%
md %temppot%
IF NOT EXIST %potplayerroot% md %potplayerroot%
IF EXIST %potplayerpath% (
  echo %potplayerpath% exists
  IF EXIST %potplayerpath%\PotPlayerMini64.ini (
    echo Found %potplayerpath%\PotPlayerMini64.ini
    echo %potplayerpath%\PotPlayerMini64.ini is backed up to %temppot%\PotPlayerMini64.ini
    copy %potplayerpath%\PotPlayerMini64.ini %temppot%\PotPlayerMini64.ini
  )
  echo %potplayerpath% will be cleaned
  pause
  rmdir /s /q %potplayerpath%
  md %potplayerpath%
)
IF EXIST %potplayerroot%\madVR rmdir /s /q %potplayerroot%\madVR
IF EXIST %potplayerroot%\LAVFilters rmdir /s /q %potplayerroot%\LAVFilters
md %potplayerroot%\madVR
md %potplayerroot%\LAVFilters
echo Finish create folders
pause
exit /B 0

:Download
%aria2% --split=15 --max-connection-per-server=15 --dir=%temppot% --out=%PotPlayerPack% %PotPlayerLink%
%aria2% --split=15 --max-connection-per-server=15 --dir=%tempinstall%\Module\FFmpeg %FFmpegMininumLink%
%aria2% --split=15 --max-connection-per-server=15 --dir=%temppot%\OpenCodec --out=OpenCodecSetup64.exe %OpenCodecLink%
%aria2% --split=15 --max-connection-per-server=15 --dir=%temppot% --out=LAVFilters.zip %LAVFilteLinkr%
%aria2% --split=15 --max-connection-per-server=15 --dir=%temppot% --out=madVR.zip %MadvrLink%
echo Finish downloading files
pause
exit /B 0

:Extracfiles
%zipper% x %temppot%\%PotPlayerPack% -o%tempinstall% -y
%zipper% x %temppot%\OpenCodec\OpenCodecSetup64.exe -o%temppot%\OpenCodec -y
%zipper% x %temppot%\madVR.zip -o%temppot%\madVR -y
%zipper% x %temppot%\LAVFilters.zip -o%temppot%\LAVFilters -y
echo Finish extracting files
pause
exit /B 0

:Temp_install
:: use FFmpegMininum from opencodec
::echo If you want to use FFmpegMininum from opencodec (usually you don't need)
::SET /P confirm="Continue [y/n]>"confirm
::IF /I "%confirm%"=="y" (
::  copy %temppot%\OpenCodec\Module\FFmpeg\FFmpegMininum64.dll %tempinstall%\Module\FFmpeg\FFmpegMininum64.dll /y
::) 
:: clean up
rd /s /q %tempinstall%\$PLUGINSDIR
rd /s /q %tempinstall%\$0
rd /s /q %tempinstall%\Html
rename %tempinstall%\History\Chinese(Simplified).txt Chinese(Simplified).bak
rename %tempinstall%\History\English.txt English.bak
rename %tempinstall%\History\Korean.txt Korean.bak
rename %tempinstall%\Language\Chinese(Simplified).ini Chinese(Simplified).bak
rename %tempinstall%\Language\English.ini English.bak
rename %tempinstall%\Language\Korean.ini Korean.bak
del /f /q %tempinstall%\History\*.txt
del /f /q %tempinstall%\Language\*.ini
rename %tempinstall%\History\Chinese(Simplified).bak Chinese(Simplified).txt
rename %tempinstall%\History\English.bak English.txt
rename %tempinstall%\History\Korean.bak Korean.txt
rename %tempinstall%\Language\Chinese(Simplified).bak Chinese(Simplified).ini
rename %tempinstall%\Language\English.bak English.ini
rename %tempinstall%\Language\Korean.bak Korean.ini
del /f %tempinstall%\uninstall.exe.nsis
del /f %tempinstall%\PotScreenSaver64.scr
del /f %tempinstall%\FileList.txt
del /f %tempinstall%\LGPL.TXT
del /f %tempinstall%\D_Exec64.exe
del /f %tempinstall%\DesktopHook*
del /f %tempinstall%\KillPot64.exe
del /f %tempinstall%\LogManager.exe
del /f %tempinstall%\PotPlayerMiniXP64.exe
del /f %tempinstall%\PotPlayer64.exe
del /f %tempinstall%\PotPlayerXP64.exe
:: recover configuration file
IF EXIST %temppot%\PotPlayerMini64.ini (
  copy %temppot%\PotPlayerMini64.ini %tempinstall%\PotPlayerMini64.ini /y
) ELSE (
  echo No configuration file is found, a basic one is created
  echo You need to set LAVfilter by yourself latter
  (
    echo [Settings]
    echo BroadcastAttachToMain2=0
    echo CheckAutoUpdate=0
    echo PlaybackMode=1
    echo [Positions]
    echo BroadcastListWindowVisible=0
    echo ChatWindowVisible=0
    echo PlayListWindowVisible=1
  ) > %tempinstall%\PotPlayerMini64.ini
)
pause
exit /B 0

:Copy_files
xcopy %tempinstall% %potplayerpath% /i/s/e
exit /B 0

:Install_LAV_madVR
call %temppot%\LAVFilters\uninstall_video.bat
call %temppot%\LAVFilters\uninstall_audio.bat
call %temppot%\LAVFilters\uninstall_splitter.bat
call %temppot%\madVR\uninstall.bat
xcopy %temppot%\LAVFilters %potplayerroot%\LAVFilters /i/s/e
xcopy %temppot%\madVR %potplayerroot%\madVR /i/s/e
call %potplayerroot%\LAVFilters\install_video.bat
call %potplayerroot%\LAVFilters\install_audio.bat
call %potplayerroot%\LAVFilters\install_splitter.bat
call %potplayerroot%\madVR\install.bat
pause
exit /B 0