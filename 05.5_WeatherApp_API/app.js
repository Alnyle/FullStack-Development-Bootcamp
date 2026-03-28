let currentCity = "Tokyo";
let units = "metric";

let city = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_dateTime > p");
let weatherForecast = document.querySelector('.weather_forecast p')
let weatherTemperature = document.querySelector('.weather_temperature');
let weatherIcon = document.querySelector('.weather_icon img');
let minDegree = document.querySelector('.minDegree');
let maxDegree = document.querySelector('.maxDegree');
let realFeelElement = document.querySelector('#Realfeel_value')
let HumidityElement = document.querySelector('#Humidity_value')
let WindELement = document.querySelector('#Wind_value')
let PressureElement = document.querySelector('#Pressure_value')
let weatherInputField = document.querySelector('.weather_searchFrom')
let convertToCelsiusUnit = document.querySelector('.weather_units_celsius');
let convertToFarenheitUnit = document.querySelector('.weather_units_farenheit');

function getWeather() {
  const API_KEY = "7d23d03b1f793c21c40892722b631f4b";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=${units}`
  )
    .then((response) => response.json())
    .then((data) => showWeather(data));
}

function convertCountryName(country) {
  // Create an instance of Intl.DisplayNames
  // The first parameter specifies the language ("en" for English)
  // The second parameter specifies the type of names to be displayed ("region" in this case)
  // Use the of() method to get the region name for the given country
  // The 'country' parameter is the input representing the country name
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNames.of(country);
}

function convertTimeStamp(timeStamp, timeZone) {
  const convertTimeZone = timeZone / 3600; // convert seconds to hours

  const date = new Date(timeStamp * 1000);

  const options = {
    week: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    timeZone: `Etc/GMT${convertTimeZone >= 0 ? '-' : '+'}${Math.abs(convertTimeZone)}`,
    hour12: true,
  };

  return date.toLocaleString('en-US', options);
}

function showWeather(data) {
  city.textContent = `${data.name}, ${convertCountryName(data.sys.country)}`;

  dateTime.textContent = `${convertTimeStamp(data.dt, data.timezone)}`;

  
  weatherForecast.removeChild(weatherForecast.firstChild);
  weatherForecastPara = document.createElement('p');
  forecastValue = document.createTextNode(`${data.weather[0].main}`);
  weatherForecastPara.appendChild(forecastValue);
  weatherForecast.appendChild(weatherForecastPara);

  weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176`;
  weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);

  minDegree.innerHTML = `Min: ${data.main.temp_min.toFixed()}&#176`;
  maxDegree.innerHTML = `Max: ${data.main.temp_max.toFixed()}&#176`;


  realFeelElement.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
  HumidityElement.innerHTML = `${data.main.humidity.toFixed()}%`;
  WindELement.innerHTML = `${data.wind.speed.toFixed()} ${units === 'imperial'? 'mph' : 'm/s'}`;
  PressureElement.innerHTML = `${data.main.pressure.toFixed()} hPa`;
  
}


// Search on a city
document.querySelector('.weather_search')
.addEventListener('submit', (e) => {
    e.preventDefault();

    currentCity = weatherInputField.value;
    getWeather();
    weatherInputField.value = '';
})

// get degree in Celsius 
convertToCelsiusUnit.addEventListener('click', () => {
    if (units === 'metric') {
        units = 'imperial';
        getWeather();
    }
})

convertToFarenheitUnit.addEventListener('click', () => {
    if (units === 'imperial') {
        units = 'metric';
        getWeather();
    } 
})

document.addEventListener("load", getWeather());
