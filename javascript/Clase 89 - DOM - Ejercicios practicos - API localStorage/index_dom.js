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




});

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage"); 
})


/*****************************DARK-LIGHT THEME // API localStorage *********************/

//Se saco del DOMContentLoaded ya que este mismo ahora requerida del uso del DOMContentLoaded y este ultimo no puede cargarse
//estando dentro de este. 
//El localStorage sirve para que ciertos elementos (como preferencias de usuario) se guarden de forma local para un usuario
//De esta manera algo como el darkMode se puede guardar la proxima vez que un usuario vuelva a entrar a la pagina
//localStorage (es un objeto) tiene aplicaciones muy importantes

//Las dos variables son para obtener valores de localStorage y otro para establecer valores de localStorage
//TODO ESTO SE TRABAJA DIRECTAMENTE SOBRE EL darkTheme
darkTheme(".dark-theme-btn", "dark-mode", "darker-mode"); 

//Esto es para la version GPT
// d.addEventListener("keydown", e=>{
//     shortcuts(e);
//     moveBall(e, ".ball", ".stage"); 
// });
// d.addEventListener("keyup", e=>{
//     moveBall(e, ".ball", ".stage");
// });





