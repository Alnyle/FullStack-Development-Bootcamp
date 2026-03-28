// DELETE HTTP Request Method
// Used to delete existing data.
// you can delete a certain resource using the DELETE method by
// pointing to the resource correctly

// Use cases
// App: DELETE a user from a database.
// Commerce Database: DELETE a product from our inventory.

fetch("https://my-burger-api.herokuapp.com/burgers/62", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));
