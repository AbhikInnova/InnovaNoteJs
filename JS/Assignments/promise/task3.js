const promise1=new Promise((res,rej)=>{
    setTimeout(res,1000,"ok1");
})
const promise2=new Promise((res,rej)=>{
    setTimeout(res,2000,"ok2");
})

Promise.all([promise1,promise2]).then(data=>console.log(data))