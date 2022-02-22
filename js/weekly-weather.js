import {getWeeklyWeather} from './services/weather.js';
import {getLanLon} from './geolocation.js';
import {formatWeekList} from './utils/format-data.js';
import {createDOM} from './utils/dom.js';

function configWeeklyWeather(weekList){
  const $container = document.querySelector('.weeklyWeather');
  weekList.forEach((item)=>{
    const $el = createDOM('<h2 style=color:white>Hola mundo!</h2>');
    $container.append($el);
  });
}

export default async function weeklyWeather(){
  const {lat, lon, isError} = await getLanLon();
  if(isError) return console.log('A ocurrido un error ubicandote');
  const {isError:weeklyWeatherError, data:weather} = await getWeeklyWeather(lat, lon);
  if(weeklyWeatherError) return console.log('oh! A ocurrido un error trayendo el pronóstico del clima');
  const weekList = formatWeekList(weather.list);
  configWeeklyWeather(weekList);
}