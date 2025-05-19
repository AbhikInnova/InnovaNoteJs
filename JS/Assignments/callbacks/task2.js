function fun(callback){
fs.readFile(__dirname+"/text.txt","utf-8",(err,data)=>{
    if(err)
        callback(err,null)
    else
    callback(null,data);
})
}
fun((err,data)=>{
    if(err){
        console.log(err)
        return;
    }
   console.log(data);
})
