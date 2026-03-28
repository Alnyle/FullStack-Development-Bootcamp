const fs = require('node:fs')
// Task to read the content of notes.txt

console.log("Start of Script")

// [Sync] => Block Operation:  block the execution of next lines of code until the current operation is completed
// const content = fs.readFileSync('note.txt', 'utf-8')
// console.log(`Content: \n${content}`)

// [Async] => Non-Blocking: asynchronous operation does not block the execution of next lines of code
const contentasync = fs.readFile('note.txt', 'utf-8', function(error, data) {
    if (error) console.log(error)
    else console.log('content got', data)
})
console.log("End of Script")