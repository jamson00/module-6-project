const apiKey = "915802b5ef100d63ebc53e329d415fdd";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&units=imperial&appid=915802b5ef100d63ebc53e329d415fdd";
var city;
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const currentTemp = document.querySelector("#current-temp");

function getCity(){
    const newName = document.querySelector("#search-input");
    const currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = newName.value;
}

// Function to get the current weather
function getWeather(city) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => console.log(data));
}

getWeather();

searchBtn.addEventListener('click', () => {
    const city = searchInput.value;
    getWeather(city);
  });