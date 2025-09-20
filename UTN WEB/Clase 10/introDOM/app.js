const title = document.querySelector("h1"); //El texto original desde el html es "Que onda perritos"
console.log(title); //Puedo extraer el texto del h1
title.innerText = "Nada es inmutable"; //Lo cambio desde aca

const textContainer = document.querySelector("#textContainer");

const btn = document.querySelector("button"); //obtengo el boton
//const btn = document.querySelectorAll("button"); con all capturo todos los elementos iguales, esto arma un arreglo. ej: btn[0], btn[1], btn[2], etc.
btn.addEventListener("click", classSetter); //hago que escuche cuando lo cliquean y con eso activa una funcion

let hasBackgroundTomato=false;
function classSetter(){
    if(hasBackgroundTomato){
        textContainer.classList.remove("bg-tomato");
        textContainer.classList.add("bg-white");
        hasBackgroundTomato = false;
    }else{
        textContainer.classList.remove("bg-white");
        textContainer.classList.add("bg-tomato");
        hasBackgroundTomato = true;
    }
}


const paragraph = document.querySelector(".paragraph");






