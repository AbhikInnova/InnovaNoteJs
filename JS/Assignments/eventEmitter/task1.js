const EventEmitter=require('events');
const emitter=new EventEmitter();

emitter.on('greet',(data)=>console.log(data));

emitter.emit('greet','event called');

emitter.removeListener('greet',(data)=>console.log(data))

emitter.emit('greet','event called');
