const event = require('events');

class Dog extends event.EventEmitter {}
class Cat extends event.EventEmitter {}

const dog = new Dog();
const cat = new Cat();

dog.on('bark', () => {
    console.log('Woof! Woof!');
});

cat.on('bark', () => {
    console.log('Meow! Meow!');
});

dog.emit('bark');
cat.emit('bark');