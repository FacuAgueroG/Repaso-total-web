function saludar(nombre = "Cachito", mensaje ="Nada que decir"){
    console.log(`Hola ${nombre}, ${mensaje}`);
}

saludar("Facundo", "¿Todo bien?");
saludar();

//lambda
const saludar2 = (mensaje) => {
    console.log(mensaje);
}

saludar2("hola");

function esNumeroDeLaSuerte(numero){
    if(numero > 0 && (numero%2==0 || numero%3==0) && numero != 15){
        console.log("Es un numero de la suerte");
    }else{
        console.log("No es numero de la suerte");
    }
}

esNumeroDeLaSuerte(15);
esNumeroDeLaSuerte(18);
esNumeroDeLaSuerte(-3);

let counter = 0;

while(counter < 5){
    console.log("While " + counter);
    counter++;
}

let counter2 = 5;
do{
    console.log("Do while " + counter2);
    counter++;
}while(counter < 5); //Lo muestra aunque sea una vez


pasos=100;
while(pasos>0){
    console.log(`Quedan ${pasos}`);
    pasos--;
}

let animales = ["perro", "gato", "pato"];

for (let i = 0; i < animales.length; i++){
    console.log(animales[i]);
}

//recorrer con foreach
//elemento => lo que esta dentro del indice
//indice => (el indice del array ej array[0])
//array => el mismo array
//TANTO EL INDICE COMO EL ARRAY NO  SON OBLIGATORIOS
animales.forEach((elemento, indice, array) =>{ 
    console.log(`En el lugar ${indice} se encuenta el siguiente animal: ${elemento}, esto esta dentro del array: ${array}`);
});


animales.forEach((elemento) =>{ 
    console.log(`Mira al: ${elemento} :D`);
});

//MAP => copia un array

const nuevoArr = animales.map(( animal) =>{
    return `Animal: ${animal}`;
});

nuevoArr.forEach((elemento) =>{ 
    console.log(`Mira al: ${elemento} desde el array copia`);
});

//Find
//Find recorre TODO el array y depues devuelve
const resultado = animales.find((animal) => {
    return animal == "gato"; //Este animal no existe, devuelve undefinned. Si existiera devuelve gato.
})

console.log(resultado);

//Operador ternario
//Estudiar pop, push, map, filter,  sort, slice, splice, shift,  unshift
//foreach, for, while, do while