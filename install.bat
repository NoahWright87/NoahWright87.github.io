@echo off
setlocal
:PROMPT
SET /P AREYOUSURE=This will take quite some time and should only be run once, when you first pull down the repo.  Proceed (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END

del package-lock.json
rd node_modules /S /Q
npm install

:END
echo .
echo .
echo All done!  Open run.bat to start the application.
echo Press any key to close...
pause