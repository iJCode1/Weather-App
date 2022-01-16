//En Javascript podemos tener los diferenets tipos de función:

// ---------- Declaración de Función: ----------

//La función puede tener parametros ('Recibira argumentos al ser invicada');
//Estos parametros se podran usar en el bloque de la función
//Las funciones deben retornar algo
function suma (n1, n2){
  let sum = n1+n2;
  return sum;
}

//Invicando la función declarada
console.log(suma(2, 7)); //9
console.log(suma(8, 5)); //13


//La función declarada es la única función que puede ser invocada antes de ser declarada
//Esto ocurre por el hoisting
console.log(suma7(8, 17)); //25

function suma7 (n1, n2){
  let sum = n1+n2;
  return sum;
}



// ---------- Expresión de Función o 'Función anónima' ----------
const multi = function(n1, n2){
  return n1*n2;
}

//Invicando la expresión de función
console.log(multi(2, 9)); //18
console.log(multi(7, 7)); //49



// ---------- Arrow Function ----------
const suma2 = (n1,n2)=>{
  return n1+n2;
}

//Invicando la Arrow Function
console.log(suma2(3,8)); //11



//Si el arrow function solo recibe 1 parametro, pueden eliminarse los parentesis
const mensaje = name=>{
  return `Hola ${name}`;
}
console.log(mensaje("Joel")); //Hola Joel



//Si el arrow function solo rretorna 1 cosa, pueden quitarse las llaves y la palabra reservada return
const mensaje2 = name => `Hola ${name}`;
console.log(mensaje("Joel")); //Hola Joel
