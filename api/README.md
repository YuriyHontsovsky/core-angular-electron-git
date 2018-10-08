dotnet restore
// publish for windows
dotnet publish -r win10-x64 --output bin/dist/win
// publish for macos
dotnet publish -r osx.10.11-x64 --output bin/dist/osx

https://scotch.io/@rui/how-to-build-a-cross-platform-desktop-application-with-electron-and-net-core#toc-distribution