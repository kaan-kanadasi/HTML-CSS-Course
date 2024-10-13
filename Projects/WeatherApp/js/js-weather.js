const apiKey = "27742cdbc5018245c73fc948b357e609";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchBox = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

const today = dayjs().format('dddd H');