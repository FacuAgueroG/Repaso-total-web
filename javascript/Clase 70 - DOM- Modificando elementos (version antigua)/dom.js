//Hay otras maneras de agregar elementos dinamicamente.
//Estos son algunos metodos antiguos, la prox clase de ve algo mas nuevo

const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");
//con esto podemos clonar  (se usa al final)
const $cloneCards = $cards.cloneNode(true); //Si quiero que clone todo el contenido pongo true

$newCard.innerHTML = `
    <img src="https://picsum.photos/200/200" alt="any">
    <figcaption> Any </figcaption>
`;

$newCard.classList.add("card");

//remplazo el hijo numero 2 de cards por newCards (ahora no se va a notar porque como saco las imagenes de picsum son todas iguales creo)
// $cards.replaceChild($newCard,$cards.children[2]);

//Con esto lo pongo antes de un nodo de referencia
// $cards.insertBefore($newCard,$cards.firstElementChild);

//Con esto elimino
// $cards.removeChild($cards.lastElementChild);


// document.body.appendChild($cloneCards);//ver que se agrga una seccion completa que es un clon de la primera (con otras 5 imagenes)

