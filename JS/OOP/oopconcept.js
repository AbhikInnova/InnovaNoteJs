//  1. **Encapsulation**
//  Encapsulation is the bundling of data (properties) and methods (functions) that operate on that data within one unit — typically an object or class.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this._age = age; // private-like (by convention)
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const p = new Person('Alice', 25);
// p.greet(); // Hello, my name is Alice

// 🔒 ES2022+ supports **true private fields** using `#`:

// class Person {
//   #age;

//   constructor(name, age) {
//     this.name = name;
//     this.#age = age;
//   }

//   getAge() {
//     return this.#age;
//   }
// }
// const p = new Person('Alice', 25);
// console.log(p.age)

// ## 🔁 2. **Inheritance**
// **Definition:** Inheritance allows one class to inherit the properties and methods of another class.

// ### ✅ In JavaScript:
// ```javascript
// class Animal {
//   speak() {
//     console.log('Animal speaks');
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak(); // Calls parent method
//     console.log('Dog barks');
//   }
// }

// const d = new Dog();
// d.speak();
// // Output:
// // Animal speaks
// // Dog barks
// ```

// ---

// ## 🎭 3. **Polymorphism**
// **Definition:** Polymorphism means **many forms** — the same method name can behave differently depending on the object calling it.

// ### ✅ Example:
// ```javascript
// class Shape {
//   area() {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// class Square extends Shape {
//   constructor(side) {
//     super();
//     this.side = side;
//   }

//   area() {
//     return this.side ** 2;
//   }
// }

// const shapes = [new Circle(3), new Square(4)];
// shapes.forEach(shape => console.log(shape.area()));
// ```

// ---

// ## 🧱 4. **Abstraction**
// **Definition:** Abstraction hides complex implementation details and shows only the essential features of the object.

// ### ✅ In JavaScript:
// While JavaScript doesn’t have traditional abstract classes, you can simulate it:
// ```javascript
// class Vehicle {
//   startEngine() {
//     throw new Error("startEngine() must be implemented");
//   }
// }

// class Car extends Vehicle {
//   startEngine() {
//     console.log("Car engine started");
//   }
// }

// const car = new Car();
// car.startEngine(); // Car engine started
// ```

// ---

// ## Summary Table:

// | Concept       | Description                              | Example Feature in JS          |
// |---------------|------------------------------------------|-------------------------------|
// | Encapsulation | Grouping data and methods in one unit    | Classes, `#private` fields     |
// | Inheritance   | Child class inherits from parent         | `extends`, `super()`          |
// | Polymorphism  | Same method, different behavior          | Method overriding             |
// | Abstraction   | Hiding complex logic                     | Abstract method simulation    |


//before oop we have procedural programming straight fowrd
//problems of this spaghetti code ,, when i change a function other function will break, so much interdependency btwn all these function becomes problamastic

// OOP
// property->
 //method->


//  -------------------------------------------------------------------------------------------------------------------
//OBJECT LITERALS-> is a simple way to define an object
// const circle={
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw: function(){
//         console.log("draw is a method")
//     }
// }//obj literal syntex

// --------------------------------------------------------------------------------------------------------------------------

//FACTORIES
// function circle(radius){
// return {
//      radius,
//      draw:function(){
//         console.log("draw");
//      }
// }
// }
// const one =  circle(8);
// one.draw();

// ----------------------------------------------------------------------------------------------------------------------------------------------------
//CONSTRUCTOR FUNCTION


// function fun(name,age){
//     this.name=name
//     this.age=age;
//     return this;//by default return without write this 
// }
// const obj=fun("abhik",22);
// const obj1=fun("soumya",21);//override value
// console.log(obj);


// const obj=new fun("abhik",22);
// const obj1=new fun("soumya",21);
// console.log(obj); //abhik,22


//  new:1st it will create an empty object//instance
//  set this to point to that object
//  return that obj
//here the Circle is really an object



// const Circle1=new Function('data',`
//      (this.data = data),
//     (this.draw = function () {
//       console.log("draw");
//       console.log(this);
//     });
//     `)
// const obj1=new Circle1(1);
// console.log(obj1)



// VALUE AND REFERANCE TYPES
// objects/function/array gives referance to the other variable
// numbers/string/bool....gives a copy to the other variable-->primitives

//ADDING PROPERTIES   
// circle.location={x:1}

//circle['location']={x:1}

//DELETE

//delete  circle.location,
//delete circle["location"]



//iterate in a obj 
// for(let key in obj){
//     console.log(key,obj[key]);
// }

//Object.keys(circle)-->return array



// if('key' in circle){
// }//existance of an key







//PROPERTY DESCRIPTORS:
// const obj = {
//     name:"abhik",
//     age:22,
//     sex:"male",
// };
// Object.defineProperty(obj, 'name', {
//   value: 'Alice',
//   writable: false,
//   configurable:false,
//   enumerable:false
// });

// obj.name = 'Bob';   
// delete obj.name

// for(let key in obj){
//     console.log(key);
// }
// console.log(Object.getOwnPropertyDescriptors(obj))