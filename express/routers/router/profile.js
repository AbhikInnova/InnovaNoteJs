const express=require("express")
const app=express()
const router=express.Router({mergeParams:true});
//margeParams true means its takes params data from parent

//router middleware which will be called for every request on this routers
router.use((req,res,next)=>{
    console.log(`${new Date().toDateString()} -${req.originalUrl}`);
    next()
})


router.get('/',(req,res)=>{
    res.send(`profile user of id ${req.params.Id}`);
})


module.exports=router;