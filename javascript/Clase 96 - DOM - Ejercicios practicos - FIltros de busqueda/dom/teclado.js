const d = document;

export function shortcuts(e){
    // console.log(e.type);
    // console.log(e);    
    // console.log(e.key);
    // console.log(e.keyCode); 
    // console.log(`¿Fue presionado el ctrl?: ${e.ctrlKey}`);

    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado!");
    }    
}

//movimiento en pantalla de la pelota
let x = 0; 
let y = 0; 

//Hay cosas que este script no hace, y estaria bueno descubrir como se hace.
//1- Movimiento en diagonal (creo que se soluciona sacando el switch case y agrendo if y else)
//2- En vez de cancelar cualquier tipo de comportamiento cada vez que presiono 
//arriba, abajo, izquierda o derecha poner en foco sobre el panel donde se mueve la pelota, ya que podria darse que alguien no este viendo el juego 
//aprete abajo para scrollear y no scrolle. Estaria bueno que solo se pudiera mover la pelota cuando se le hace foco a esta

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball); 
    const $stage = d.querySelector(stage);
    //console.log(e.keyCode);


    //Todos los elementos del DOM tienen una propiedad que sirve para trabajar "colisiones".
    //Esto me da los valores de la altura y anchura de un objeto ademas de su posicion en pantalla.
    //Con esto puedo decirle a mis objetos que no pueden sobrepasar a otros por ejemplo 
    //para simular una "colision"
    const limitsBall = $ball.getBoundingClientRect();
    const limitsStage = $stage.getBoundingClientRect();
    //console.log(limitsBall);
    //console.log(limitsStage);
    
    switch(e.keyCode){
        case 37: //left
        //al hacer suma o resta de x lo que hago no es aumentar su velocidad de movimiento como yo pensaba
        //esto lo que hace es decirle desde la posicion 0 trasladate 1*10 = 10 TRASLADATE 10
        //al sumarse 1 mas, le digo que se traslade desde 0 => 2*10 = 20. Se vuelve a dibujar desde 0 a una distancia de 20
            if(limitsBall.left > limitsStage.left){
                e.preventDefault();
                x--;
            }
        break;
        case 38: //up
            if(limitsBall.top > limitsStage.top){
                e.preventDefault();
                    y--;//esto actual al revez
            }
        break;
        case 39:  //right
            if(limitsBall.right < limitsStage.right){
                e.preventDefault();
                 x++;
            }
        break;
        case 40: //down
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                 y++;
            }
        break;   
        default: 
        break;                         
    }

    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`; //la cantidad de movimiento
}


//Este codigo me lo dio CHAT GPT. ES MUY SUPERIOR AL DE MIRCHA. tiene mucho trabajo por detras
// const keysPressed = {};
// let animationFrameId = null;

// function moveBallStep(ball, stage) {
//     const $ball = document.querySelector(ball);
//     const $stage = document.querySelector(stage);
//     const limitsBall = $ball.getBoundingClientRect();
//     const limitsStage = $stage.getBoundingClientRect();

//     let moved = false;
//     // Izquierda
//     if (keysPressed[37] && limitsBall.left > limitsStage.left) {
//         x--;
//         moved = true;
//     }
//     // Derecha
//     if (keysPressed[39] && limitsBall.right < limitsStage.right) {
//         x++;
//         moved = true;
//     }
//     // Arriba
//     if (keysPressed[38] && limitsBall.top > limitsStage.top) {
//         y--;
//         moved = true;
//     }
//     // Abajo
//     if (keysPressed[40] && limitsBall.bottom < limitsStage.bottom) {
//         y++;
//         moved = true;
//     }
//     if (moved) {
//         $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
//     }
//     // Si alguna tecla sigue presionada, sigue animando
//     if (keysPressed[37] || keysPressed[38] || keysPressed[39] || keysPressed[40]) {
//         animationFrameId = requestAnimationFrame(() => moveBallStep(ball, stage));
//     } else {
//         animationFrameId = null;
//     }
// }

// export function moveBall(e, ball, stage) {
//     if (e.type === "keydown") {
//         keysPressed[e.keyCode] = true;
//         if (!animationFrameId) {
//             animationFrameId = requestAnimationFrame(() => moveBallStep(ball, stage));
//         }
//         e.preventDefault();
//     }
//     if (e.type === "keyup") {
//         keysPressed[e.keyCode] = false;
//     }
// }

