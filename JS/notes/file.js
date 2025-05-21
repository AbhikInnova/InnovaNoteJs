// const fs =require("fs").promise;
// fs.writeFileSync("./text.txt","hey helloooo");//relative path
// fs.writeFileSync(__dirname+"/text.txt","hey helloooo")//absolute path
// fs.writeFile(__dirname+"/text.txt","hey helloooo",(err)=>{})

// let res=fs.readFileSync(__dirname+"/text.txt","utf-8")
// console.log(res)

// fs.readFile(__dirname+"/text.txt","utf-8",(err,data)=>{
// console.log(data)
// })


// fs.unlinkSync("./text.txt")


//calling data from outside of a function using fs.promise
// const fs = require("fs");

// async function fun() {
//   return await fs.promises.readFile(__dirname + "/text.txt", "utf-8", (error, data) => {
//     return data;
//   });
// }

// fun().then((data) => {
//   console.log(data);
// });



//stream 


// readablestram->allow node js to read data from a stream
// A Readable Stream is used for reading data.
// Example use cases:
// Reading a file
// Receiving data over a network (like HTTP request)
// Reading user input

// .pipe(destination) — Pipes data to a Writable stream
// .on('data', callback) — Handles chunks of data
// .on('end', callback) — Fired when there is no more data
// .read() — Reads data from the internal buffer

// const fs = require('fs');
// const readable = fs.createReadStream('input.txt', 'utf8');
// readable.on('data', chunk => {
//   console.log('Received chunk:', chunk);
// });
// readable.on('end', () => {
//   console.log('No more data.');
// });



// A Writable Stream is used for writing data.
// Writing to a file
// Sending data over a network (like HTTP response)
// Writing to a terminal

// .write(chunk) — Writes a chunk of data
// .end() — Signals that no more data will be written
// .on('finish', callback) — Fired when all data is written
// .on('error', callback) — Handles write errors

// const fs = require('fs');
// const writable = fs.createWriteStream('output.txt');
// writable.write('Hello, ');
// writable.write('world!\n');
// writable.end('Done writing.');
// writable.on('finish', () => {
//   console.log('Finished writing to file.');
// });


// pipe-->
// const fs = require('fs');
// const readable = fs.createReadStream('input.txt');
// const writable = fs.createWriteStream('output.txt');
// readable.pipe(writable);



//zip a file using zlib
// const fs = require("fs");
// const zlib = require("zlib");

// fs.createReadStream(__dirname + "/note.txt")
//   .pipe(zlib.createGzip()) // compress the data
//   .pipe(fs.createWriteStream(__dirname + "/notez.gz")); // write to .gz file


// const fs=require("fs")
// const{Transform}=require("stream")

// const convert=new Transform({
//     transform(chunks,encode,cb){
//    const temp=chunks.toString().toLowerCase();
//    cb(null,temp)
//     }
// })

// const buf=fs.createReadStream(__dirname+'/note.txt')
// const wri=fs.createWriteStream(__dirname+'/output.txt')
// buf.pipe(convert).pipe(wri);


// BUFFER
// const buff=Buffer.from("HELLO")
// console.log(buff.toString());

// const buffer=Buffer.alloc(10);
// buffer.write("HIIIII");
// console.log(buffer.toString());



