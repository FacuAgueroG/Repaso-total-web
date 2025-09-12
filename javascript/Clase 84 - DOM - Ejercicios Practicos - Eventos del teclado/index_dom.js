import hamburguerMenu from "./dom/menu_hamburguesa.js"; 
import { digitalClock, alarm } from "./dom/reloj.js"; 
import { shortcuts } from "./dom/teclado.js";  

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); 

    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");

    

});

/*********************Eventos del teclado**********************/
//Se puede utilizar keydown, keyup, keypress (hold en unity)
d.addEventListener("keydown", e=>{
    shortcuts(e);
})






