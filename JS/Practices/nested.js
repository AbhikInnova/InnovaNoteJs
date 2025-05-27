// for in loop over an plain object work smoothly i mean its iterate on keys
//for(let key in obj){
// console.log(key,obj[key]);
// }

// but for of loop over an plain object does not iterate directly i mean we can iterate over object.key(obj),.entities(obj),.values(obj)
// for(let value of obj.keys)

// const company = {
//   name: "TechCorp",
//   departments: [
//     {
//       name: "Engineering",
//       employees: [
//         { name: "Alice", role: "Developer", skills: ["JavaScript", "Node.js"] },
//         { name: "Bob", role: "DevOps", skills: ["Docker", "AWS"] },
//       ],
//     },
//     {
//       name: "Marketing",
//       employees: [
//         {
//           name: "Charlie",
//           role: "SEO Specialist",
//           skills: ["SEO", "Google Analytics"],
//         },
//       ],
//     },
//   ],
// };

// for (let value of Object.values(company.departments)) {
//   if (value.name === "Engineering") {
//     for (let n of value.employees) {
//       console.log(n.name);
//     }
//   }
// }

// let engEmp = company.departments
//   .filter((dp) => {
//     return dp.name == "Engineering";
//   })
//   .map((dp) => {
//     return dp.employees;
//   })
//   .flat()
//   .map((ep) => {
//     return ep.name;
//   });
// console.log(engEmp);

// let obj={
//   value:6
// }
// let arr=[1,2,3]

// console.log(arr.map(function (ele){return ele*this.value},obj))


function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}
 
console.log(transpose([
  [1, 2, 3],
  [4, 5, 6]
]));
// [[1, 4], [2, 5], [3, 6]]
 