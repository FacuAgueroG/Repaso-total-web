const d = document;
const n = navigator;
export default function getGeolocation(id){
    const $id = d.getElementById(id);
    //Requiere ciertas opciones para trabajar la geolocalizacion
    const options = {
        enableHighAccuracy: true, //le digo que utilice potencia del hard para detectar la mejor geolocalizacion posible
        timeout: 5000, //maximo de tiempo a utilizar para encontrar la localizacion
        maximumAge: 0, //para que cada vez que tome datos, no se guarden en la cache
    }; 

    const success = position =>{
        let coords = position.coords;
        console.log(position);

        $id.innerHTML = 
        `
        <p>Tu posicion actual es:
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Preisicion: <b>${coords.accuracy}</b> metros</li><!--Presicion de la lectura-->
            </ul>
            <!--Esto  me permite ver en google maps la ubicacion encontrada. El 20z es zoom = 20-->
            <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 20z" target="_blank", rel="noopener">Ver en google maps</a>
        </p>
        `
    };

    const error = (err) =>{
        $id.innerHTML=`<p><mark>Error ${err.code}: ${err.message}</p></mark>`;
        //console.log(`Error ${error.code}: ${err.message}`);
    };

    //Esto requiere 3 partes, lo que ocurre cuando hay exito, que pasa cuando hay error y las opciones decididas
    //en documentacion hay muchas opciones sobre geolocalizacion
    n.geolocation.getCurrentPosition(success, error, options);

    //hay otro tipo de geolocalizacion que tiene que ver con la posicion actual de una persona
    //ese otro metodo es n.geolocation.watchPosition() (ubicacion en tiempo real)
    //developer.mozilla.org/es/docs/WebAPI/Using_geolocation
}
