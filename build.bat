@echo OFF
start cmd /k ^
    "pip install pandas scikit-learn flask flask-cors" ^
    "& exit"
start cmd /k ^
    "cd my-ai" ^
    "& npm install" ^
    "& npm install @angular/cli" ^
    "& npm audit fix" ^
    "& exit"