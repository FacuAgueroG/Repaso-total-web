const d = document;

//dataDark sera un atributo que crearemos nosotrs y cada vez que una etiqueta tenga este data atribute
//se tornara en un tono oscuro al tocar el boton. Desde aca definiremos su comportamiento. 
//Esto lo haremos recorriendo todo el DOM
//classDarker =  agregue un estilo propio para ciertos elementos que lo necesitaban
export default function darkTheme(btn, classDark, classDarker){
    const $themeBtn = d.querySelector((btn));
    //capturo todos los elementos que tengan este atributo
    //los atributos se especifican con []
    const $selectors = d.querySelectorAll("[data-dark]");//esto devuelve un "array"
    const $selectors2 = d.querySelectorAll("[data-darker]");//Esto lo agregue yo, no lo puso mircha, agregue un estilo propio para ciertos elementos

    //console.log($selectors) //Puedo ver todo lo que tiene el data-dark
    let moon = "🌚";
    let sun = "☀️";

    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){  
            //console.log($themeBtn.textContent) //puedo ver que es lo que hay en $themeBtn (el contenido textual)
            if($themeBtn.textContent === moon){
                $selectors.forEach(el =>el.classList.add(classDark)); //Agrego el estilo a cada elemento con data-dark

                //Esto lo agregue yo, no lo puso mircha, agregue un estilo propio para ciertos elementos
                $selectors2.forEach(el =>el.classList.add(classDarker));
                $themeBtn.textContent = sun;
            }else{
                $selectors.forEach(el => el.classList.remove(classDark));
                $selectors2.forEach(el =>el.classList.remove(classDarker));
                $themeBtn.textContent = moon;
            }
        }
    })

}