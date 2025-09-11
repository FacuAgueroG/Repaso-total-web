//En esta clase se ve como se haria para evitar que el evento se propage. Para que solo se ejecute una vez.
//Hay ciertos elementos del DOM que ya tienen un comportamiento default. como por ejemplo "submit". Tambien vamos a trabajar eso

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a"); //linkeo para un nuevo evento

console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation(); //Detengo la propagacion sea burbuja o captura. 
}


$divsEventos.forEach(div => {
    div.addEventListener("click",flujoEventos);//Lo activo en fase de burbuja
});

$linkEventos.addEventListener("click", (e)=>{
    alert("Hola wachin");
    e.preventDefault(); //Cancela la accion que tenga por default el elemento. En este ejemplo es un anchor (deberia linkearme a alguna pagina)
    e.stopPropagation();
})