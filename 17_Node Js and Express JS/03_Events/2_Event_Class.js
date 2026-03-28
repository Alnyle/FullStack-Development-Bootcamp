const EventEmitter = require('events')

class Chat extends EventEmitter {

    sendMessage(msg) {
        console.log(`Message sent: ${msg}`);
        this.emit('messageRecived', msg)
    }
}


const chat = new Chat()
chat.on("messageRecived", (msg) => {
    console.log(`New Message: ${msg}`)
})

// Trigger event
// First call sendMessage which print the message and then emit the event (messageRecived)
chat.sendMessage("Hello Node js")