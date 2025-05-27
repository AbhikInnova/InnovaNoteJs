// array---->object -->null
//string -->object-->null

// function fun(num){
//     return num*2;
// }
// fun.power=2
// console.log(fun.power);
// console.log(fun.prototype);


//inject functionality using prototype
// --->using prototype its find from parents
// function createUser(userName,score){
// this.userName=userName;
// this.score=score;
// }

// createUser.prototype.increment=function(){
//    this.score++; 
// }
// createUser.prototype.print=function(){
//     console.log(`this is the score${this.score}`)
// }

// const chai=new createUser("chai",45);

// const tea=createUser("coffe",340);//without new cant know tea about inject functionality
// // tea.print();//error
// chai.print();



//MAIN PART

// let name="Abhik     "
// console.log(name.trueLength)

// let myHero=["thor","spiderman"]
// let heroPower={
//     thor:"hammer",
//     spiderMan:"sling",
//     getSpiderPower:function(){
//         console.log(this.spiderMan);
//     }
// }

// let string="hello"

// Object.prototype.abhik=function(){
//     console.log("present in all objects");
    
// }
//i inject this function in top level object so i can access this function from any things likes array,string..
// string.abhik();
// heroPower.abhik();
// myHero.abhik();
//all can be able to access abhik();



// Array.prototype.sonu=function(){
//     console.log("array function")
// }
// myHero.sonu();
//basically i give the power to array not the object so sonu() only accessable for array only





// const user={
//     login:"abhik"
// }

// const teacher={
//     teach:true,
//     login:"hi"
// }

// const support={
//     isAvailable:false,
// }
// const TASupport={
//     makeAssignment:'JS Assignment',
//     fulltime:false,
//     __proto__:support//inharit support
// }

// teacher.__proto__=user//inharit user

// console.log(teacher.login)//abhik from user if login doesnot exist in teacher else print login from teacher



//modern syntex
// Object.setPrototypeOf(support,teacher);

// let otherUserName="abhik samanta       "

// String.prototype.trueLength=function(){
//     console.log(this)
//     console.log(this.trim().length)
// }
//inject function in whole String so i can use this method from any string

// otherUserName.trueLength();

"hello ji  ".trueLength();







function Person(name) {
  this.name = name;  // own property
  this.greet=function(){//own method
    console.log("hi");
  }
}

// Add method on the prototype
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const p = new Person('Alice');

console.log(p.hasOwnProperty('sayHello')); // false
console.log(p); // not showing sayHello 

p.sayHello(); // Hello, my name is Alice


