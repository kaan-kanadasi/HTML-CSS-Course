const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = "27742cdbc5018245c73fc948b357e609";
    const city = document.querySelector('.search-box input').value;
    if (city.trim() === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if(json.cod === '404') {
                container.computedStyleMap.height = '400px';
                weatherBox.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn')
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
    });
    
});