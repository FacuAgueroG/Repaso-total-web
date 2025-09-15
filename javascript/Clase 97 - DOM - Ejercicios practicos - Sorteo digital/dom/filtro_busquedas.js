const d = document;
export default function searchFilters(input, selector){
    d.addEventListener("keyup", e=>{
        if(e.target.matches(input)){
            //console.log(e.key);

            //Limpio la busqueda si se presiona escape
            if(e.key === "Escape") e.target.value = "";

            //Este filtro de busqueda no busca igualar a una palabra y eliminar las otras
            //Este filtro es sencillo "filtra" haciendo desaparecer todo aquello que no 
            //contenga las letras que voy ingresando (lo unico que importa es el orden en el que comienzo)
            //Ej: si comienzo con a buscar sugar y comienzo por u (contiene sugar) si sigo con ug (contiene sugar)
            //ahora si pongo r y estoy buscando ugr (saltee la "a" tambien se filtra sugar y se borra)

            //Busco dentro de las cards si lo que comienzo a escribir se asimila a alguna tarjeta
            d.querySelectorAll(selector).forEach(el =>{
                //Esto devuelve true o false y filtra
                //filter es una clase de css, que oculta elementos
                el.textContent.toLowerCase().includes(e.target.value)
                    ? el.classList.remove("filter")
                    :el.classList.add("filter"); 
            });
        }
    })
}