//Manejo del BOM: browser object model

//Esto es un evento que se activa solo cuando se modifica el tamaño de la ventana del browser
window.addEventListener("resize", (e)=>{
    console.log("*************Evento resize****************");
    console.clear();//para que solo quede el del ultimo redimensionamiento (si no x cada pixel se imprime un console.log)
    //tamaño de la ventana
    console.log(innerWidth); //cuelga de window
    //tamaño de la ventana
    console.log(innerHeight); //cuelga de window

    console.log(outerWidth); //tamaño del monitor
    console.log(outerHeight); //tamaño del monitor

    
});

//evento que se activa cada vez que se scrollea
window.addEventListener("scroll", (e)=>{
    console.clear();
    console.log("*************Evento scroll****************");
    console.log(scrollX);
    console.log(scrollY);
});

window.addEventListener("load", (e)=>{
    console.clear();
    console.log("*************Evento load****************");
    console.log(screenX);
    console.log(screenY);
})

//algo mucho mas apropiado que load es lo siguiente ya que es mucho mas rapido
document.addEventListener("DOMContentLoaded", (e)=>{
    console.log("***************Evento DOMContentLoaded********************");
    console.log(screenX);
    console.log(screenY);
});

