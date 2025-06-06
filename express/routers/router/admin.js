const express=require("express")
const router=express.Router();


//router middleware which will be called for every request on this routers

router.use((req,res,next)=>{
    try{console.log(`${new Date().toDateString()} -${req.originalUrl}`);
    next()
}
    catch(err){
       next(err);
    }
})

router.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("internal server error")
})

router.get('/',(req,res)=>{
    res.send("all admins");
})

router.get('/:Id',(req,res)=>{
    res.send(`admin of id ${req.params.Id}`)
})

module.exports=router;