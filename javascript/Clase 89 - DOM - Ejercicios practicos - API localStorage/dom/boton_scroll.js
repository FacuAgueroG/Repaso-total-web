const d = document;
const w = window; //Es necesario ya que estoy trabajando con los espacios en pantalla segun la "ventana" del navegador
export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);

    //El evento lo detecta el window, no el document
    w.addEventListener("scroll", e=>{
        //Con esto puedo ver a que distancia me encuentro del TOP
        //console.log(w.pageYOffset, d.documentElement.scrollTop);

        //despues del || lo utilizo para navegadores viejos, si no puede obtener un valor de el primero lo hace del segundo
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop; 

        //a partir de alejarme 600px del top pongo o saco el boton
        if(scrollTop > 600){
            //Me acabo de dar cuenta que esto no esta vinculado con css, simplemente esta "hardcodeada" la clase hidden
            //la agrego o la quito sin importar si eso aplica o no un estilo, ya es cosa mia haber agregado o no esa
            //clase en el stylesheet
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
    })


    //Creo que podria remplazar esto con un anchor y un id en el top, pero esta bueno ver como se haria desde js
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            //Con esto puedo decir a donde debe scrollearse la ventana, es una especie de "hardcode" ya que creo que podri hacer que 
            //ese boton que presiono desde html vuelva al top simplemente con un anchor y un id en el top
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                // left: 0 //En este caso no es necesario volver a 0 en left
            })
        }
    })
}