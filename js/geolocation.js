function geolocationSupport(){
  //Si existe la propiedad 'geolocation' en el objeto 'navigator'
  if('geolocation' in navigator){
    return true;
  }
  return false;
}

const defaultOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 1000000,
}
export function getCurrentPosition(options = defaultOptions){
  if(!geolocationSupport()) throw new Error('No hay soporte de Geolocalización en tu Navegador');

  //Promesa
  return new Promise((resolve, reject)=>{
    //Si si hay geolocalización en el navegador
    navigator.geolocation.getCurrentPosition((position)=>{
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      //resolve solo puede enviar 1 parametro
      resolve(position)
      // console.log(position);
    }, ()=>{
      //Si no se obtuvieron los datos del usuario
      reject('No se ha podido obtener tu ubicación');
    }, ()=>{
      //Objeto de configuración para revalidar la ubicación
      options
    })
  });
}

export async function getLanLon(options = defaultOptions){
  try{
    const {coords:{latitude:lat, longitude:lon}} = await getCurrentPosition(options);
    return {lat, lon, isError: false};
  }catch{
    return {isError: true, lat: null, lon:null}
  }
}