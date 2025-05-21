// function fun(){
//     console.log(this) 
//     // value will be undefined in strict mode 
//     // value will be global node js obj in non strict mode with details
// }
// fun()



// console.log(this)//{} global node js obj but in browser its show the window obj 



//this in strict mode (this substitution)
//if the value of this keyword is undefined or null then its replaced with global object
//depends how its called
//likes in strict mode when i called using window.fun() its give window object instead of undefined
 

// const obj={
//   a: 10,
//   x:function(){
//      console.log(a);//undefined;->this.a
//   }
// }
// obj.x();



// const obj={
//   a: 10,
//   x:function(){
//      console.log(this);
//   }
// }
// obj.x();
//inside a method this keyword gives the value that  object where this method is created



//CALL

// function setUser(username){
//     this.hi=username;
//     console.log("insdie setuser",this);
// }
// function allDetails(username,email,age){
//    setUser.call(this,username);
//    //basically this **this refers to setUser function's *this ->{hi:"abhik"}
//    //**this->*this->{hi:"abhik"}
//    this.email=email;
//    this.age=age;
// }

// const obj= new allDetails("abhik","abhik@innova",22);
// console.log(obj.hi)



//BIND

// function fun(username){
//     this.username=username;
//     this.greet=function(){
//         console.log(this.username)
//     }
    
// }


// const obj=new fun("hey")
// const f=obj.greet.bind(obj)
// f()
//alternative ()=>{}
    // const f=obj.greet;
    // f()/exactly same output when we use arrow function in greet


class myClass{
    constructor(){
        this.value=42;
        this.hi=this.interval
        console.log(this)
    }

 interval(){
    this.value++;
    // console.log(this);
 }

}
const obj=new myClass();
setTimeout(obj.hi.bind(obj),1000)
const a=obj.hi();









// class myClass{

//     constructor(){
//         this.value=42;
//         setInterval(this.interval,1000)
//     }


//  interval(){
//     this.value++;
//     console.log(this.value);
//  }

// }

// const obj=new myClass();
// obj.interval();