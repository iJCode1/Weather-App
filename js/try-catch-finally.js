// Try-catch-finally
/*
  Try-catch se usa cuando hay alguna parte del código que podria fallar
  como un consumo de servicios de terceros, algún recurso externo o algun
  dato en la BD que podria no estar en ese preciso momento.  
*/
//Estructura
/*
  try{
    Intenta ejecutar
  }catch(error){
    Se ejecuta si hay un error
  }finally{
    Siempre se ejecuta
  }
*/

const obj = {
  name: "Joel", 
  age: 22,
  course: {name: "Javascript", classes: "52"},
}

// Declarando un try-catch
try{
  console.log(obj.name); //Joel
  console.log(obj.age); //22
  console.log(obj.course); //{ name: 'Javascript', classes: '52' }

  //Provocando error debido a que la propiedad .modules.list no existe
  // const list = obj.course.modules.list;

  //Se puede usar el operador de 'cadena opcional' '?.'
  //Cuando puede que un valor 'propiedad' de un objeto no exista
  //Con esto devolvemos un undefined y no un error
  const list = obj.course.modules?.list;
  console.log(list); //undefined

  //Podemos asignarle un valor por defecto para no dejarlo indefinido
  //El operador ?? asigna un valor si es que colisionamos con un null o indefinido
  const list2 = obj.course.modules?.list ?? [];
  list2.forEach((elemento) => console.log(elemento));
  console.log(list2); //[]
  //Asi es como list2 ya es una lista vacía
}catch{
  console.log('Se ha producido un error');
}finally{
  console.log("Siempre se ejecuta, puede o no ir..."); //Siempre se ejecuta, puede o no ir...
}