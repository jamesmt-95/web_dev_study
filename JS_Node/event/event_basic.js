//1st Method
const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

//Register a Listener
emitter.on('connection', (arg) => {
    console.log(`Listener Called ${arg.id} ${arg.name}`); //template string
});

//Raise an event
emitter.emit('connection', {
    id: 1,
    name: 'James'
});


//2nd Method
//using predefined function as argument to emitter.on method
const handler = (arg) => console.log(` Listener Called ${arg.event_name}`);

//Registering listener
emitter.on('handler', handler);  //calling method to print on console

//Raise an event
emitter.emit('handler',{event_name:'call'});