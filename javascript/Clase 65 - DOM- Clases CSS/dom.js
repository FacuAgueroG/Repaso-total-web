const $card = document.querySelector(".card");

console.log($card.classList.contains("rotate-45"));
//Add - Agrego una clase
$card.classList.add("rotate-45"); 

console.log($card.classList.contains("rotate-45"));

//Remove - Elimino la clase
$card.classList.remove("rotate-45"); 
console.log($card.classList.contains("rotate-45"));

//toggle - esto funciona como un true/false. Si ya lo tiene lo saca, si no lo tiene lo pone
$card.classList.toggle("rotate-45"); 

//replace - reemplaza por otra. la primera es la actual, la segunda es "a cambiar por"
$card.classList.replace("rotate-45","rotate-135");

//SE PUEDEN AGREGAR O SACAR MAS DE UNA CLASE A LA VEZ, ESTO TAMBIEN FUNCIONA CON REMOVE O TOGGLE.
$card.classList.add("opacity-80","sepia"); 
$card.classList.remove("opacity-80","sepia"); 