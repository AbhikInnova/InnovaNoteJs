import dotenv from 'dotenv/config'
import checkConnection from './dbknex/checkConnection.js'
import express from 'express'
const app=express();


;(async()=>{
   try {
      
   } catch (error) {
      
   }

})()//iife

// async function startServer(){
//  const temp=   await checkConnection();
//  if(!temp){
//     console.log("exit process because of db connection");
//     process.exit(1);
//  }
//  app.on("err",(err)=>{
//    console.log("error",err);
//    throw err;
//  })
//  app.listen(3000,()=>{

//     console.log("server start..... server running");
    
//  })
// }

// startServer();