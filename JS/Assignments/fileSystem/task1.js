const fs=require("fs");
fs.readFile(__dirname+'/text.txt','utf-8',(err,data)=>{
    if(err)
        console.log(err);
    else
    console.log(data);
})