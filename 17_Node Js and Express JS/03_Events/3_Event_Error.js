const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

// The event with it's listener(callback function)
eventEmitter.on('error', (err) => {
    console.error(`Error Occurred: ${err.message}`)
})

// Trigger(call) the event
eventEmitter.emit('error', new Error('Something went wrong'))

