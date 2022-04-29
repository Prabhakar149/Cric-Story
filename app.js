const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/home.html");
});

app.get("/home",function(req,res){
    res.sendFile(__dirname + "/home.html");
});

app.get("/login",function(req,res){
    res.sendFile(__dirname + "/login.html");
});

app.get("/contact",function(req,res){
    res.sendFile(__dirname + "/contact.html");
});

app.get("/register",function(req,res){
    res.sendFile(__dirname + "/register.html");
});

app.post("/register-success",function(req,res){
    const userName=req.body.uName;
    const email=req.body.email;
    const password=req.body.pw;
    console.log(userName+" "+email+" "+password);
    res.sendFile(__dirname+"/success.html");
})

app.post("/login-success",function(req,res){
    res.sendFile(__dirname+"/success-login.html");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running now at port 3000!");
});
