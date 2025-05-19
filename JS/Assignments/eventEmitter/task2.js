const EventEmitter=require("events");
const emitter=new EventEmitter();

class event extends EventEmitter{
    calledEvent(){
        this.emit('greet');
    }
}

let obj=new event();
obj.on('greet',()=>{
console.log("Listener called");
})
obj.calledEvent();
