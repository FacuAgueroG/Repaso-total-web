//Aprendiendo como pasar parametros a un handler

function saludar(nombre ="desconocid@"){
    alert(`Hola ${nombre}`);
}

function holaMundo(){
    alert("Hola mundo");
}

const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover"); //Este es un nuevo boton

$eventoMultiple.addEventListener("click",holaMundo);

$eventoMultiple.addEventListener("click", (e)=>{
    alert("Hola mundo manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
})

//Lo tengo que hacer de esta manera. Ahora delego el handler al () => esto sera un arrow function que mande a llamar saludar
$eventoMultiple.addEventListener("click", ()=>saludar("facundo"));//Ahi deberia pasarle los parametros

//Podria ejecutarla todas las veces que necesite
// $eventoMultiple.addEventListener("click",()=> {
//     saludar()
//     saludar()
//     saludar()
//     saludar()
//     saludar()
// });

//creo una arrow function para trabajar remove event
const removerDobleClick= (e) =>{
    alert(`Removiendo el evento tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}

//Tambien se pueden remover eventos. Esto solo se puede hacer con manejadores de eventos multiples
//Es de tipo double click
//En caso de querer remover un evento, no puede estar guardado aca mismo con una funcion anonima. Debe estar declarado aparte
$eventoRemover.addEventListener("dblclick", removerDobleClick); //Al internar hacer el segundo double click este boton ya no funciona