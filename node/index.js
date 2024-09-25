const eventEmitter = require('events');

var eventemitter = new eventEmitter();

eventemitter.on('myEvent', (msg) => {
    console.log(msg);
});

eventemitter.emit('myEvent', "First Event")