## 🧩 What is middleware in Node.js?

In **Express (Node.js)**, *middleware* is just a **function** that runs **between**:

> The request coming from the client ➜ and ➜ the response sent back by the server

Middleware can:

* ✅ Read the request (`req`)
* ✅ Modify the request or response (`req`, `res`)
* ✅ End the request-response cycle
* ✅ Or pass control to the **next** middleware using `next()`

Think of it like a **pipeline** 🚰:
Request ➜ Middleware 1 ➜ Middleware 2 ➜ Route Handler ➜ Response

---

## 🧠 Basic middleware example

```js
const express = require("express");
const app = express();

// A simple middleware
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next(); // Pass control to the next middleware or route
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### What happens here?

1. Client sends request to `/`
2. Middleware runs → logs the request
3. `next()` is called
4. The route handler runs and sends `"Hello World!"`

---

## 🔐 Example: Authentication middleware

```js
function checkAuth(req, res, next) {
  const isLoggedIn = false; // imagine this comes from a token or session

  if (isLoggedIn) {
    next(); // user is allowed
  } else {
    res.status(401).send("Not authorized");
  }
}

app.get("/dashboard", checkAuth, (req, res) => {
  res.send("Welcome to your dashboard!");
});
```

### Here:

* `checkAuth` runs **before** the route
* If user is not logged in → request stops ❌
* If logged in → `next()` → route runs ✅

---

## 🛠️ Built-in middleware example (body parser)

```js
app.use(express.json()); // Parses JSON body

app.post("/users", (req, res) => {
  console.log(req.body); // Now you can read JSON data
  res.send("User created");
});
```

This middleware:

* Reads JSON from request body
* Converts it into `req.body`

---

## 📦 Third-party middleware example (morgan logger)

```js
const morgan = require("morgan");

app.use(morgan("dev"));
```

This automatically logs every request to the console.

---

## 🧩 Types of middleware (quickly)

1. **Application-level** → `app.use(...)`
2. **Route-level** → `app.get("/path", middleware, handler)`
3. **Built-in** → `express.json()`, `express.static()`
4. **Third-party** → `morgan`, `cors`, etc.
5. **Error-handling** → `(err, req, res, next) => { ... }`

---

## 🧠 Simple mental model

Middleware is like **security + processing checkpoints** before your route answers:

* Check login ✅
* Parse JSON ✅
* Log request ✅
* Validate data ✅
* Then finally send response 🎯

---

If you want, I can also explain:

* `next()` in more detail
* Error-handling middleware
* How middleware order affects your app
* Or show a real mini project structure using middleware 😄
