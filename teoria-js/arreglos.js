//Arreglos
const arreglo = Array(12, 3, "Joel", 17, true, null, undefined);
arreglo;

console.log(arreglo[1]);
console.log(arreglo[2]);
console.log(typeof(arreglo[2]));
console.log(typeof(arreglo[1]));
console.log(typeof(arreglo[4]));
console.log(typeof(arreglo[5]));
console.log(typeof(arreglo[6]));

//Agregar un elemento
arreglo.push(177);
arreglo;


//Eliminar último elemento
arreglo.pop();
arreglo;

//Creando un nuevo arreglo
const arr2 = ["Joel", "Julieta", "Leonidas", "Cesar"];

//Creando un nuevo arreglo modificado
const arr3 = arr2.map((ele)=>{
  return `Hola ${ele}, saludos!`
});
arr2;
arr3;

//Recorriendo arreglo

arr2.forEach((ele)=>{
  console.log(`El elemento es: ${ele}`)
})
arr2;


//Creando un nuevo arreglo
const numeros = [[0,0],[0,1],[1,0],[1,1]];
numeros

//Recorriendo arreglo para obtener un nuevo arreglo con las coordenadas donde se encuentre un 0
const numeros2 = [];
numeros.forEach((ele, indexI)=>{
  console.log(ele)
  console.log(indexI);
  ele.forEach((ele, indexJ)=>{
    console.log(ele);
    console.log(indexJ);
    if(ele === 0){
      numeros2.push(`He encontrado un 0 en la posición: [${indexI},${indexJ}]`);
    }
  })
})

numeros2;



//Buscando el primer elemento que coincida con la busqueda

const nom = ["Joel", 'Julieta', "Leonidas", "Cesar", 8, 7, 12];
console.log(nom.length);

const index = nom.find(ele => ele >= 9)
index;

const index2 = nom.find(ele => ele === "Joel");
index2;

const index3 = nom.find(ele => ele === "Ju");
index3;


//Obteniendo el indice del elemento que cumple con una condición de busqueda
//Retorna un numero mayor o igual a 0 si encuentra coincidencia
const i1 = nom.findIndex((ele) => ele === "Julieta");
i1;

const i2 = nom.findIndex((ele) => ele >= 2);
i2;

//En caso no se cumpla la busqueda, devolvera un -1
const i3 = nom.findIndex((ele)=> ele >= 80);
i3;




//Creando otro arreglo
const arreglo2 = [12, {name: "Juanito", age: 20}, "Joel", 17, true, [1,2,3]]
arreglo2; //[ 12, { name: 'Juanito', age: 20 }, 'Joel', 17, true, [ 1, 2, 3 ] ]


//Iterando los indices de un arreglo con for-in
for(index in arreglo2){
  console.log(index); //0, 1, 2, 3, 4, 5
  console.log(arreglo2[index]); //12, { name: 'Juanito', age: 20 }, Joel, 17, true, [ 1, 2, 3 ]
}


//Iterando los valores de un arreglo con for-of
for(value of arreglo2){
  console.log(value); //12, { name: 'Juanito', age: 20 }, Joel, 17, true, [ 1, 2, 3 ]
}

//Obteniendo longitud de arreglo
console.log(arreglo2.length); //6

//Iterando los valores de un arreglo con for
for(let i = 0; i <= arreglo2.length - 1; i = i+1){
  console.log(arreglo2[i]); //12, { name: 'Juanito', age: 20 }, Joel, 17, true, [ 1, 2, 3 ]
}

//Un for puede ser combinado con una cndicional para ser detenido en algún momento que se cumpla una determinada condición por ejemplo
for(let i = 0; i <= arreglo2.length - 1; i = i+1){
  console.log(arreglo2[i]); //12, { name: 'Juanito', age: 20 }, Joel, 17
  if (i == 3){
    break; //El break indica que el bucle se detiene y termina su ejecución
  }
}



//Iterando los valores de un arreglo con while
/*
  Al trabajar con while o do-whiñe es necesario apoyarse de un contador (similar que en for) 
  e incrementarlo o decrementarlo según sea el caso para no entrar en un loop infinito
*/
let count = 0;
while(count <= arreglo2.length - 1){
  console.log(arreglo2[count]); //12, { name: 'Juanito', age: 20 }, Joel, 17, true, [ 1, 2, 3 ]
  count = count + 1; //Importante incrementar o decrementar el contenedor según sea el caso ya que si no, se entra en un bucle infinito
}



//Iterando los valores de un arreglo con do-while
let count2 = 0;
do{
  console.log(arreglo2[count2]); //12, { name: 'Juanito', age: 20 }, Joel, 17, true, [ 1, 2, 3 ]
  console.log(typeof(arreglo2[count2])); //number, object, string, number, boolean, object
  count2 = count2 + 1;
}while(count2 <= arreglo2.length - 1);