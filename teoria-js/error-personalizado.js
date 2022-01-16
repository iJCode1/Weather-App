//Erorres personalizados
/*
  Cuando usamos la estructura try-catch, se pueden personalizar errores.
  Esto con la expresión throw y llamando al objeto global Error.
*/

//Función que devolvera un error
const geolocation = ()=>{
  const geolocationSupport = true;
  if(geolocationSupport){
    console.log("Se tiene acceso a la geolocalización"); //Se tiene acceso a la geolocalización
    return {
      lat: 124514141,
      long: 17362726
    };
  }else{
    throw new Error("No se puede acceder a la geolocalización");
  }
}

//Llamando a la función con una expresión de try-cath
try{
  const {lat, long} = geolocation();
  console.log(`La latitud es: ${lat}`); //La latitud es: 124514141
  console.log(`La longitud es: ${long}`); //La longitud es: 17362726
}catch(error){  
  console.log(error); //[Error: No se puede acceder a la geolocalización]
  console.log(error.message); //No se puede acceder a la geolocalización
}