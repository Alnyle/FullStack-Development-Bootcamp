

// XMLHttpRequest() - the old way to do it


// fetch api approach - the new way
fetch()
    .then(response => response.json())
    .then(data => console.log(data))


// XMLHttpRequest()

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://restcountries.com/v3.1/all');


// handle the response
xhr.onload = function() {
  if(xhr.status === 200) {
    console.log(xhr.response);
  }
}

xhr.send() // send the request

