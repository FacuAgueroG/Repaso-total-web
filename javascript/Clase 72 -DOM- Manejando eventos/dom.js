//Manejadores de eventos dentro del documento. 
//Event handler 
//Hay 3 maneras de definir los eventos de JS
//evento del html (esta en el codigo html)
//eventoSemantico
//eventoManejadorMultiple

//Esto es un event handler
function holaMundo(){
    alert("Hola mundo");
    console.log(event);
}

//eventoSemantico
//Hacer un manejador de evento semantico como este tiene la limitante de no poder agregarse otra funcion a este
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo; //no poner () porque esto lo ejecutaria


//eventoManejadorMultiple
//Con esto creamos un manejador de eventos multiples. Esto siginifica que con cada click hace algo diferente?
//no a no ser que lo programe para eso, pero lo que si puede hacer es reproducir multiples "functions" a la vez
const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click",holaMundo); //en este caso agrego un "escuchador de activacion de eventos"

$eventoMultiple.addEventListener("click",(e)=>{
    alert("Hola mundo manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.targe);
    console.log(event);
})