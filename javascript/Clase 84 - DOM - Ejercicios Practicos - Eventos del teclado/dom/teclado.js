const d = document;

//Aca obtengo que el evento es del tipo keydown
export function shortcuts(e){
    //Al sacar poner el tipe veo que es de tipo keydown
    console.log(e.type);
    //Con esto puedo ver toda la info del evento
    //Entre esas cosas no solo veo la letra presionada si no que veo que codigo que se recibe de esta
    //cada letra tiene un codigo numerico con el que la puedo reconocer, EJ enter = 30
    console.log(e);    
    console.log(e.key);//Veo la letra especificamente
    console.log(e.keyCode); //veo el codigo asignado a la tecla especificamente
    //teclas especiales como cntl, alt o shift tienen su propio keyCode que devuelve true o false
    console.log(`¿Fue presionado el ctrl?: ${e.ctrlKey}`);

    //De esta manera hago un shortcut
    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado!");
    }
    
}