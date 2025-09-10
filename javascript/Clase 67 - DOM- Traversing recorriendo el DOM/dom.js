//Traversing 
//Herramientas que da la API del DOM para poder recorrer los elementos tomando como referencia un nodo.
//Todo esto es para ELEMENTOS (Hay aprox 12 nodos diferentes)
//Esto es enfocado a las etiquetas HTML, por ejemplo si yo quisiera acceder a texto comentado, necesitaria otra herramienta

const $cards = document.querySelector(".cards");

//Con esto puedo ver directamente el elemento
console.log($cards);

//children - Con esto puedo ver un arreglo de todos los hijos
console.log($cards.children);

//children[2] - con un selector [] puedo ver el que yo quiera
console.log($cards.children[2]);

//parentElement - Con esto puedo ver el padre
console.log($cards.parentElement);

//firstChild - Con esto puedo ver el primer hijo
console.log($cards.firstChild);

//lastChild - Con esto puedo ver el ultimo hijo
console.log($cards.lastChild);

//previousElementSibling - anterior elemento en el mismo nivel
console.log($cards.previousElementSibling);

//nextElementSibling - siguiente elemento en el mismo nivel
console.log($cards.nextElementSibling);

//closest() con esto puedo ver el elemento hijo mas cercano que corresponda a la busqueda.
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.closest("section"));
//tambien puedo ser un poco mas preciso con esto
console.log($cards.children[2].closest("figure"));