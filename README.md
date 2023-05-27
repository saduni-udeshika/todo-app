### **How to get started**
    
  Setting up project-
  
    1. Download or clone project from github
    2. Open project folder and place project specific '.env' file
    3. Open backend folder using terminal or gitbash
    4. Execute 'npm install' command
    5. Execute 'npm start' command to start backend server
    6. Open frontend folder using terminal or gitbash
    7. Execute 'npm install' command
    8. Execute 'npm start' command to start frontend server
    9. Project will open on browser tab (port:3000)
### **Deploy to Docker**

    1. docker build -t todo-web-app .
    2. docker images
    3. docker run -d -p 5000:5000 todo-web-app
    4. docker ps
