const fs=require("fs")
const data=fs.createReadStream(__dirname+"/text.txt")
const write=fs.createWriteStream(__dirname+"/output.txt");
data.pipe(write);