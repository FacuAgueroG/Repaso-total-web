import hamburguerMenu from "./dom/menu_hamburguesa.js"; 
import { digitalClock, alarm } from "./dom/reloj.js"; 
import { shortcuts, moveBall } from "./dom/teclado.js";  
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/responsive.js";
import responsiveTester from "./dom/prueba_Responsive.js";


const d = document;

//Esto solo carga el DOM no hace otra cosa. 
d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); 

    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");

    countdown("countdown", "Apr 15, 2026 00:00:00", "Feliz cumpleaños!"); 

    scrollTopButton(".scroll-top-btn");

    responsiveMedia("youtube", "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=b89CnP0Iq30" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="937" height="707" src="https://www.youtube.com/embed/b89CnP0Iq30" title="La Caida de Edgar (el original)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);

    responsiveMedia("gmaps", "(min-width: 1024px)",
        `<a href="https://maps.app.goo.gl/TvzaQboQfvRardZS6" target="_blank" rel="noopener">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.046774715383!2d-77.18295888804442!3d39.105405234285264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cd5858a17331%3A0xfe07c9af2680e583!2sBethesda%20Softworks%20LLC!5e0!3m2!1sen!2sar!4v1755709627239!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    
    /****************************RESPONSIVE TESTER*************************/
    /*
    Responsible responsive web desing (esto proximo es solo un ejemplo de los tantos que deberian aplicarse el responsive design)
    Cuando se trabaja el responsive design no todo puede ajustarse con CSS algunas cosas deberian realizarse con JS
    esto podria darse por ejemplo en los momentos en los que hay que ajustar el contenido de un video de youtube. podria
    ser que este no funcione correctamente en pantallas chicas, lo mismo puede ocurri con un mapa de google maps. Ademas
    el usuario tal vez no quiere cargarlos porque en celular con datos podria no querer cargarlo. Para esconderlo no 
    basta con la clase display: hidden; o visibility: none; para esto habria que hacer que el iframe no se carge, debe hacerse con
    JS. en su lugar podriamos poner un anchor*/
    responsiveTester("responsive-tester");


});

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage"); 
})

darkTheme(".dark-theme-btn", "dark-mode", "darker-mode"); 

//Esto es para la version GPT de el movimiento de la pelota
// d.addEventListener("keydown", e=>{
//     shortcuts(e);
//     moveBall(e, ".ball", ".stage"); 
// });
// d.addEventListener("keyup", e=>{
//     moveBall(e, ".ball", ".stage");
// });





