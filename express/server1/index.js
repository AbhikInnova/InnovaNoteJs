const express=require("express");
const morgan = require("morgan");
const {con,checkConnection}=require("./db/connection.js")
const app=express();

app.set("view engine","ejs");
app.use((req,res,next)=>{


    console.log("this is middleware");

    next()
})
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(express.static("./public"))


app.get('/',(req,res)=>{
    res.send("About page")
})


app.get('/users',async(req,res)=>{
    let query='select * from allusers'
  let result= await con.query(query);
    res.send(result.rows);
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.post('/signup',async(req,res)=>{
    console.log(req.body);
    let {username,email,password}=req.body
    let query='insert into allusers values($1,$2,$3)'
   await con.query(query,[username,email,password]);
    res.send("data received")
})


app.put('/update/:username',async(req,res)=>{
    const {email}=req.body;
  const updateQuery='update allusers set email=$1 where username=$2';
 await con.query(updateQuery,[email,req.params.username],(err,result)=>{
    if(err)
        res.send(err);
    else
    res.send(`email ${req.params.username} has been updated`);
  }) 
})


app.delete('/delete/:email',async(req,res)=>{
  const updateQuery='update allusers set is_deleted=$1 where username=$2';
 await con.query(updateQuery,[true,req.params.email],(err,result)=>{
    if(err){
        console.log(err);
        
        res.send(err);}
    else
    res.send(`email ${req.params.email} has been deletd`);
  }) 
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
