//Manejo del BOM: browser object model

//alert, confirm, prompt. Son 3 de los metodos del BOM mas utiles, otros de ellos son los siguientes
const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

//guardo la pagina a abrir en una var
let ventana;
$btnAbrir.addEventListener("click", e=>{
    ventana = window.open("https://facundoaguerog.com"); //con esto abro una ventana (la guardo en la var)
})

$btnCerrar.addEventListener("click", e=>{
        ventana.close(); //con esto cierro la ventana que se abrio 
})

$btnImprimir.addEventListener("click", e=>{
    window.print(); //Abre la ventana de imprimir (para pode imprimir lo que este en pantalla - si armo un buen archivo lo podria poner a prueba)
})
