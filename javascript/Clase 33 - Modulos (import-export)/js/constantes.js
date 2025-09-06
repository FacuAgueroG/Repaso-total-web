//Con esto solo se exporta lo que yo quiero, no todo el archivo.
export const PI = Math.PI;

export let usuario = "Facundo";

//En el caso de variable no puedo utilizar export default porque no es una funcion, es una variable.
//Lo unico que permite export default en la declaracion son los objetos y clases
let password = "qwerty";
export default password;


//Esto no hace falta importarse. Se puede llamar de una. Solo se puede exportar por default una sola cosa
// export default function saludar(){
//     console.log("Hola modulos +ES6");
// }

export function saludar(){
    console.log("Hola modulos +ES6");
}

//En esto caso aplico export default a una clase
// export default class saludito(){
//     constructor(){
//         console.log("Hola mundo esto es parte de una clase");
//     }
// }

