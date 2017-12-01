Get-ChildItem *.eps | 
Foreach-Object {
    Move-Item -Path $_.FullName -Destination ($_.FullName+'.bak') -Force
    &eps2eps ($_.FullName+'.bak') $_.FullName
}