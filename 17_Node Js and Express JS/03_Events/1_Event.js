const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} and welcome to events in node js`)
})

// you can have more than one event listener listing to the same event with same name
eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} and welcome to my website`)
})

// event only run one time if you run it again it wil not run not it will not cause any error
eventEmitter.once('pushnotify', () => {
    console.log("ThiS event will run only once")
})


// // Emit the event
eventEmitter.emit('greet', 'Ali') 
// eventEmitter.emit('pushnotify')
// eventEmitter.emit('pushnotify')


const myListener = () => console.log("I am a test Listener")
// As soon as the event 'test' is emitted, the listener function is called
eventEmitter.on("test", myListener)
eventEmitter.emit('test')

// you can remove an event listener
eventEmitter.removeListener('test', myListener)
eventEmitter.emit('test')
