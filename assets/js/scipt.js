const apiKey = "88cffcd2641b26de761be6aef5fa213f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=88cffcd2641b26de761be6aef5fa213f";
var city;
const searchInput = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#search-btn");
const currentCity = document.querySelector("#current-city");
const currentTemp = document.querySelector("#current-temp");


// Function to get the current weather
function getWeather() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {console.log(data);})
}

getWeather();
