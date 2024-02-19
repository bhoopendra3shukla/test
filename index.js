require('dotenv').config()
const express=require("express");
const app=express();
 const port =process.env.PORT ||3000;
console.log(process.env.PORT,"process.env.PORT")
app.listen(port,()=>{
console.log(`app is listen the port =${port}`)
});

app.get('/',(req,res)=>{
    res.send("<h1>This is the testing</h1>")
});

app.get('/twitter',(req,res)=>{
    res.send("<h1>This is the twitter</h1>")
});

app.get('/login',(req,res)=>{
    res.send("<h1>This is the login code</h1>")
});

app.get('/signup',(req,res)=>{
    res.send("<h1>This is signup page </h1>")
});