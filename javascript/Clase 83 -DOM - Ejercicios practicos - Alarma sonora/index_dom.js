import hamburguerMenu from "./dom/menu_hamburguesa.js"; 
import { digitalClock, alarm } from "./dom/reloj.js";   

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); 

    /********************RELOJ DIGITAL************************** */
    //Lo primero es el div donde se dibuja la info
    //lo segundo y tercero son los botones
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

    alarm("./assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");

});






