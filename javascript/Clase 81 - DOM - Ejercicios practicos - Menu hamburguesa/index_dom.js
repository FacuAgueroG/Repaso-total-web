import hamburguerMenu from "./dom/menu_hamburguesa.js"; //Importo la funcion


const d = document;
//Esto "inicializa" los eventos y dice que es lo que se necesita para que se activen
d.addEventListener("DOMContentLoaded", e=>{
    //Estos son los nombres de los selectores (.panel-btn, ".panel")
    //.panel-btn es el que necesito tocar para abrir el panel
    //./panel es lo que tengo que activar (es el menu que se abre activando una animacion)
    //menu a es para cuando quiero cerrar el menu, se cierra al cliquear un anchor
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); 
})
