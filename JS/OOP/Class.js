// //ES6

// class myClass{
//   constructor(name,email,password){
// this.name=name,
// this.email=email,
// this.password=password
//   }
//   encryptPassword(){
//     return `${this.password}abc`
//   }
//   getCapitalUsername(){
//     return this.name.toUpperCase();
//   }
// }

// const user=new myClass("abhik","abhik@innova","abcd");
// console.log(user.getCapitalUsername())

//behind the sence----->

// function user(userName,email,password){
// this.userName=userName,
// this.email=email,
// this.password=password
// }

// Object.prototype.changeUser=function(){
//     return this.userName.toUpperCase();
// }

// const user1=new user("abhik","abhik@innova","abcd")
// console.log(user1.changeUser());




// class myClass {
//   constructor(name, email) {
//     (this.name = name), (this.email = email);
//   }

//   getCapitalUsername() {
//     console.log(this.name.toUpperCase());
//   }
// }
// class myClass1 extends myClass {
//   constructor(name, email) {
//     super(name, email);
//   }
//   getDetails() {
//     console.log(this.name);
//   }
// }

// const user1 = new myClass1("abhik", "abhik@abc");
// user1.getCapitalUsername();

// const user= new myClass("abhik1", "abhik1@abc");
// user.getCapitalUsername();

// // console.log(user===user1);
// console.log(user1 instanceof myClass);

