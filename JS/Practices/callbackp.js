// Implement filterAsync(arr, test, done) where test(item, cb) is an async function that returns true/false via a callback. Collect items that pass and send to done.

// give me more mordarate and advance question on callbacks questions if i'll solve these questions ,all concepts in depth will be cleared

//sync callback---------------------------------------
// let value = 1;

// function doSomething(callback) {
//   callback();
// }

//  doSomething(() => {
//   value = 2;
// });
// console.log(value);

//async callback------------------------------------
// let value = 1;

// function doSomething(callback) {
//     setTimeout(()=>callback(),1000)
// }

//  doSomething(() => {
//   value = 2;
// });
// console.log(value);

//callback hell-------------------------------
// function step1(value, callback) {
//   console.log('Step 1:', value);
//   callback(value + 1);
// }

// function step2(value, callback) {
//   console.log('Step 2:', value);
//   callback(value + 1);
// }

// function step3(value, callback) {
//   console.log('Step 3:', value);
//   callback(value + 1);
// }

// // Use the above functions to increment the value step by step using callbacks
// step1(0,(res)=>{
// step2(res,(res)=>{
//  step3(res,(res)=>{console.log("all done")})
// })
// })

// ------------------------------------------------------------------------------------------

// function myForEach(arr, callback) {
//   // Implement this
//   arr.forEach((num,ind)=>{
// callback(num,ind);
//   })
// }

// myForEach([1, 2, 3], function(num, index) {
//   console.log('Element:', num, 'at index:', index);
// });

// --------------------------------------------------------------------------
// function asyncOperation(data, callback) {
//   setTimeout(() => {
//     if (typeof data !== "number") {
//       callback(new Error("Not a number"));
//     } else {
//       callback(null, data * 2);
//     }
//   }, 1000);
// }

// // Use asyncOperation with valid and invalid input
// asyncOperation('a', (err, res) => {
//   if (err) console.log(err);
//   else console.log(res);
// });
// -----------------------------------------------------------------------------------------------------
// Task: Write your own filterArray that uses a callback to decide what to include

// function filterArray(arr, callback) {
//   // Implement your own version of filter
//   let res=[];
//   arr.forEach(element => {
//         res.push(callback(element))
//   });
//   return res;
// }

// const result = filterArray([1, 2, 3, 4, 5], function(el) {
//   return el*2;
// });

// console.log(result); // [2, 4]

// ------------------------------------------------------------------------------------
// function filterArray(arr, callback) {
//   let res=[];
//   arr.forEach(element => {
//     res.push(callback(element))
//   });
//   return res;
// }
// function done(ele){
// return ele;
// }

// const result = filterArray([1, 2, 3, 4, 5],(ele)=>done(ele*2));

// console.log(result);
// ----------------------------------------------------------------------------------------------------------------------------
// function fetchData(id, callback) {
//   setTimeout(() => {
//     callback(null, { id, data: `Data for ${id}` });
//   }, 1000);
// }

// // Fetch data for 3 IDs in sequence using callbacks: 1 → 2 → 3
// fetchData(1, (err, data) => {
//   console.log(data);
//   fetchData(2, (err,data) => {
//     console.log(data);
//     fetchData(3, (err,data) => {
//       console.log(data);
//     });
//   });
// });
// --------------------------------------------------------------------------------
// function makeMultiplier(x) {
//   return function(y, callback) {
//     console.log(y)
//     callback(x * y);
//   };
// }

// const double = makeMultiplier(2);
// double(5, result => console.log(result)); 
// ---------------------------------------------------------------------------------



