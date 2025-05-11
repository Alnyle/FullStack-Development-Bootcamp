const listElement = document.querySelector("ul");

// if you use this approach you fall in callback hell "callback function inside another callback function"
// XMLHttpRequest()

function getCountries(callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://restcountries.com/v3.1/all');
 
  // handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
      const countries = JSON.parse(xhr.response);
      console.log(countries);
      countries.forEach(country => callback(country.name.common))
    }
  };

  xhr.send(); // send the request
}

function createListItem(countryName) {
  console.log(countryName);
  const item = document.createElement('li')
  item.innerText = countryName;
  listElement.append(item);
}

getCountries(createListItem);
