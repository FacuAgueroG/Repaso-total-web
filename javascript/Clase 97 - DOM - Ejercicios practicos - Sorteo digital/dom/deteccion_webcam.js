const d = document;
const n = navigator;
export default function webCam(id){
    const $video = d.getElementById(id);
    //console.log(n.mediaDevices.getUserMedia);

    //Se debe preguntar si el navegador tiene un "getUserMedia" que obtiene cosas como mic y CAMARA!
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio:false})
        .then(stream => {
            //console.log(stream); //stream es un objeto
            $video.srcObject = stream;
            $video.play();
        })
        .catch(err => {
            //Imprimo cualquier tipo de error que pueda tener
            //deberia ser por cuestiones de "permisos"
            $video.insertAdjacentHTML("beforebegin", `<p><mark>Sucedio el siguiente error: ${err}</mark></p>`);
            //console.log(`Sucedio el siguiente error: ${err}`);
        }); 
    }
}