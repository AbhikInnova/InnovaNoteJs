//  Create a Book Class
// Properties: title, author, year
// Method: getSummary() – returns a string:
// "Title by Author, published in Year"

// class Book{
//     constructor(title,author,year){
//         this.title=title,
//         this.author=author,
//         this.year=year
//     }
//     getSummary(){
//         return `${this.title} by ${this.author}, published in ${this.year}`
//     }
// }
// const obj=new Book('SomeoneBehindYou','Mr. Jack', 1997)
// console.log(obj.getSummary())




// Create a Car Class with Inheritance
// Base Class: Vehicle
// Properties: brand, speed
// Method: accelerate() – increases speed
// Derived Class: Car
// Additional Property: model
// Overrides accelerate() to increase speed by 10

// class Vehicle{

//    constructor(name){
//      name = name 
//    }
// }

// class car extends Vehicle{
//     constructor(val){
//         name = 'dsa'
//         val = val
//     }
// }


//  const obj1=new car("hlo")
// console.log(obj1.name);

//  obj.hi(37,38)
 



// class A {
//     constructor() {
//         this.value = 10;
//     }

//     method() {
//         console.log('A method');
//     }
// }

// class B extends A {
//     constructor() {
//         super();
//         this.value = 20;
//     }

//     method() {
//         super.method(); 
//         console.log('B method');
//     }
// }

// class C extends B {
//     constructor() {
//         super();
//         this.value = 30;
//     }

//     method() {
//         super.method();
//         console.log('C method');
//     }
// }

// const obj = new C();
// obj.method();






// class X {
//   constructor() {
//     this.value = 10;
//   }

// }

// class Z extends X {
//   constructor() {
//       super();   
//       this.value = 30;  


//   }
//     getValue() {
//     return this.value;
//   }
// }
// // 
// const obj = new Z();
// console.log(obj.getValue()); 




// class Parent {
//   greet(){
//     console.log("hey there")
//   }
//   static greet() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//   static greet() {
//     console.log("Hello from Child");
//     super.greet(); // calls Parent.greet()
//   }
// }

// Child.greet();



// class A {
//   constructor() {
//     this.value = 42;
//   }

//   getValue() {
//     return this.value;
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//     this.value = 100;
//   }

//   getValue() {
//     return super.getValue();
//   }
// }

// const b = new B();
// console.log(b.getValue());










// class Parent {
  // get value() {
  //   return 'Parent value';
  // }
// }

// class Child extends Parent {
//   constructor() {
//     super();
//     this.value = 'Child value';
//   }

//   printValues() {
//     console.log('this.value:', this.value); 
//     console.log('super.value:', super.value); 
//   }
// }

// const c = new Child();
// c.printValues();




class Parent {
  constructor(name) {
    this.name = name;
    console.log("Parent constructor");
  }

  greet() {
    console.log(`Hello from ${this.name}`);
  }
}

class Child extends Parent {

}

const child = new Child("Alice");
child.greet();
console.log(child.constructor)
