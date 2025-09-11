//Esta es la mejor manera de agregar elementos segun sus posiciones

//.incertAdjacent...
// .insertAdjacentElement(position,el);
// .insertAdjacentHTML(position,html);
// .insertAdjacentText(position,text);

//Posiciones:
//estas son las posiciones que se ponen en los incertAdjacent
// beforebegin(hermano anterior);
// afterbegin (primer hijo);
// beforeend(ultimo hijo);
// afterend(hermano siguiente);

const $cards = document.querySelector(".cards");
const $newCard= document.createElement("figure");

//MANERA CON EL TEXTO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// $newCard.innerHTML = 
// `   
//     <img src ="https://picsum.photos/200/200" alt="any">
//     <figcaption> Any </figcaption>
// `;

// $newCard.classList.add("card"); 

// //agrego en cards un hijo antes de este elemento, por eso queda afuera del elemento cards
// $cards.insertAdjacentElement("beforebegin",$newCard); 
// //Esto lo pone dentro de cards (como primer hijo)
// $cards.insertAdjacentElement("afterbegin",$newCard);
// //Antes de que termine (como ultimo hijo)
// $cards.insertAdjacentElement("beforeend",$newCard);
// //despues de que termine fuerda de cards
// $cards.insertAdjacentElement("afterend",$newCard);




//MANERA SIN EL TEXTO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CON EL TEXTO AGREGADO APARTE
//Voy a trabajar con adjacentText y para eso creo este valor string
let $contentCard= 
`   
    <img src ="https://picsum.photos/200/200" alt="any">
    <figcaption>  </figcaption> 
`;//Dejo el texto de figcaption vacio

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard); 
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
// $cards.insertAdjacentElement("afterbegin",$newCard); //En vez de agregarlo de esta manera puedo agregarlo como lo hace jquery

$cards.prepend($newCard); //primer hijo
$cards.append($newCard); //ultimo hijo
$cards.before($newCard); //Antes de cards
$cards.after($newCard); //despues de cards





