/*
Buffer is a temporary memory area used store binary data (bytes) in  node.js

or 

A Buffer in Node.js is an object that stores
raw binary data and allows efficient handling of files, streams, and network data.

Why Buffer is needed (real reason)

When Node.js works with:
    - Files
    - Network packets
    - Streams
    - Images / audio / video
    - The data is binary, not text.
👉 Buffers let Node.js read, write, and move that binary data efficiently.

*/

// | String              | Buffer              |
// | ------------------- | ------------------- |
// | Text (UTF-16)       | Raw bytes           |
// | Immutable           | Mutable             |
// | Higher memory       | Lower memory        |
// | Not good for binary | Designed for binary |

const { Buffer } = require('buffer');
const { buffer } = require('stream/consumers');

// const buf = Buffer.alloc(4) // allocate 4 bytes
// console.log(buf[0])

// write to buffer at initialization time
const bu = Buffer.from('Hello Ahmed')
// console.log(bu) // binary data (hex )
// console.log(bu.toString()) // row text utf-16

/*
Buffer.alloc: initialize the memory first before you use it
allocUnsafe: does not initialize the memory
             (does not empty the memory before allocate part of the memory for your buffer)
*/
// const bufTwo = Buffer.allocUnsafe(50)
// console.log(bufTwo)

// How to write to buffer
// const bufWrite = Buffer.alloc(10) // allocate 10 bytes
// bufWrite.write('Hello')
// console.log(bufWrite.toString())

const bufread = Buffer.from('Hello from buffer')
console.log(bufread.toString())
console.log(bufread.toString('utf8', 0, 4))