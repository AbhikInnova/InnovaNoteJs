const { Client, Result } = require("pg")
const express=require('express')

const app=express()

app.use(express.json())

const con =new Client({
    host:"localhost",
    user:"UserSQL",
    port:5432,
    password:"Abhik@0987",
    database:"curd",
})
app.get('/',(req,res)=>res.send("hi"))


//create data
app.post('/createData',(req,res)=>{
const {title,content,author}=req.body;
const insert_query='insert into blogs (title,content,author) values ($1,$2,$3)'
 
con.query(insert_query,[title,content,author],(err,result)=>{
    if(err){
        console.log(err);
        res.send(err);
    }
    else{
        console.log(res);
        res.send("created");
    }
})
})
//get data
app.get('/fetchData',(req,res)=>{
 const   fetchQuery='select * from blogs';
    
    con.query(fetchQuery,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result.rows);
        }
    })
})


//get by id
app.get('/getById/:id',(req,res)=>{
    const   fetchQuery='select * from blogs where id= $1';
       con.query(fetchQuery,[req.params.id],(err,result)=>{
        if(err)
            res.send(err);
        else
         res.send(result.rows);
       })
})   


//update
app.put('/updateData/:id',(req,res)=>{
  const {content}=req.body;
  const updateQuery='update blogs set content=$1 where id=$2';
  con.query(updateQuery,[content,req.params.id],(err,result)=>{
    if(err)
        res.send(err);
    else
    res.send(`id ${req.params.id} has been updated`);
  }) 
})


//delete soft
app.delete('/deleteData/:id',(req,res)=>{
  const deleteQuery='delete from  blogs  where id=$1';
  con.query(deleteQuery,[req.params.id],(err,result)=>{
    if(err)
        res.status(500).send(err);
    else
    res.status(200).send(`id ${req.params.id} has been deleted`);
  })
})


con.connect().then(()=>console.log("connected")).catch((err)=>console.log(err))

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
})
