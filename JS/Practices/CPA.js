//callback==>passing a function as an argument of a funtion
//nested callback
// function fun(data, getNextData) {
//     setTimeout( () => {
//         console.log(data);
//         if (getNextData)
//             getNextData();
//     }
//     , 1000);
// }
// fun(1, () => {
//     fun(2, () => {
//         fun(3,()=>{})
//     }
//     )
// }
// )


//nested callback with previous data #callback hell


// function fun(data, getNextData) {
//     setTimeout(() => {
//         console.log("operation 1");
//         if (getNextData)
//             getNextData(data+1);
//     }
//     , 1000);
// }
// function fun1(data, getNextData) {
//     setTimeout(() => {
//         console.log("operation 2");
//         if (getNextData)
//             getNextData(data+1);
//     }
//     , 1000);
// }
// function fun2(data, getNextData) {
//     setTimeout(() => {
//         console.log("operation 3");
//         if (getNextData)
//             getNextData(data+1);
//     }
//     , 1000);
// }


// fun(1, (res) => {
//     fun1(res, (res1) => {
//         fun2(res1,(res2)=>{console.log(res2)})
//     }
//     )
// }
// )

//Promise==> is an object ,is for eventual completion or delay of an async program,,solution of callback hell

// function fun(delay, task) {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             reject(new Error("reject task"))
//         }
//         , delay);
//         task.then(data => resolve(data)).catch(err => reject(err))
//     }
//     )
// }

// function fun1(delay) {
//     return new Promise(resolve => {
//         setTimeout(resolve, delay, "resolve data fun1")
//     }
//     )
// }

// fun(2000, fun1(1000)).then(data => console.log(data)).catch(err => console.log(err.message));



//promise chaining

// function getData(data) {
//     return new Promise( (res, rej) => {
//         setTimeout( () => {
//             console.log(data);
//             res(data);
//         }
//         , 2000);
//     }
//     )
// }

// getData(2).then( (res) => {
//     getData(res + 1).then( (res) => {
//         getData(res + 1).then( (res) => {
//             console.log("success")
//         }
//         )
//     }
//     )
// }
// )


//async await==> always return a promise

//iife




