
// Get HTTP Request method
fetch('https://my-burger-api.herokuapp.com/burgers/0')
   .then(response => response.json())
   .then(data => console.log(data))