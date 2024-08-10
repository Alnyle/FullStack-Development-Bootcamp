import {  createServer } from 'http';
const PORT = process.env.PORT


// middleware: are function or module have access to request and response object and next middleware function
//             they help in breaking your code into smaller function

// middleware can!:
//  1- Change request and response objects            
//  2- Terminate the request-response cycle
//  3- Call the next middleware function
//  4- add custom logic to the request/response cycle such validation, authentication, authorization

const users = [
    { id: 1, name: 'John Doe'},
    { id: 2, name: 'John Doe'},
    { id: 3, name: 'Jim kerry'},
];



// Logger middleware
const logger = (req, res, next) => {
    next();
}


// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}


// Route handler for GET/api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET/api/users/:id
const getUserByHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));   

    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }));
    }
    
    res.end();
}


// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end(); 
}


// Route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // listen for data
    req.on('data', (chunk) => {
        body += chunk.toString()
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end()
    }) 
}

const server = createServer((req, res) => {

    logger(req, res, () => {
         jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res)
            }
            else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserByHandler(req, res);
            } else if (req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
            }
            else {
                notFoundHandler(req, res)
            }
            

         })
    
    })


});

server.listen(PORT, () => {

})