const PORT = 8000;
const PORT2 = 3000

const express = require("express"); // to use package we use "require" keyword
// after that we have to store it some where

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from backend");
});

app.get("/users", (req, res) => {
  res.send("all user data");
});

app.get("/users/:userId", (req, res) => {
  console.log("user " + req.params.userId);
  res.send("user " + req.params.userId);
});

app.listen(PORT, () => console.log("Listen out to PORT " + PORT));
app.listen(PORT2, () => console.log('this another ' + PORT2))