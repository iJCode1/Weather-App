function geolocationSupport(){
  //Si existe la propiedad 'geolocation' en el objeto 'navigator'
  if('geolocation' in navigator){
    return true;
  }
  return false;
}
export function getCurrentPosition(){
  if(!geolocationSupport()) throw new Error('No hay soporte de Geolocalización en tu Navegador');

  //Si si hay geolocalización en el navegador
  navigator.geolocation.getCurrentPosition((position)=>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);
  })
}