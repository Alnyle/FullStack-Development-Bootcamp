// Promises and chaining

// fetch("GET", "https://restcountries.com/v3.1/all")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Promise is an object representing the completion or failure of Asynchronous operation

// fetch('https://restcountries.com/v3.1/all')
//     .then(response => response.json()) // json() function is asynchronous
//     .then(data => console.log(data))

// old school
fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json()) // json() function is asynchronous
    .then(data => console.log(data))
    .catch(error => console.error(error))
// each "then" block is return another promise
// so essentially multiple asynchronous operations have been made to run in order after the other
// so in anther promise or asynchronous operation have been put in event queue
// this event queue will run after main threat finish Processing
