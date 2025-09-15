const d = document;
export default function scrollSpy(){
    //El scrollspy sirve para saber en que punto de una pagina se encuentra un usuario (en que punto del scroll total)

    //detecto los elementos a espiar  (que son los que marque con el data atribute que puse)
    const $sections = d.querySelectorAll("section[data-scroll-spy]");//sections que tengan data-scroll-spy

    // Callback que ejecuta el IntersectionObserver cuando un elemento entra o sale del viewport
    //los entries son los elementos que estan entrando a la visualizacion del viewport
    const cb = entries =>{
        //console.log("entries", entries); //aca entran los 15 data-scroll-spy
        entries.forEach(entry => {
            //console.log("entry", entry);
            const id = entry.target.getAttribute("id"); //esto caza todos los id de las entry

            //console.log(id);
            //al cb trabajar para IntersectionObserver este obtiene las propiedades que requiere para trabajar
            //isIntersecting (me dice si la seccion que estoy viendo esta dentro del viewport = true o false)
            //(recordar que estoy explorando las entry) => esta entry se ve en pantalla?
            if(entry.isIntersecting){
                //busco un a con data-scroll-spy con un href que tenga "x" id
                // Si la sección está en pantalla, activamos el enlace correspondiente
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active"); 
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active"); 
            }
        })
    }

    //Esto es una API bastante nueva de JS que permite trabajar justamente el scroll spy
    //Esto observa todo lo marcado a la vez
    // Instanciamos el IntersectionObserver pasándole el callback (cb)
    const observer = new IntersectionObserver(cb, {
        //Esto me dice "donde tengo que ver? ya sabe que va a ver sections, 
        //pero en base a quien? yo quiero que vea el documento, entonces no hace falta ponerlo"
        //root 

        //Esto se puede dar lado por lado (top-right-b-l)
        //xQ negativo? porque quiero que vea hacia adentro de las etiquetas, no hacia afuera (porque podria marcar mas de una como "visualizada")
        //rootMargin: "-250px",  //No lo uso porque treshold es mejor ya que aca tengo que darle pixeles estaticos 

        //primer parametro
        //0 - en cuanto el elemento se visualice trabaja el interseption observer 
        //0.5 - cuando vea el 50% del elemento en el viewport 
        //segundo parametro (sigue activo hasta el 75%)
        threshold: (0.5,0.75)
    });
    //console.log("observer", observer);

    // Ponemos a observar cada sección seleccionada --- COMENTARIO: GPT
    //aca entran los elementos observados
    $sections.forEach((el)=> observer.observe(el));//recorro con el objeto oberver y observo justamente los elementos recorridos
}