import weather from '../data/current-weather.js';
import {formatDate, formatTemp} from './utils/format-data.js';
import {weatherConditionsCodes} from './constant.js';

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
function solarStatus(sunriseTime, sunsetTime){
  const currentHours = new Date().getHours();
  const sunriseHours = sunriseTime.getHours();
  const sunsetHours = sunsetTime.getHours();
  if(currentHours > sunsetHours || currentHours < sunriseHours){
    // console.log("night");
    return "night";
  }
  // console.log("morning");
  return "morning";
}
function setBackground($elemento, conditionCode, solarStatus){
  const weatherType = weatherConditionsCodes[conditionCode];
  const size = window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches;
  const resolution = size ? "@2x" : "";
  $elemento.style.backgroundImage = `url("../images/${solarStatus}-${weatherType}${resolution}.jpg")`;
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
    //Convirtiendo horas de segundos a milisegundos '*1000'
  const sunriseTime = new Date(weather.sys.sunrise * 1000);
  const sunsetTime = new Date(weather.sys.sunset * 1000);
  const $app = document.querySelector("#app");
  const conditionCode = String(weather.weather[0].id).charAt(0);
  setBackground($app, conditionCode, solarStatus(sunriseTime, sunsetTime));
}

export default function currentWeather(){
  //Geo //API - weather // Config
  configCurrentWeather(weather);
  console.log(weather);
}