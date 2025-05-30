// const user = {
//   name: "Alice",
//   greet: function() {
//     return "Hello!";
//   }
// };

// const json = JSON.stringify(user);
// console.log(json);


// const user = { name: "Bob", age: 25, password: "secret" };

// // Exclude password
// const json = JSON.stringify(user, ["name", "age"],2);
// console.log(json); // '{"name":"Bob","age":25}'

// const json = `{
//   "startDate": "2024-01-01",
//   "endDate": "2024-12-31",
//   "createdAt": "2024-05-22T10:00:00Z",
//   "name": "Alice"
// }`;

// const obj = JSON.parse(json, (key, value) => {
//   if (typeof value === 'string' && key !== 'name') {
//     const date = new Date(value);
//     return date;
//   }
//   return value;
// });

// console.log(obj.startDate instanceof Date); // true
// console.log(obj.endDate instanceof Date);   // true
// console.log(obj.createdAt instanceof Date); // true
// console.log(obj.name);                      // "Alice"



// let obj={
//     name:"abhik",
//     getName:function(){
//         return this.name;
//     }
// }
// obj.getName=obj.getName.toString();
// let strObj=JSON.stringify(obj)
// console.log(strObj);

// let obj1=JSON.parse(strObj)

// obj.getName=new Function('return '+obj.getName)()
// //dynamiclly build a function which only takes a function body not function total declearation thats why we write return space thats means under the function constructor its return the function i.e obj.getName
// console.log(obj.getName());
// // console.log(obj);

// console.log(typeof obj.name)

// let strName=new String(obj.name)

// console.log(typeof strName)



// obwj={
//     name:"abhik",
//     fn(){
//         setTimeout(()=>{console.log(this);
//         },100);
//     }
// }
// obwj.fn()

// class b{
//     namie="hrty"
//     constructor(){
//     return{
//     name:"hi"
// }
//     }
// }
// let n=new b()
// console.log(n);



