//Creando elementos dinamicamente a traves de javascript //ABAJO DE TODO EL CODIGO ESTA LA FORMA MAS PERFORMANTE DE AGREGAR CONTENIDO DINAMICAMENTE
const $figure = document.createElement("figure"); //creo la figure
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");


//texto a incrustar en una figcaption
$figcaptionText = document.createTextNode("Animals");

$cards = document.querySelector(".cards");

//creo otra tarjeta
const $figure2 = document.createElement("figure");

$img.setAttribute("src","https://picsum.photos/200/200");
$img.setAttribute("alt","Animals");

$figure.classList.add("card"); //Le agrego el estilo card completo

$figcaption.appendChild($figcaptionText); //a figcaption le agrego un texto
$figure.appendChild($img); //agrego figure a una imagen
$figure.appendChild($figcaption); //agrego la figure a figcaption
$cards.appendChild($figure); //agrego la figure a cards

//Agrego dinamicamente algo de texto
$figure2.innerHTML =
`
    <img src="https://picsum.photos/200/200" alt="people">
    <figcaption> People </figcaption>
`
$figure2.classList.add("card");
$cards.appendChild($figure2);


//Generando dinamicamente una lista 
const estaciones = ["Primavera", "verano", "otoño", "invierno"];
const $ul = document.createElement("ul");
document.write("<h3>Estaciones</h3>"); //No es buena practica utilizar document.write
document.body.appendChild($ul);
estaciones.forEach(el=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.append($li);
});

//Otra forma de hacerla, mas correcta
const continentes = ["Africa", "America","Asia", "Europa","oceania"];
const $ul2 = document.createElement("ul");
document.write(`<h3>Continentes del mundo</h3>`);
document.body.appendChild($ul2);
$ul2.innerHTML="";
//Hay que tener en cuenta que con esto puedo llegar a sobrecarcar la memoria de una pc y hacer que el funcionamiento sea inestable
//podria llegar a tener que meter dinamicamente cientos de lineas de texto o imagenes. 
continentes.forEach(el=>{
    $ul2.innerHTML += `<li>${el}</li>`; //para que por cada bucle sume lo anterior (asi concatena)
});

//ESTA ES LA MANERA MAS PERFORMANTE
//Si fueran muchos elementos la forma mas inteligente de hacerlo (performante) es la siguiente
//inner o create element es poco perfomante. ya que con la ul se le estan haciendo inserciones constantes al dom
//es una de las operaciones mas demandantes que hay. ver que por cada vez que se pone un li nuevo
//hay que "redibujar" por completo el ul. 
//Este codigo lo que hace es pegar las partes en el dom de forma directa, es pegar esas partes a un "fragment".
//una vez que todo este pegado en el fragment pego todo de una directamente sobre el DOM
const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment(); //Esto es un fragment es una forma mucho mas peformante de hacerlo
meses.forEach(el=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});
document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);