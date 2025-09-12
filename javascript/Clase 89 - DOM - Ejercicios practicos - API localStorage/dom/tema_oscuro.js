const d = document;
const ls = localStorage; //voy a usar bastante localStorage asi que la guardo en una variable aparte

export default function darkTheme(btn, classDark, classDarker){
    const $themeBtn = d.querySelector((btn));
    const $selectors = d.querySelectorAll("[data-dark]");
    const $selectors2 = d.querySelectorAll("[data-darker]");
    
    let moon = "🌚";
    let sun = "🌞";

    //Extraigo light y dark mode ya que lo voy a utilizar en mas de un lugar
    const lightMode = () =>{
        $selectors.forEach(el => el.classList.remove(classDark));
        $selectors2.forEach(el =>el.classList.remove(classDarker));
        $themeBtn.textContent = moon;
        ls.setItem("theme", "light");
    }

    const darkMode = () =>{
        $selectors.forEach(el =>el.classList.add(classDark));
        $selectors2.forEach(el =>el.classList.add(classDarker));
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark");
    }

    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){  
            if($themeBtn.textContent === moon){
                darkMode(); //llamo a darkMode 
            }else{
                lightMode(); //llamo a lightmode
            }   
        }
    })

    //Aca es donde voy a comenzar a usar el DOMContentLoaded
    //Esto deberia cargar todos los elementos del dom para poder reproducir la pagina de forma correcta
    //En este caso esto detecta el "theme mode" para saber el color de la pagina a aplicar
    d.addEventListener("DOMContentLoaded", e=>{
        if(localStorage){
            //elijo el nombre de la variable donde voy a guardar el ultimo theme elegido (light - dark)
            //con get leo el valor de theme (la primera vez va a ser null ya que no existe esa variable)
            if(ls.getItem("theme") === null) ls.setItem("theme", "light");  //creo theme, le pongo el valor de "light" por defecto
            if(ls.getItem("theme") === "light") lightMode();
            if(ls.getItem("theme") === "dark") darkMode();
        }
    })
}