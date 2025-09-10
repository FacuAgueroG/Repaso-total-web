const $whatIsDOM = document.getElementById("que-es");
let text = `
<p>
    El modelo de objetos del documento (<b><i> DOM - Document Object Model</i></b>) es una API para documentos HTML y XML
</p>
<p>
    Este provee una representacion estructural del docuemento, permitiendo modificar su contenido y presentacion visual mediante codigo JS
</p>
<p>
    <mark> El DOM no es parte de la especificacion de Javascript, es una API para los navegadores </mark>
</p>
`;

//Ya hay un texto en el elemento con el id "que-es" pero esto lo va a reemplazar, no se suma
$whatIsDOM.innerText = text; //Sirve para agregar contenido texto a un elemento
//inner text no esta sumando el contenido como un html, este incluso
//imprime las etiquetas, por ejemplo <strong> lo imprime en vez de darle negritas a un texto

//ignora etiqutas html y css, no aplica estilos ni nada. Solo reemplaza texto
$whatIsDOM.textContent = text;

//ESTO LO REPRODUCE COMO HTML, tiene en cuentas las etiquetas html. 
//Pero no las semanticas, solo las que tienen que ver con el texto.
//Todo el contenido lo wrapea como si fuera un gran "<p>"
$whatIsDOM.innerHTML = text;  //Esto reemplza el contenido html

//Esto no solo reemplaza el codigo HTML y respeta las etiquetas, si no que tambien toma el codigo como 
//etiquetas verdaderas y lo respeta a 100%
$whatIsDOM.outerHTML  = text; 

