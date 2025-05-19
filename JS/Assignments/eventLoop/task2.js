const EventEmitter=require("events");
const emitter=new EventEmitter();
// function compare(){
//     process.nextTick(()=>{
//         emitter.emit('greet','event called');//send in queue
//     })
//     emitter.on('greet',(data)=>console.log(data));
// }
// compare();

function compare(){

    setImmediate(()=>{
        emitter.emit('greet','event called');
    })

    process.nextTick(()=>{
        emitter.emit('greet','next called');
    })
    
    setTimeout(()=>emitter.emit('greet','time called'),9)

    emitter.on('greet',(data)=>console.log(data));
}
compare();

// process.nextTick() runs before any I/O or timers, ensuring the callback runs as soon as the current operation completes.

// setImmediate() runs after the I/O events but before timers, so it's often used when you want the callback to execute later in the event loop.