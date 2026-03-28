const http = require('http')
const PORT = 8000 

// create a web server object
// createserver: function called once fro every HTTP request that made against that server
// so it's called the request handler
// createServer is EventEmitter
const server = http.createServer(function (req, res) {
    console.log('I got an incoming request')
    res.writeHead(200)
    res.end('Thanks for visiting my web server')
})

server.listen(PORT, function() {
    console.log(`Http server is up and running on port  ${PORT}`)
})