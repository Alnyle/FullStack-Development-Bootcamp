// Modules
/*
A Module can be considered as a block of code that provide a simple or
complex functionality that can communicate with external application.
Modules can be organized in a single file or a collection 
of multiple files/folders
*/

// 1. Built In Modules
// 2. 3rd Party (Externel Moduels) - npm install
// 3. Custom (My own) Modules

// File System (fs): help handle files in your system
const fs = require('fs');



// read a file
// const content = fs.readFileSync('note.txt', 'utf-8')

// fs.writeFileSync('copy.txt', 'I want to write this text using code', 'utf-8')
// fs.writeFileSync('copy.txt', content, 'utf-8')
// fs.appendFileSync('copy.txt', '\nThis a appended text', 'utf-8')

// make directories
// recursive: to create another folder inside games recursively
// fs.mkdirSync('games/adventures/batman', { recursive: true })

// remove a directory and it's content 
// fs.rmSync('games', { recursive: true })
// console.log(content)


// delete a file
fs.unlinkSync('copy.txt')

// console.log(content)

