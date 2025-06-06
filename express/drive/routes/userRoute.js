const express=require('express');
const {con}=require("../db/connection.js")
const router=express.Router();
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
// const cookieParser=require('cookie-parser')

// router.use(cookieParser())


router.get('/signup',(req,res)=>{
    res.render("signup");
})

router.post('/signup',async(req,res)=>{
    let {username,email,password}=req.body;

const hashPassword= await bcrypt.hash(password,10);

    let query='insert into allusers values($1,$2,$3)'
   await con.query(query,[username,email,hashPassword])
     res.send("data received")
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/login',async(req,res)=>{
    let {username,password}=req.body;
    let query='select * from allusers where username=$1'
 let result=  await con.query(query,[username])
   if(result.rowCount==0)
    res.status(400).json({
message:"username or password is incorrect"
})

    const user = result.rows[0];
   const isTrue= await bcrypt.compare(password,user.password);

 if(!isTrue){
    res.status(400).json({
message:"username or password is incorrect"
})
 }
 const token=jwt.sign({
    username:user.username
},process.env.JWT_SECRET,{
    expiresIn:"1h"
})
res.cookie('token',token,{httpOnly:true})
res.send("Logged IN");
})

module.exports=router;