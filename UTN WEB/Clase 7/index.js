document.write("Hola mundo desde el documento");

console.log("Hola mundo, desde la consola");

var n = "Hola JEJEJEJJE";
console.log(n);
console.log("El tipo de la vairable n es: " + typeof n);

n=234;
console.log(n);
console.log("El tipo de la vairable n es: " + typeof n);

n = false;
console.log(n);
console.log("El tipo de la vairable n es: " + typeof n);

const K = "Maracuya";
var l = "Banana";
var m = "Manzana";

console.log(K, l, m);

console.log("Este el valor de K: " + K + "Este es el valor de l: " + l + "Este es el valor de m: " + m);

console.log(`Este es el valor de K: ${K}. Este es el valor de l: ${l}. Este es el valor de m: ${m}`);

const HTMLCONTENT= 
`<div>
<h3>Un titulillo</h3>
<p>Mi texto de parrafo</p>
</div>`;

//HTMLCONTENT = "nuevo valor"; //NO SE PUEDE ASIGNAR A UNA CONST
document.write(HTMLCONTENT);

const TEXT1= "Primera ";
const TEXT2= "Linea";

//let textoH3 = TEXT1+TEXT2;
//let textoH3 = prompt("Texto primera linea");
//let textoP = prompt ("Texto segunda linea");

//let textoP = "Hola como estas";

// const HTMLCONTENT2 =
// `<div>
// <h3>${textoH3}</h3>
// <p>${textoP}</p>
// </div>`;

// document.write(HTMLCONTENT2);


let nombre = prompt("Ingrese su nombre");

document.write(`<h2>${nombre}</h2>`);

let numero1= parseInt(prompt("Ingrese numero entero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero entero"));

document.write(`<p>El numero ingresado es ${numero1+numero2}</p>`);

//scoope
{
    let mivar1= "contenido de variable con let";
    var mivar2 = "contenido de variable con var";
    const mivar3 = "contenido inmutable";
    
}

//console.log(mivar1) //Al estar dentro de un scoope esto no esta disponible
