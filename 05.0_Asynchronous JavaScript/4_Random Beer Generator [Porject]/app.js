const beerBtn = document.querySelector("#beer-button");
const randomBeerTitle = document.querySelector("#random-beer");
const randomBeerDesc = document.querySelector("#description");
const beerImage = document.querySelector("#beer-image");

function getData() {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => response.json())
    .then((data) => {
      const name = data[0].name;
      const description = data[0].description;
      const volumeUnit = data[0].volume.unit;
      const volumeValue = data[0].volume.value;
    
      randomBeerTitle.textContent = name + " | " + volumeValue + volumeUnit;
      randomBeerDesc.textContent = description;
      beerImage.setAttribute('src', data[0].image_url);
    });
}

getData();
beerBtn.addEventListener("click", getData);
