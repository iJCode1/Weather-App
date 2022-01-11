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