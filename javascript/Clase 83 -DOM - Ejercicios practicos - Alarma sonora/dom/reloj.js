const d = document;

export function digitalClock(clock, btnPlay, btnStop){

    let clockTempo;

    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(()=>{   
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000)

            e.target.disabled = true;
            d.querySelector(btnStop).disabled = false;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;

            e.target.disabled = true;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarm = d.createElement("audio"); //Creo la etiqueta audio 
    $alarm.src = sound; //Le pego a la etiqueta sound en su src la ruta en la que viene el sonido 
    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            alarmTempo = setTimeout(()=>{
                $alarm.play();
            }, 2000); //Suena a los 2 segundos
            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo); //Cancelo la alarma antes de que se apague
            $alarm.pause(); //Esto pausa el audio
            $alarm.currentTime = 0; //Con esto reseteo el audio
            d.querySelector(btnPlay).disabled = false;
        }
    })
}