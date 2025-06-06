const express=require('express')
const app=express();
const admin=require("./router/admin");
const user=require("./router/user");

app.use((req,res,next)=>{
    console.log("called this globally ");
    next();
})

function middleware(req,res,next) {
    console.log("middleware called");
    next();
}

app.use('/user',middleware,user)//mount user router;
app.use('/admin',middleware,admin)

app.get('/',(req,res)=>{
    res.send("this is the server /")
})


app.listen(3000,()=>{
    console.log("server running");
})

