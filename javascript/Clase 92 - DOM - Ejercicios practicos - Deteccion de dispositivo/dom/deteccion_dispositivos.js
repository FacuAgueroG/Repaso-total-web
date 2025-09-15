const d = document;
const n = navigator;
const ua = n.userAgent;
export default function userDeviceInfo(id){
    //console.log(ua); //navigator.userAgent nos permite ver en que dispositivo esta el usuario
    const $id = d.getElementById(id);
    //validaciones segun dispositivos
    const isMobile = {
        //lo busco a travez de expresiones regulares, la i es para que no tome en cuenta mayus o minus
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        //Sin importar el dominio
        //si el usuario no tuviera ninguno de esos, devuelve null,
        //lo mismo ocurre si pregunto por isMobile.android() y esta en ios
        any: function(){ 
            return this.android() || this.ios() || this.windows()
        }
    };
    //console.log(isMobile.android()); devuelve null si no estoy en android (poniendo un
    //simulador de celular pueden salir los datos que necesito y no devuelve null)
    const isDesktop = {
        linux:() => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: ()=> ua.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows();
        }
    };
    console.log(isDesktop.windows());
    const isBrowser = {
        chrome: () => ua.match(/chrome/i) && !ua.match(/opr|edge/i), //le agrego un && para que no detecte mas cosas que solo chrome
        safari: () => ua.match(/safari/i) && !ua.match(/chrome|opr|edge/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini|opr/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function (){
            return this.ie() || this.edge() || this.chrome || this.safari() || this.firefox || this.opera()
        }

    };

    $id.innerHTML = `
    <ul>
        <li style="text-align: center;">User Agent: <b>${ua}</b></li>
        <li style="text-align: center;">Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li> <!--Operador ternanio-->
    </ul>
    `;

    if(isBrowser.chrome()){
        $id.innerHTML += `<p style="text-align: center;"><mark>Este contenido solo se ve en chrome</mark></p>`;
    }
    if(isBrowser.opera()){
        $id.innerHTML += `<p style="text-align: center;"><mark>Este contenido solo se ve en opera</mark></p>`;
    }

    if(isDesktop.windows()){
        $id.innerHTML += `<p style="text-align: center;"><mark>Este contenido solo se ve en window</mark></p>`;
    }

    if(isDesktop.linux()){
        $id.innerHTML += `<p style="text-align: center;"><mark>Este contenido solo se ve en linux</mark></p>`;
    }

    //redireccion como ocurre en youtube cuando lo abro en una pc
    //es lo que pasa si entro a twitter hoy en dia, redirecciona a "x"
    if(isMobile.android()){
        //[lo comento porque no tengo idea cuales son los siguientes ejercicios y me voy a volver ]
        //[loco buscando porque se redirige a otra pagina]
        //window.location.href ="http://facundoaguerog.com"
    }

}