//Hay dos maneras de trabajar con los data atributes y tambien de establecer sus valores
console.log(document.documentElement.lang);//Justamente con documentElement puedo acceder a todos los elementos del documento html
console.log(document.documentElement.getAttribute("lang")); //Esto hace lo mismo

//Puedo utilizar get para saber el valor de ciertos atributos
console.log(document.querySelector(".link-DOM").href);
console.log(document.querySelector(".link-DOM").getAttribute("href"));

//puedo utilizar set para settear el valor de ciertos atributos
document.documentElement.lang = "en";
document.documentElement.setAttribute("lang","es-ar");
console.log(document.documentElement.getAttribute("lang")); //Esto hace lo mismo

const $linkDOM = document.querySelector(".link-DOM"); //Las variables del DOM se suelen guardar con un $ (para identificarlos)

//set - puedo settearle incluso atributos que no tiene
$linkDOM.setAttribute("target","_blank"); 
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://facundoaguerog.com");

//Has - puedo saber si tiene o no x atributo
console.log($linkDOM.hasAttribute("rel")); 

//remove - puedo removerle atributos que no tiene 
$linkDOM.removeAttribute("rel","noopener");

////////////////////////////////////////////Data tributes/////////////////////////////////////////
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
//seteo mi meta data
$linkDOM.setAttribute("data-description","Modelo de objeto del documento");
console.log($linkDOM.dataset.description);
//otra notacion para guardar valores dentro de un meta dato
$linkDOM.dataset.description = "Suscribite a algun canal de youtube!";
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id")
console.log($linkDOM.hasAttribute("data-id"));




