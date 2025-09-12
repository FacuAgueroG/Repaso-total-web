const d = document;

export function digitalClock(clock, btnPlay, btnStop){

    let clockTempo;

    d.addEventListener("click", e=>{
        //Detecto que boton se apreto
        if(e.target.matches(btnPlay)){
            //Con esto refresco la pantalla
            clockTempo = setInterval(()=>{   
                let clockHour = new Date().toLocaleTimeString();//Busco la hora con el objeto Date
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;//Con esto dibujo la hora en pantalla
            }, 1000) //Se ejecuta cada segundo

            e.target.disabled = true;
            d.querySelector(btnStop).disabled = false;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo); //Detengo el intervalo de tiempo
            d.querySelector(clock).innerHTML = null; //Limpio la cadena de texto que muestra el tiempo

            e.target.disabled = true;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

export function alarm(){

}