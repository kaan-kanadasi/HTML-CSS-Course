const apiKey = '27742cdbc5018245c73fc948b357e609';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

/*
fetch(url): The fetch function is used to send an HTTP request to the OpenWeather API. This is an asynchronous operation, meaning the browser 
doesn't block other tasks while waiting for the API to respond
.then(response => response.json()): When API responds, 'then' method takes the response and converts it into JSON format (a JavaScript object)
.then(data => {...}): Once the data is ready, the callback function inside this then block processes it. Specifically:
*/
function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}