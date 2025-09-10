//Lo que se va a trabajar por ahora son los node.ELEMENT_NODE y node.TEXT_NODE
//node.TEXT_NODE son elementos que adentro tienen texto como H1, P, A, etc
//node.ELEMENT_NODE ciertos elementos html

//Algunas formas de obtener elementos que ya nose utiliazan son estas.
//obtengo elementos por nombre de su etiqueta
console.log(document.getElementsByTagName("li"));
//obtengo elementos por nombre de su clase
console.log(document.getElementsByClassName("card"));
//obtengo elemetos por el nombre (name) 
console.log(document.getElementsByName("nombre"));

//Algo un poco mas moderno es lo siguiente
//obtengo elementos por su id //Esto sigue usandose, pero hay mejores selectores, este es mas rapido que otros.
console.log(document.getElementById("menu"));

//Algo mucho mas utilizado //Esto obtiene cualquier etiqueta, solo hace falta ponerle un . o #, sin nada es para agarrar una etiqueta
console.log(document.querySelector("#menu")); //Esto es mas lento que getElementById
console.log(document.querySelector("a")); //esto solo agarra el primero, tener cuidado con eso!
//querySelectorAll
console.log(document.querySelectorAll("a")); //ESTO AGARRA TODOS querySelectorALL!!!!!
console.log(document.querySelectorAll("a").length); //tengo length
document.querySelectorAll("a").forEach((el)=>console.log(el)) ; //puedo recorrer
console.log(document.querySelectorAll(".card")[2]) //puedo agarrar el numero que yo quiera como si fuera un array
console.log(document.querySelectorAll("#menu li")); //puedo agarrar los elementos que estan dentro de otros
