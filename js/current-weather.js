import weather from '../data/current-weather.js';
import {formatDate} from './utils/format-data.js';
import {formatTemp} from './utils/format-data.js';

function setCurrentCity($elemento, city){
  $elemento.textContent = city;
}
const config = {
  day: "numeric",
  weekday: "long",
  month: "long",
}
function setCurrentDate($elemento){
  const date = new Date();
  const formattedDate = formatDate(date);
  $elemento.textContent = formattedDate;
}
function setCurrentTemp($elemento, temp){
  const formattedTemp = formatTemp(temp);
  $elemento.textContent = formattedTemp;
}
function configCurrentWeather(weather){
  //loader
  //date
  const $currentWeatherDate = document.querySelector("#current-weather-date");
  setCurrentDate($currentWeatherDate);
  //city
  const city = weather.name;
  const $currentWeatherCity = document.querySelector("#current-weather-city");
  setCurrentCity($currentWeatherCity, city);
  //temp
  const $currentWeatherTemp = document.querySelector("#current-weather-temp");
  const temp = weather.main.temp;
  setCurrentTemp($currentWeatherTemp, temp);
  //background
}

export default function currentWeather(){
  //Geo //API - weather // Config
  configCurrentWeather(weather);
  console.log(weather);
}