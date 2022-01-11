//Creando un objeto
//Un objeto se compone de propiedad: valor,
//Las propiedades se separan por 1 coma. La ultima propiedad puede o no llevar una coma
//Los valores pueden ser cualquier tipo de dato
const obj = { 
  name: "Joel",
  age: 21,
  nationality: "MX",
  cursos: ["Grid", "Flexbox", "Js Esencial"],
}

//Imprimiendo el valor de las propiedades del objeto
obj; //{name: 'Joel', age: 21, nationality: 'MX', cursos: [ 'Grid', 'Flexbox', 'Js Esencial' ] }
console.log(obj.name);
console.log(obj.age);
console.log(obj.nationality);


//Agregando una nueva propiedad al objeto con la notación del punto.
obj.team = "Pumas";

obj; //{name: 'Joel', age: 21, nationality: 'MX', cursos: [ 'Grid', 'Flexbox', 'Js Esencial' ], team: 'Pumas' }
console.log(obj.team); //Pumas

//Agregando un nuevo método al objeto con la notación del punto.
obj.saludar = ()=>{
  return `Hola ${obj.name} tienes ${obj.age} años`;
}
console.log(obj.saludar()); //Hola Joel tienes 21 años


obj; //{name: 'Joel', age: 21, nationality: 'MX', cursos: [ 'Grid', 'Flexbox', 'Js Esencial' ], team: 'Pumas', saludar: [λ] }



//Iterando objetos

//Forma 1
for(prop in obj){
  console.log(prop); //name, age, nationality, cursos, team, saludar
  console.log(obj[prop]); //Joel, 21, MX, [ 'Grid', 'Flexbox', 'Js Esencial' ], Pumas , [λ]
}

//Forma 2
console.log(Object.keys(obj)); //[ 'name', 'age', 'nationality', 'cursos', 'team', 'saludar' ]
Object.keys(obj).forEach((prop) =>{
  console.log(prop); //name, age, nationality, cursos, team, saludar
  console.log(obj[prop]); //Joel, 21, MX, [ 'Grid', 'Flexbox', 'Js Esencial' ], Pumas , [λ]
})