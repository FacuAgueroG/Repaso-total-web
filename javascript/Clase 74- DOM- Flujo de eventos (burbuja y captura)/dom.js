//Cuando un evento ocurre dentro de JS este se da desde el nodo mas interno 
//hasta el document, desde la parte mas pequeña hasta lo mas grande. Se propaga (se llama fase de burbuja)

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

//Ever que es lo que pasa con esto. Ya que un div esta adentro de otro y el tercero esta dentro del 2 y 1
//Si creo un evento que captura los divs y le digo que cuando se de un click suceda x o y. Este evento se propaga desde el
//3 al 2 y 1. Si clickeo el 2 se propaga hacia el uno.
$divsEventos.forEach(div => {
    //El evento ademas tiene la posibilidad de pasar un tercer elemento.
    //Si yo lo pongo false como tercer parametro, este replica y propaga el evento hacia afuera en las etiquetas html
    //Por defecto es false.
    //Si yo quisiera hacerlo al reves, en lo que se llama "fase de captura". Le pongo true, y los mensajes que salen al hacer click
    //serian lo inversos

    //Esto es fase burbuja
    // div.addEventListener("click", flujoEventos, false); 

    //Esto es fase de captura //Se siguen generando los 3 mensajes, pero ahora se activa desde afuera hacia adentro
    // div.addEventListener("click", flujoEventos, true); 

    //En los ultimos años se proporciono la posibilidad de pasarle como tercer parametro un objeto
    div.addEventListener("click", flujoEventos, {
        capture: false, //si es captura? false entonces burbuja
        once: true, //este evento solo se ejecuta una vez, false infinito.
    });
});