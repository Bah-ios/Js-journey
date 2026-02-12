# Build & Run (Windows - VS Code)

This workspace contains a small C++ project in `cpp/` (files: `main.cpp`, `Booking.cpp`, `Guest.cpp`, `Room.cpp`).

## 1) Install a C++ toolchain (MinGW-w64)

1. Download MinGW-w64 from: https://www.mingw-w64.org/
   - Or use the MSYS2 installer (recommended) from https://www.msys2.org/
2. From the installer choose x86_64, posix threads, seh exceptions (typical choice) and install to e.g. `C:\mingw64`.
3. Add the MinGW `bin` directory to your PATH environment variable (e.g., `C:\mingw64\bin`).
   - After editing PATH, restart VS Code / terminal.

## 2) Build and run from VS Code

- Open the workspace folder in VS Code (`D:\JavaScript course`).
- Build the project: Run the default build task (Terminal → Run Build Task... or press `Ctrl+Shift+B`) and select `Build gms`.
- Run the program from VS Code: Run Task → `Run gms` or use the Debug panel and start the `Launch gms (external console)` configuration.

## 3) Build from a terminal (PowerShell)

```powershell
cd "D:\JavaScript course\cpp"
# compile
g++ -g main.cpp Booking.cpp Guest.cpp Room.cpp -o gms.exe
# run
.\gms.exe
```

## Notes
- The `launch.json` uses `miDebuggerPath` set to `C:/mingw64/bin/gdb.exe`. If you installed to a different path, update `miDebuggerPath` in `.vscode/launch.json`.
- If `g++` is not recognized, ensure MinGW `bin` is on PATH and restart your terminal/VS Code.

If you want, I can try to update code style or change `Booking` to use composition instead of inheritance. Let me know which changes you want next.