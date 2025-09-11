//No es optimo andar delegando con listener cada vez. Si tuviera 1000 tendria la CPU muy ocupada en muchos eventos 
//De igual manera pasa con el foreach para recorrer todos los listeners.
//Una cosa que puedo hacer es poner un solo escucha en un objeto padre y de ahi reconocer con algun indicador sobre los hijos
//que evento es el correcto

//YA NO HACE FALTA LA DECLARACION DE ESTAS VARIABLES YA QUE BUSCO EL MATCH DIRECTAMENTE CON EL LISTENER
// const $divsEventos = document.querySelectorAll(".eventos-flujo div");
// const $linkEventos = document.querySelector(".eventos-flujo a");



function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation(); 
}

document.addEventListener("click", (e) =>{
    console.log("click en", e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
       alert("Hola wachin");
       e.preventDefault(); //recordar que esto es para que no actue como un anchor
       //Como el que maneja el evento ahora es el padre no hace falta el stop propagation
    }
});


// $divsEventos.forEach(div => {
//     div.addEventListener("click",flujoEventos);
// });

// $linkEventos.addEventListener("click", (e)=>{
//     alert("Hola wachin");
//     e.preventDefault(); 
//     e.stopPropagation();
// })