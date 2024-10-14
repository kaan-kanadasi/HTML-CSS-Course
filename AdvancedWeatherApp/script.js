const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOuput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.querySelector("#locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const apiKey = '27742cdbc5018245c73fc948b357e609';

let cityInput = "New Delhi";

form.addEventListener("submit", (e) => {
    if (search.value.length == 0) {
        alert("Please type in a city name")
    } else {
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0";
    }
    e.preventDefault();
})

function dayofTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
}

function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            temp.innerHTML = data.main.temp + "&#176;";  // Access temp directly from main
            conditionOutput.innerHTML = data.weather[0].description;  // Access description from weather array
            const date = new Date(data.dt * 1000); // Convert timestamp to Date object
            const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
            dateOuput.innerHTML = date.toLocaleDateString('en-US', options);
            timeOutput.innerHTML = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            nameOutput.innerHTML = data.name;  // Directly access city name

            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;  // Use icon URL

            cloudOutput.innerHTML = data.clouds.all + "%";  // Cloudiness percentage
            humidityOutput.innerHTML = data.main.humidity + "%";  // Humidity
            windOutput.innerHTML = data.wind.speed + " km/h";  // Wind speed

            let timeofDay = data.dt > (new Date().setHours(6, 0, 0)) && data.dt < (new Date().setHours(18, 0, 0)) ? "day" : "night";

            // Background changes based on weather conditions
            const code = data.weather[0].id;
            if (code == 800) {
                app.style.backgroundImage = `url(./images/${timeofDay}/clear.jpg)`;
                btn.style.background = timeofDay === "night" ? "#181e27" : "#e5ba92";
            } else if (code >= 801 && code <= 804) {
                app.style.backgroundImage = `url(./images/${timeofDay}/cloudy.jpg)`;
                btn.style.background = timeofDay === "night" ? "#181e27" : "#fa6d1d";
            } else if (code >= 500 && code < 600) {
                app.style.backgroundImage = `url(./images/${timeofDay}/rainy.jpg)`;
                btn.style.background = timeofDay === "night" ? "#325c80" : "#647d75";
            } else {
                app.style.backgroundImage = `url(./images/${timeofDay}/snowy.jpg)`;
                btn.style.background = timeofDay === "night" ? "#1b1b1b" : "#4d72aa";
            }
            app.style.opacity = "1";
        })
        .catch(() => {
            alert("City not found, please try again");
            app.style.opacity = "1";
        });
}

fetchWeatherData();
app.style.opacity = "1";