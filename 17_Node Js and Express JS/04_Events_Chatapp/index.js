 const ChatRoom = require('./chatRoom.js')

 const chat = new ChatRoom()

 chat.on('join', (user) => {
    console.log(`${user} has joined the chat`)
 });

chat.on('sendMessage', (user, message) => {
    console.log(`${user}: ${message}`)
})

chat.on('leave', (user) => {
    console.log(`${user} has left the chat`)
})

// simulating the chat
chat.join('Alice')
chat.join('Bob')
chat.join('Kate')

chat.senMessage('Alice', 'Hey Alice, Hello to everyone')
chat.senMessage('Bob', 'Hey Bob, Hello to everyone')

chat.leave('Alice')
chat.senMessage('Alice', "this message won't be sent")
chat.leave('Bon')