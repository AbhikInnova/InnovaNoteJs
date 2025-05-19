const promise=new Promise((res,rej)=>{
    setTimeout(res,1000,"ok");
})
promise.then(data=>console.log(data)).catch(err=>console.log(err));