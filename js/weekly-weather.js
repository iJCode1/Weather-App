import {getWeeklyWeather} from './services/weather.js';
import {getLanLon} from './geolocation.js';
import {formatWeekList} from './utils/format-data.js';

function configWeeklyWeather(){

}

export default async function weeklyWeather(){
  const {lat, lon, isError} = await getLanLon();
  if(isError) return console.log('A ocurrido un error ubicandote');
  const {isError:weeklyWeatherError, data:weather} = await getWeeklyWeather(lat, lon);
  if(weeklyWeatherError) return console.log('oh! A ocurrido un error trayendo el pronóstico del clima');
  const weekList = formatWeekList(weather.list);
  debugger
  configWeeklyWeather(weather);
}