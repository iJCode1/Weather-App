//Plana de nVeces: No debo olvidar lo aprendido en Javascript
const plana = (nVeces)=>{
  for(let i = 1; i<= nVeces; i = i+1){
    console.log(`${i}. No debo olvidar lo aprendido en Javascript`);
  }
}
plana(170);






//Números primos
/* 
  Un número primo es un número natural mayor que 1 
  que tiene únicamente dos divisores positivos 
  distintos: él mismo y el 1
*/
let contador = 1;
const numeroPrimo = (numero)=>{
  if(numero <= 1){
    console.log("Se requiere ingresar un número mayor a 1");
    return;
  }else{
    for(let i = 2; i <= numero; i = i + 1){
      console.log(numero % i);
      if(numero % i === 0){
        contador = contador + 1;
        if(contador>2){
          break;
        }
      }
    }
    if(contador == 2 ){
      console.log(`El número ${numero} es primo`);
    }else{
      console.log(`El número ${numero} no es primo`);
    }
  }
}

numeroPrimo(17);




// Cálcular cuantos números primos hay
const cuantosPrimosHay = (limite)=>{
  let contador = 1;
  let contadorPrimos = 0;
  for(let i = 2; i <= limite; i = i + 1){
    contador = 1;
    for(let j = 2; j <= limite; j = j+1){
     if(i%j === 0){
        contador = contador + 1;
        if(contador > 3){
          break;
        }
      }
    }
    if(contador === 2){
      contadorPrimos = contadorPrimos + 1;
    }
  }
  return console.log(`Hay ${contadorPrimos} números primos del 2 al ${limite}`);
}

cuantosPrimosHay(1000);