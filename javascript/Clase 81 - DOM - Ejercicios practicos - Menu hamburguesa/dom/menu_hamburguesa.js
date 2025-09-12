//Exporto esta funcion
export default function hamburguerMenu(panelBtn, panel, menuLink){
    const d = document;
    //Esto escucha todos los clics en pantalla
    d.addEventListener("click", e=>{
        //Verifica si lo que se activa corresponde con lo que se pasa como parametro. 
        //Lo que sigue despues del || busca activar el menu aunque toquemos lo que esta "dentro del elemento activador"
        //Ej: el icono de menu hamburuesa
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");

            //Esto es para animar el boton
            //Pero yo no lo anime, esto se hace utilizando esta hoja de estilo online
            //<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.2.1/hamburgers.min.css">
            d.querySelector(panelBtn).classList.toggle("is-active"); 
            //body.classList.toggle('body-no-scroll'); //Codigo agregado para scrollear el menu cuando tiene muchos elementos
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
            //body.classList.remove('body-no-scroll'); //Codigo agregado para scrollear el menu 
        }
    });
}
