# Algo8
------------------------------------------------------------------------------------------
#Task 1 : Provide some example of config file separation for dev and prod environments.
------------------------------------------------------------------------------------------
config/environment.js

const development = {

  name: "development",
  
  asset_path: "/assets",
  
  session_cookie_key: "Algo8",
  
  db: "development",
  
  jwt_secret: "Task3", 
};

// poweshell $env:ENVIRONMENT="production"

//node process.env.ENVIRONMENT

//packge.json "prod_start": "NODE_ENV=production nodemon index.js"

//npm run prod_start

const production = {

  name: "production",
  
  asset_path: process.env.ASSET_PATH,
  
  session_cookie_key: process.env.SESSION_COOKIE_KEY,
  
  db: process.env.DB,
  
  jwt_secret: process.env.JWT_SECRET,  
};

module.exports =eval(process.env.ENVIRONMENT) == undefined ? development : eval(process.env.ENVIRONMENT);


-------------------------------------------------------------------------------------------
#Task 2 : Convert any callback into a promise with example code of callback and promise.
-------------------------------------------------------------------------------------------
var error = function(){ 

    console.log("ERROR");    
}   
var success = function(){ 

    console.log("SUCCESS");    
}     
var caller = function(status) { 

    return new Promise(function(resolve, reject) { 
    
        if(status === 'Algo') { 
        
          resolve();     
        } 
        
        else {
        
            reject();    
        }   
    }); 
}; 
caller('Algo').then(success).catch(error); // Throw success 

caller('Welcome').then(success).catch(error); // Throw error 

#Task 3A 

RUN: localhost:8000

#REGISTER API : Register User

http://localhost:8000/api/users/register

#LOGIN API : Login User

http://localhost:8000/api/users/login

RESPONSE:

{
    "message": "Sign in successful, here is your token, please keep it safe!",
    
    "success": true,
    
    "data": {
    
        "token": 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM4Y2M4ZGU4MzAwOTFiNzhkMmM0OTQiLCJlbWFpbCI6ImppdGVuZGVyamFpc3dhbEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRqZmhTYm0yUC9OSVpzZj
        VnMkRlWWh1S0NaM1g3U1NXUW9nSW9vdkpudEticmFaTXE3d1lnUyIsIm5hbWUiOiJKaXRlbmRlckphaXN3YWwiLCJjcmVhdGVkQXQiOiIyMDIwLTEyLTAzVDExOjMxOjI1LjI1NloiLCJ1cGRhdGVkQXQiOiIyMDIwLTEyLTAzVDExOj
        MxOjI1LjI1NloiLCJfX3YiOjAsImlhdCI6MTYwNzAwNzYzMSwiZXhwIjoxNjA3MDA4NjMxfQ.grzZKB4alY8P4Z3YMHoqUZKQYLiBq1QU-uUKBP6Lfik",
        
        "user": {
           
           "_id": "5fc8cc8de830091b78d2c494",
            
            "email": "jitenderjaiswal@gmail.com",
           
           "password": "$2a$10$jfhSbm2P/NIZsf5g2DeYhuKCZ3X7SSWQogIoovJntKbraZMq7wYgS",
            
            "name": "JitenderJaiswal",
            
            "createdAt": "2020-12-03T11:31:25.256Z",
            
            "updatedAt": "2020-12-03T11:31:25.256Z",
            
            "__v": 0
        }
    }
}

#PROFILE API : Profile of User
http://localhost:8000/api/users/profile

RESPONSE :
{
   "message": "User Profile!",
    
    "profile_user": {
    
    "_id": "5fc8cc8de830091b78d2c494",
    
    "email": "jitenderjaiswal@gmail.com",
    
    "password": "$2a$10$jfhSbm2P/NIZsf5g2DeYhuKCZ3X7SSWQogIoovJntKbraZMq7wYgS",
    
    "name": "JitenderJaiswal",
    
    "createdAt": "2020-12-03T11:31:25.256Z",
    
    "updatedAt": "2020-12-03T11:31:25.256Z",
    
    "__v": 0
    }
}


