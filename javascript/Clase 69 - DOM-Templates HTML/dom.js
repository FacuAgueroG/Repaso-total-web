//Un template es como un modelo a seguir. 
//Donde puedo estructurar el html modelo a seguir para que javascript lo inserte de forma dinamica a continuacion copiando esa estructura

const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();
const cardContent =[
    {
        title: "Tecnologia",
        img: "https://picsum.photos/200/200",
    },
    {
        title: "Tecnologia",
        img: "https://picsum.photos/200/200",
    },
    {
        title: "Tecnologia",
        img: "https://picsum.photos/200/200",
    },
    {
        title: "Tecnologia",
        img: "https://picsum.photos/200/200",
    },
        {
        title: "Tecnologia",
        img: "https://picsum.photos/200/200",
    }
]; //Esto simularia una peticion de datos con AJAX por ejemplo

cardContent.forEach(el=>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //Tengo que clonar la estructura
    let $clone = document.importNode($template, true); //Copia toda la estructura. De esta manera no solo crea uno
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);