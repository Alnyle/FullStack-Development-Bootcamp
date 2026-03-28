import { EventEmitter } from 'events';


const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello World ' + name);
}

function goodByeHandle(name) {
    console.log('Goodbye World ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByeHandle);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');


// Error Handling
myEmitter.on('error', (err) => {
    console.log(`An Error Occurred: ${err}`);
})

// Error handling 
myEmitter.emit('error', new Error('Something went Wrong'))