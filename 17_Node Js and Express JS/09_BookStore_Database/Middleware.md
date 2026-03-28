# Middleware in Node.js

Middleware functions are functions that have access to the **request object** (`req`), the **response object** (`res`), and the **next middleware function** in the application's request-response cycle. They can execute code, modify request/response objects, end the request-response cycle, or call the next middleware in the stack.

## How Middleware Works

Think of middleware as a series of layers that a request passes through before reaching its final destination (route handler). Each layer can:
- Execute any code
- Make changes to the request and response objects
- End the request-response cycle
- Call the next middleware function using `next()`

## Basic Example

```javascript
const express = require('express');
const app = express();

// Simple middleware function
const myLogger = function(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

// Use the middleware
app.use(myLogger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
```

## Types of Middleware

### 1. Application-Level Middleware
Bound to the app object using `app.use()` or `app.METHOD()`.

```javascript
// Executes for every request
app.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});

// Executes only for /user routes
app.use('/user', (req, res, next) => {
  console.log('User route accessed');
  next();
});
```

### 2. Router-Level Middleware
Works the same way as application-level middleware but is bound to an instance of `express.Router()`.

```javascript
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/user/:id', (req, res) => {
  res.send(`User ${req.params.id}`);
});

app.use('/', router);
```

### 3. Built-in Middleware
Express has several built-in middleware functions:

```javascript
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));
```

### 4. Third-Party Middleware
Popular middleware from npm:

```javascript
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// Enable CORS
app.use(cors());

// HTTP request logger
app.use(morgan('dev'));

// Security headers
app.use(helmet());
```

### 5. Error-Handling Middleware
Always takes four arguments:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

## Practical Examples

### Authentication Middleware
```javascript
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  // Verify token (simplified)
  if (token === 'valid-token') {
    req.user = { id: 1, name: 'John' };
    next();
  } else {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// Protected route
app.get('/dashboard', authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}` });
});
```

### Request Validation Middleware
```javascript
const validateUser = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ 
      error: 'Email and password are required' 
    });
  }
  
  if (password.length < 6) {
    return res.status(400).json({ 
      error: 'Password must be at least 6 characters' 
    });
  }
  
  next();
};

app.post('/register', validateUser, (req, res) => {
  res.json({ message: 'User registered successfully' });
});
```

### Multiple Middleware Chain
```javascript
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  };
};

app.delete(
  '/admin/user/:id', 
  authenticate, 
  checkRole('admin'), 
  (req, res) => {
    res.json({ message: 'User deleted' });
  }
);
```

## Key Points to Remember

- Always call `next()` unless you're ending the request-response cycle
- Middleware order matters - they execute in the order they're defined
- Error-handling middleware should be defined last
- You can have multiple middleware functions for a single route
- If you don't call `next()`, the request will hang