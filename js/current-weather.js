import weather from '../data/current-weather.js';

function setCurrentCity($elemento, city){
  $elemento.textContent = city;
}

function configCurrentWeather(weather){
  //loader
  //date
  //city
  const city = weather.name;
  const $currentWeatherCity = document.querySelector("#current-weather-city");
  setCurrentCity($currentWeatherCity, city);
  //temp
  //background
}

export default function currentWeather(){
  //Geo //API - weather // Config
  configCurrentWeather(weather);
  console.log(weather);
}