var EventEmitter = require('events');
LoopProcessor = (num) => {
    var emitter = new EventEmitter();

    setTimeout(()=> {

        for (var i = 1; i <= num; i++) {
            emitter.emit('BeforeProcess', i);
            console.log('Processing number:' + i);
            emitter.emit('AfterProcess', i);
        }
    }, 2000)

    return emitter;
}

var lp = LoopProcessor(10);
lp.on('BeforeProcess', (i) => {
    console.log('About to start the process for ' + i);
});

lp.on('AfterProcess', (i) => {
    console.log('Completed processing ' + i);
});