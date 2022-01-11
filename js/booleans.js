//Crear un booleano
let resp = Boolean(false);
console.log(resp); //false;

let resp2 = true;
console.log(resp2); //true

//Valores Truthy
//Son valores intrínseco-primitivo que Js le da a cada tipo de dato
console.log(Boolean(true))
console.log(Boolean("H"))
console.log(Boolean("false"))
console.log(Boolean('o'))
console.log(Boolean(2))
console.log(Boolean(-2))
console.log(Boolean(BigInt))
console.log(Boolean(BigInt(2n)))
console.log(Boolean({}))
console.log(Boolean({name: "Joel", age: 22}))
console.log(Boolean([]))
console.log(Boolean([0,2,"Hola"]))
console.log(Boolean(function(){}))
let valor = "algo";
if (valor) {
  // el valor es truthy.
}
else {
  // el valor es falsy
  // podría ser false, 0, '', null, undefined ó NaN.
}


//Valores Falsy
console.log(Boolean(false))
console.log(Boolean(""))
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(BigInt(0n)))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))