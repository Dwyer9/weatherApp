const cityName = document.querySelector('.city');
const weatherDisplay = document.querySelector('.weather-display');
const currentCelDisplay = document.querySelector('.current-temp-cel');
const currentFahDisplay = document.querySelector('.current-temp-fah');
const feelsCelDisplay = document.querySelector('.feels-like-cel');
const feelsFahDisplay = document.querySelector('.feels-like-fah');
const humidityDisplay = document.querySelector('.humidity');
const windKmDisplay = document.querySelector('.wind-km');
const windMPHDisplay = document.querySelector('.wind-mph');
const cityDate = document.querySelector('.location-date');
const cityTime = document.querySelector('.location-time');
const conditionDisplay = document.querySelector('.condition-display');
const degDisplay = document.querySelector('.deg-display');
const speedDisplay = document.querySelector('.speed-display');
const speedToggle = document.querySelector('.speed-toggle');
const degToggle = document.querySelector('.deg-toggle');
const toggles = document.querySelector('.toggles');
const errorDisplay = document.querySelector('.error-display');

function renderWeather(obj) {
  weatherDisplay.classList.remove('hidden');
  toggles.classList.remove('hidden');
  errorDisplay.classList.add('hidden');
  const deg = '&#176';
  cityName.innerHTML = obj.city;
  currentCelDisplay.innerHTML = `${obj.currentCel}${deg}`;
  currentFahDisplay.innerHTML = `${obj.currentFah}${deg}`;
  conditionDisplay.innerHTML = obj.condition;
  feelsCelDisplay.innerHTML = `${obj.feelsCel}${deg}`;
  feelsFahDisplay.innerHTML = `${obj.feelsFah}${deg}`;
  humidityDisplay.innerHTML = `${obj.humidity}%`;
  windKmDisplay.innerHTML = `${obj.windKm}km/h ${obj.windDir}`;
  windMPHDisplay.innerHTML = `${obj.windM}mph ${obj.windDir}`;
  cityDate.innerHTML = obj.date;
  cityTime.innerHTML = obj.time;
}

function cToF() {
  if (degToggle.checked) {
    currentCelDisplay.classList.add('hidden');
    feelsCelDisplay.classList.add('hidden');
    currentFahDisplay.classList.remove('hidden');
    feelsFahDisplay.classList.remove('hidden');
    degDisplay.innerHTML = 'F';
  } else {
    currentCelDisplay.classList.remove('hidden');
    feelsCelDisplay.classList.remove('hidden');
    currentFahDisplay.classList.add('hidden');
    feelsFahDisplay.classList.add('hidden');
    degDisplay.innerHTML = 'C';
  }
}

function kToM() {
  if (speedToggle.checked) {
    windKmDisplay.classList.add('hidden');
    windMPHDisplay.classList.remove('hidden');
    speedDisplay.innerHTML = 'mph';
  } else {
    windKmDisplay.classList.remove('hidden');
    windMPHDisplay.classList.add('hidden');
    speedDisplay.innerHTML = 'km/h';
  }
}

function renderError() {
  weatherDisplay.classList.add('hidden');
  toggles.classList.add('hidden');
  errorDisplay.classList.remove('hidden');
}

export { renderWeather, kToM, cToF, renderError };
