const EventEmitter = require('events');

class UserEventEmitter extends EventEmitter {}

const userEventEmitter = new UserEventEmitter();

userEventEmitter.on('userRegistered', (user) => {
    console.log(`User registered : ${user.name}`);
    sendWelcomeEmail(user);
});

function sendWelcomeEmail(user) {
    console.log(`sending welcome email to ${user.email}`);
}

function registeredUser(name, email) {
    const user = { name, email };
    console.log('Registered user...');

    userEventEmitter.emit('userRegistered', user);
}

registeredUser('Yash', 'vadoliyayash1409@gmail.com');
registeredUser('jeet', 'hingarajiajeet@gmail.com');