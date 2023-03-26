import { Weather } from './class.js';
import { renderWeather, cToF, kToM, renderError } from './render.js';

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const speedToggle = document.querySelector('.speed-toggle');
const degToggle = document.querySelector('.deg-toggle');

function search(location) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=83c734b9bc2640f0935202009232303&q=${location}`
  )
    .then((response) => response.json())
    .then((response) => {
      const date = response.location.localtime.split(' ');
      const splitDate = date[0].split('-');
      const displayDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0].slice(
        -2
      )}`;

      let weather = new Weather(
        response.location.name,
        response.current.temp_c,
        response.current.temp_f,
        response.current.condition.text,
        response.current.feelslike_c,
        response.current.feelslike_f,
        response.current.humidity,
        response.current.wind_kph,
        response.current.wind_mph,
        response.current.wind_dir,
        displayDate,
        date[1]
      );

      console.log(weather);
      renderWeather(weather);
    })
    .catch((err) => {
      renderError();
    });
}

// search('perth');

const weatherTest = {
  city: 'Sydney',
  condition: 'Partly Cloudy',
  currentCel: 28,
  feelsCel: 28,
  humidity: 76,
  windKm: 9,
  windDir: 'SW',
  date: '26/03/2023',
  time: '10:03',
};

// renderWeather(weatherTest);
searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  if (searchTerm === '') return;

  search(searchTerm);
  searchInput.value = '';
});

degToggle.addEventListener('click', cToF);
speedToggle.addEventListener('click', kToM);
