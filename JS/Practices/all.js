// const p1=new Promise((res,rej)=>setTimeout(res,1000,'ok1'))
// const p2=new Promise((res,rej)=>setTimeout(rej,1000,'ok2'))

// Promise.allSettled([p1,p2]).then(res=>console.log(res)).catch(err=>console.log(err)).finally(()=>console.log('done')
// )

// async function test() {
//   console.log("Start");
//   const res = await Promise.resolve("Resolved");
//   console.log(res);
//   console.log("End");
// }


// test();
// console.log("After");
// foo()
// function foo(){
//     console.log('foo');
    
// }

// async function delayedLog(msg, delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(msg);
//       resolve();
//     }, delay);
//   });
// }

// (async () => {
//   await delayedLog("One", 1000);
//   delayedLog("Two", 500);
//   console.log("Three");
// })();
// console.log("After");

// let p=new Promise((res,rej)=>setTimeout(res,2000,10));
// p.then(data=>data+2).then(data1=>console.log(data1)
// )

const obj={
  a: 10,
  x:()=>{
     console.log(a);//undefined;->this.a
  }
}
obj.x();