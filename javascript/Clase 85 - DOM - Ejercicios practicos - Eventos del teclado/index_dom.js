import hamburguerMenu from "./dom/menu_hamburguesa.js"; 
import { digitalClock, alarm } from "./dom/reloj.js"; 
import { shortcuts, moveBall } from "./dom/teclado.js";  

const d = document;

//Esto solo carga el DOM no hace otra cosa. 
d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); 

    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");

    

});

/*********************Eventos del teclado**********************/
//Se puede utilizar keydown, keyup, keypress (hold en unity)
//Esto incluso podria estar dentro del DOMContentLoaded pero mircha no lo puso ahi, no se porque
d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage"); 
})

//Esto es para una version GPT (la otra parte esta en el otro JS)
// d.addEventListener("keydown", e=>{
//     shortcuts(e);
//     moveBall(e, ".ball", ".stage"); 
// });
// d.addEventListener("keyup", e=>{
//     moveBall(e, ".ball", ".stage");
// });







