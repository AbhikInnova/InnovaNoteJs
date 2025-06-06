const dotenv=require('dotenv')
dotenv.config();

const express=require("express");
const cookieParser=require('cookie-parser')
const apiUserRouter=require('./routes/apiuser.js')
const {con,checkConnection}=require("./db/connection.js")
const useRouter=require('./routes/userRoute.js')
const indexRouter=require('./routes/index.js')
const app=express();

app.set("view engine","ejs");
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',indexRouter);
app.use('/user',useRouter);
app.use('/api/users',apiUserRouter);

app.get('/',(req,res)=>{
    res.send("About page")
})























async function serverStart() {
     let temp= await checkConnection();
    if(temp){    
        app.listen(3000,(err)=>{
            if(err)
                console.log(err);
            else
            console.log("running.....");
        })
    } 
}
serverStart();
