const d = document;
export default function countdown(id, limitDate, finalMessage){
    //No uso query selector (ya que eso puede agarrar todo, clase, id o incluso etiqueta) como esto solo agarra id no hace falta que llegue con #
    const $countdown = d.getElementById(id); 
    //creo una fecha nueva (tiene que ser en un formato JS) y la paso a milisegundos con getTime
    const countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(); //Tiempo actual en milisegundos
        let limitTime = countdownDate - now;
        let days = Math.floor(limitTime / (1000 * 60 * 60 * 24 )); //1000 milisegundos, 60 segundos, 60 minutos, 24 horas

        //uso % porque busco el sobrante de la cuenta anterior que da en horas
        //despues al resto lo divido por lo necesario para las horas
        let hours = Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); 
        if(hours < 10) hours= "0"+ hours; //agrego el 0 para que se vea en formato HH en caso de ser menor a 10

        //podria hacer esto para no usar un if
        //el slice(-2) solo conserva los 2 characteres finales (porque esta en negativo), entonces si tengo 011 => recorta a 11
        //let hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000*60*60))).slice(-2);

        let minutes = Math.floor(limitTime %(1000*60*60) / (1000 * 60));
        if(minutes < 10) minutes = "0" + minutes;

        let seconds = Math.floor(limitTime%(1000*60) / 1000);
        if(seconds < 10) seconds = "0" + seconds;

        $countdown.innerHTML = `<h3> Faltan ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos \npara tu cumpleaños`;
        //console.log(countdownDate, limitTime);

        if(limitTime < 0){
            clearInterval(countdownTempo);
            //En finalMessage viene el mensaje de cumpleaños!
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`
        }
    }, 1000);


}