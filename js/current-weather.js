// import weather from '../data/current-weather.js';
import {formatDate, formatTemp} from './utils/format-data.js';
import {weatherConditionsCodes} from './constant.js';
import {getLanLon} from './geolocation.js';
import {getCurrentWeather} from './services/weather.js';

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
  $elemento.style.backgroundImage = `url("./images/${solarStatus}-${weatherType}${resolution}.jpg")`;
}
function showCurrentWeather($app, $loading){
  $app.hidden = false;
  $loading.hidden = true;
}
function configCurrentWeather(weather){
  const $app = document.querySelector("#app");
  const $loading = document.querySelector("#loading");
  //loader
  showCurrentWeather($app, $loading);
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
  const conditionCode = String(weather.weather[0].id).charAt(0);
  setBackground($app, conditionCode, solarStatus(sunriseTime, sunsetTime));
}

export default async function currentWeather(){
  //Geo //API - weather // Config
  //Recibiendo los valores por funci??n asincrona
  const {lat, lon, isError} = await getLanLon();
  if(isError) return console.log("A ocurrido un error ubicandote");
  // console.log(lat, lon);

  //Recibiendo los valores por promesa
  // getCurrentPosition()
  // .then((datos)=>{
  //   console.log("los datos", datos);
  // })
  // .catch((message)=>{
  //   console.log(message);
  // });
  const {isError: currentWeatherError, data:weather} = await getCurrentWeather(lat, lon);
  if(currentWeatherError) return console.log('oh! A ocurrido un error trayendo los datos del cliente')
  configCurrentWeather(weather);
  // console.log(weather);
}