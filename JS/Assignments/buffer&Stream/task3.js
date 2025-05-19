const fs=require("fs");
const zlib=require("zlib")
fs.createReadStream(__dirname+"/text.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream(__dirname+'/zip.gz'));