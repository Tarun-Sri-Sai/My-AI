@echo OFF

start cmd /k ^
    "cd server" ^
    "& python server.py" ^
    "& exit"

start cmd /k ^
    "cd my-ai" ^
    "& npm start"