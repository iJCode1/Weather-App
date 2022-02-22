import {getWeeklyWeather} from './services/weather.js';
import {getLanLon} from './geolocation.js';
import {formatWeekList} from './utils/format-data.js';
import {createDOM} from './utils/dom.js';

function tabPanelTemplate(id){
  return `
    <div class="tabPanel" tabindex="0" aria-labelledby="tab-${id}">
      <div class="dayWeather" id="dayWeather-${id}">
        <ul style="color: white" class="dayWeather-list" id="dayWeather-list-${id}">
        Tab Panel ${id}
        </ul>
      </div>
    </div>
  `;
}
function createTabPanel(id){
  const $panel = createDOM(tabPanelTemplate(id));
  if(id > 0){
    $panel.hidden = true;
  }
  return $panel;
}
function configWeeklyWeather(weekList){
  const $container = document.querySelector('.weeklyWeather');
  weekList.forEach((day, index)=>{
    const $panel = createTabPanel(index);
    $container.append($panel);
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