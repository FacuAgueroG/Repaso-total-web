const d = document;
//con selector- capturo la clase con la que identifico a todos los "players" del sorteo
export default function draw(btn,selector){

        const getWinner = (selector) =>{
            const $players = d.querySelectorAll(selector);

            //redondeo hacia abajo porque me puede llegar a dar .5 y redondear hacia arriba con un "player que no existe"
            const random = Math.floor(Math.random() * $players.length); 
            const winner = $players[random];

            //console.log($players, random, winner);
            return `El ganador es ${winner.textContent}`;
        }

        d.addEventListener("click", e=>{
            if(e.target.matches(btn)){
                let result = getWinner(selector);
                alert(result);
                //console.log(result)
            }
        })
}


//Este es un segundo script hecho para trabajar sobre otra pagina. En este caso estoy buscando
//extraer el contenido de lo que seria "el nombre" de un usuario de los comentarios de un video de youtube
//Esto funcionaria si me voy con el codigo hasta un canal de youtube (lo pego en la consola) o si no tendria que linkearlo de alguna manera
// const getWinnerComments = (selector) =>{
//     const $players = document.querySelectorAll(selector);
//     const random = Math.floor(Math.random() * $players.length);
//     const winner = $players[random];

//     return `El ganador es: ${winner.textContent}`;
// }

//En este momento el codigo de youtube cambio, por lo tanto el selector no funciona
//Hay que hacer un poco de scrapping y buscar el nuevo nombre
//este es el lugar donde se encuentra el nombre
// getWinnerComments("ytd-comment-thread-renderer #author-text span");
