


// as developer we use as
// 1 - when user use post a new comment or like content 'click like button'
// 2- post an new blog entry to a blogging site
// 3- User sign-up : POST new user data to a database

const data = {
   name: 'Omar Mushroom Swiss Burger'
}

// as default fetch use GET method so because of that we have to specify method
fetch('https://my-burger-api.herokuapp.com/burgers', {
   method: 'POST',
   // headers: header contain additional information about HTTP Request
   headers: {
      'Content-Type': 'application/json', // content type of send file or data as json
   },
   body: JSON.stringify(data), // parsing to json String format when when data server send it as json format 
})
   .then(response => response.json())
   .then(data => console.log(data))