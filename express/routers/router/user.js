const express=require("express")
const app=express()
const router=express.Router();

const Profile=require("./profile");
//router middleware which will be called for every request on this routers
router.use((req,res,next)=>{
    console.log(`${new Date().toDateString()} -${req.originalUrl}`);
    next()
})


router.get('/',(req,res)=>{
    res.send("all users");
})

router.get('/:Id',(req,res)=>{
    res.send(`user of id ${req.params.Id}`)
})

router.use('/:Id/profile',Profile)//mount nested router;

module.exports=router;