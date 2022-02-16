function geolocationSupport(){
  //Si existe la propiedad 'geolocation' en el objeto 'navigator'
  if('geolocation' in navigator){
    return true;
  }
  return false;
}
export function getCurrentPosition(){
  if(!geolocationSupport()) throw new Error('No hay soporte de Geolocalización en tu Navegador');

  //Promesa
  return new Promise((resolve, reject)=>{
    //Si si hay geolocalización en el navegador
    navigator.geolocation.getCurrentPosition((position)=>{
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      //resolve solo puede enviar 1 parametro
      resolve({
        lat,
        lon,
      })
      // console.log(position);
    }, ()=>{
      //Si no se obtuvieron los datos del usuario
      reject('No se ha podido obtener tu ubicación');
    }, ()=>{
      //Objeto de configuración para revalidar la ubicación
    })
  });
  
}