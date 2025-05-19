const fs=require("fs")
function checkFile(dir,extention='.txt'){
 fs.readdir(dir,{withFileTypes:true},(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
  data.forEach((ele)=>{
  if(ele.isDirectory()){
    const path=require("path")
    checkFile(path.join(dir,ele.name))
  }
 else if(ele.isFile()&&ele.name.endsWith(extention))
    console.log(ele.name);
  })
 })
}
checkFile("C:/Users/abhik.samanta/OneDrive - InnovaSolutions/Documents/NODEJS_ABHIK/JS")