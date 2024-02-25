


// PUT HTTP Request Method
// Used to update existing data by replace it.
// You can update certain resource using PUT method.

// Use cases
// 1 - App: PUT a new password in to replace the old one
// 2 - user profile: PUT new data on your already created user profile
// 3 - Social media app: update an old comment


// dealer data as object
const data = {
   name: 'Ali Spicy vegan burger with kiwi',
   restaurant: 'Header',
   ingredients: ['beef', 'cheese', 'mushrooms']
}

// as default fetch use GET method so because of that we have to specify method
fetch('https://my-burger-api.herokuapp.com/burgers/61', {
   method: 'PUT',
   // headers: header contain additional information about HTTP Request
   headers: {
      'Content-Type': 'application/json', // content type of send file or data as json
   },
   body: JSON.stringify(data), // parsing to json String format when when data server send it as json format 
})
   // response tell use if request was successful or not + additional information
   .then(response => response.json())
   .then(data => console.log(data))
   .catch((error) => console.error(error)) // catch error => fetch api handle error by it's self 