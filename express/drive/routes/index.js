const express=require('express')
const router=express.Router();
const authMiddleware=require('../middleware/auth.js')


router.get('/home',authMiddleware,(req,res)=>{
    res.render('home',{name:req.user.username})
})


router.get('/logout',(req,res)=>{
    res.clearCookie('token')
    res.render('login')
})




module.exports=router;