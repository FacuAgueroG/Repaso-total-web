//Exporta PI del archivo ./constantes.js
//QUE ES EL "nombreAleatorio"? Es un export default que requiere un nombre cualquier para poder ser exportado, en este caso es una funcion.
//Estaria bueno que le ponga el mismo nombre para ser mas cohesivo y coherente.
//import nombreAleatorio,{PI, usuario} from "./constantes.js"; 
import variable,{PI, usuario} from "./constantes.js";
//De aca estoy importando tanto el objeto como las funciones por separado
import {sumar as sumita,restar, aritmetica} from "./aritmetica.js";  //puedo utilizar "as" para cambiarle el nombre dentro de este archivo


console.log("Archivos modulo.js");

console.log(PI,usuario);

console.log(sumita(3,4)); //uso el nombre cambiado
console.log(aritmetica.sumar(3,4));

//Tambien lo puedo hacer con variables,por eso comento esto.
//nombreAleatorio(); //Hago uso de la funcion de constantes.js llamada saludar() e importada como "nombreAleatorio();"

console.log(variable); //Esto es el export default de constantes.js, que es la variable password.
