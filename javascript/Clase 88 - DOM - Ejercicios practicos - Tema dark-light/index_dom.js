import hamburguerMenu from "./dom/menu_hamburguesa.js"; 
import { digitalClock, alarm } from "./dom/reloj.js"; 
import { shortcuts, moveBall } from "./dom/teclado.js";  
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;

//Esto solo carga el DOM no hace otra cosa. 
d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); 

    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");

    countdown("countdown", "Apr 15, 2026 00:00:00", "Feliz cumpleaños!"); 

    scrollTopButton(".scroll-top-btn");

    /***********************DARK THEME****************** */
    //
    darkTheme(".dark-theme-btn", "dark-mode", "darker-mode"); 
});

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage"); 
})

//Esto es para la version GPT
// d.addEventListener("keydown", e=>{
//     shortcuts(e);
//     moveBall(e, ".ball", ".stage"); 
// });
// d.addEventListener("keyup", e=>{
//     moveBall(e, ".ball", ".stage");
// });





