//Manejo del BOM: browser object model

//Estos objetos a trabajar cuelgan de window
//url
console.log("**************Objeto URL (location) ******************");
//Estas son las cosas mas importantes de URL - en este caso location
console.log(location); //objeto completo
console.log(location.origin); //ruta de la cual se origina
console.log(location.protocol); //tipo de protocolo
console.log(location.host); //dominio
console.log(location.hostname); //quien mantiene el dominio
console.log(location.port); //puerto por el que trabaja el host
console.log(location.href); //ubicacion completa de la pagina (https)
console.log(location.pathname); //pagina actual del http
console.log(location.search); //datos pasados por url 

console.log("*****************Objeto history*******************");
console.log(history); //historial de cuanto navegamos en esta pagina
console.log(history.length); //por cuantas rutas pasaste en esta misma pagina
history.back(3); //esto se mueve atras en la pagina (visitando lo ya visto)
history.forward(3); //esto se mueve hacia adelante en la pagina (visitando lo ya visto)
history.go(0); //numeros positivos va hacia adelante, numeros negativos hacia atras (es relativo desde la posicion actual)

console.log("*****************Objeto navigator*******************");
console.log(navigator);
console.log(navigator.connection); //Info de nuestra conexion (la del usuario)
console.log(navigator.geolocation); 
console.log(navigator.mediaDevices); //dispositivos que puede utilizar el usuario (Detecta lo conectado)
console.log(navigator.mimeTypes); //tipos de formatos que soporta el navegador que utiliza el usuario
console.log(navigator.onLine); //para saber si el usuario esta online o no (devuelve true o false)
console.log(navigator.serviceWorker); //permite hacer una aplicacion web a un sitio instalable, como aplicacion de escritorio
console.log(navigator.storage); //API de almacenamiento
console.log(navigator.usb); //detecta si hay o no dispositivo usb conectados
console.log(navigator.userAgent); //sobre el navegador, tipo de SO del usuario, etc.




