const d = document;
const w = window;

//el id que va a estar revisando (el de la etiqueta)
//media querie para cambio de tamaño en el que se debe aplicar el cambio
// mobile content (es un anchor para linkear)
//desktopContent (es el iframe completo)
export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq); //con esto evaluo si la "window" machea o no con la media query que pase, devuelve true o false

    //Esto simplemente cambia el texto en funcion de si estamos en un tamaño "desktop" o "mobile"
    const responsive = (e) =>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }

        console.log(e.matches);

    }

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}