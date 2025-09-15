const d = document;
const w = window;
const n = navigator;

//Estos estados de la red sirven para saber si nuestro estado de red cambio. para saber 
//si estamos conectados o no
export default function networkStatus(){

    const isOnLine = () =>{
        const $div = d.createElement("div");
        if(n.onLine){
            $div.textContent = "Conexion reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.textContent = "Conexion perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin", $div); //Inserto esta clase antes de que arranque cualquier contenido del body

        //A los dos segundos hago desaparecer el cartel y aparece el de conexion reestablecida (tambien desaparece)
        setTimeout(()=> d.body.removeChild($div), 2000);
    }

    //Estos estados no funcionan si el estado de red no cambia. 
    //para poder simular su uso voy a la consola en el navegador> aplication>service workers => Offline = true
    w.addEventListener("online", e=>{
        isOnLine();
        //console.log(n.onLine)
    });
    w.addEventListener("offline", e=>{
        isOnLine();
        console.log(n.onLine);
    });
    
}