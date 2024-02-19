require('dotenv').config()
import  express from'express';
const app=express();
 const port =process.env.PORT ||3000;
console.log(process.env.PORT,"process.env.PORT")
app.listen(port,()=>{
console.log(`app is listen the port =${port}`)
});

app.get('/',(req,res)=>{
    res.send("<h1>This is the testing</h1>")
});
