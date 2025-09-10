const $linkDOM = document.querySelector(".link-DOM");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style")); //otra forma de hacer lo mismo pero lo devuelve mas consiso (dejando de lado la notacion completa)

console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

console.log(window.getComputedStyle($linkDOM)); //Esto da un mapeado de estilos completo ya que me muestra los estilos que le da el navegador al elemento
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); //Que estilo final tiene una etiqueta

//Dos formas de aplicar estilos
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");

$linkDOM.style.width= "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding ="1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custon properties CSS
const $html = document.documentElement; //en html puedo moficar los valores guardados en el css pero no aplicarlos
const $body = document.body; //desde aca puedo aplicar esos valores modificados
//vinculo los colores que agregue en el css (en el html en el header)
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");   //MAS ABAJO LO CAMBIO, VER EL CODIGO ENTERO
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor); //muestro los colores

//agrego los colores
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//modifico el valor de uno de los colores (cambio el valor de la variable de CSS (en el html)) pero el estilo no esta agregado todavia
$html.style.setProperty("--dark-color","pink"); 
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",  varDarkColor);
//$body.style.backgroundColor = varDarkColor; //hacer esto  es lo mismo
