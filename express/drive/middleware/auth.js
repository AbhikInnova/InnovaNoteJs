const jwt=require('jsonwebtoken');

function auth(req,res,next){
    const token =req.cookies.token;
    if(!token){
       res.status(401).json({
        message:"unauthorised"
       })}
try {
const decoded=jwt.verify(token,process.env.JWT_SECRET)
req.user=decoded;
next();
} catch (error) {
     res.status(401).json({
        message:"unauthorised"
       })
}

}
module.exports=auth