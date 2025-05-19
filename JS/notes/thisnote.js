// function fun(){

//     console.log(this) 
//     // value will be undefined in strict mode 
//     // value will be window obj in non strict mode
// }
// fun()

//this in strict mode (this substitution)
//if the value of this keyword is undefined or null then its replaced with global object
//depends how its called
//likes in strict mode when i called using window.fun() its give window object instead of undefined
 

// const obj={
//   a: 10,
//   x:function(){
//      console.log(this);
//   }
// }
// obj.x();
//inside a method this keyword gives the value that  object where this method is created
