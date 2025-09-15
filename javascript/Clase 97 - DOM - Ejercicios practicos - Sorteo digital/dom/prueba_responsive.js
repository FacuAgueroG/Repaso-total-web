const d = document;
export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester; //aca se almacena el window open y close

    d.addEventListener("submit", e=>{
        if(e.target === $form){
            //Esto es para evitar que el boton submite ponga la url de la pagina en el buscador
            //Ya que es lo que hace por defecto
            e.preventDefault(); 
            //alert("formulario enviado");

            //direccion es el name de la etiqueta, value el valor que agrego que es lo que quiero leer 
            //(el valor enviado al apretar submit justo en esa caja de texto)
            //segundo parametro, nombre de la ventana
            tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`); 
        }

        //recordar que el nombre que agregue en el boton de cerrar es literalmente cerrar
        d.addEventListener("click", e=>{
            if(e.target === $form.cerrar){
                tester.close();
            }
        })
        
    })
}