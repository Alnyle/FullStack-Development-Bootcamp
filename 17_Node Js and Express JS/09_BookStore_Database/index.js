const express = require('express')
const PORT = 8000
const app = express()

app.get('/', function(req, res) {
    res.end('home page')
})

app.get('/contact', function(req, res) {
    res.end('You can contact me at my email');
})

app.get('/tweets', function(req, res) {
    res.end('Here are your tweets');
})


app.post('/tweets', function(req, res) {
    res.status(201).end('Tweet Created Successfully');
})

app.listen(PORT, () => console.log(`Server is running on PART ${PORT}`))