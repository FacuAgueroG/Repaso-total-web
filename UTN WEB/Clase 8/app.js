//const logged = false;
//Ni siquiera hace falta capturar de esta manera
//const btnLogin = document.getElementById("btnLogin"); //Capturo el elemento desde el html con un id

/*if(logged){
    //Esto captura desde el CSS - la clase debe llamarse igual
    //Al ponerle el nombre del id desde aca lo puedo capturar, no hace falta usar getElementById
    btnLogin.classList.add("hideButton"); 
}else{
    btnLogout.classList.add("hideButton");
}*/

// let dia = "martes";

// switch(dia.toLocaleLowerCase()){
//     case "lunes":
//         console.log("Hoy es lunes");
//     break;
//     case "martes":
//         console.log("Hoy es martes");
//     break;
//     case "miercoles":
//         console.log("Hoy es miercoles");
//     break;
//     case "jueves":
//         console.log("Hoy es jueves");
//     break;
//     case "viernes":
//         console.log("Hoy es viernes");
//     break;
//     case "sabado":
//         console.log("Hoy es sabado");
//     break;
//     case "domingo":
//         console.log("Hoy es domingo");
//     break;
//     default:
//         console.log("Eso no es un dia de la semana");
//     break;    
// }

// const a = 10;
// const b = 9;
// const hoyEsElDia = true;
// // || or
// if(a===b || a> b && hoyEsElDia){
//     console.log("Se cumple la funcion");
// }else{
//     console.log("Ninguna se cumple");
// }

// const logged = true;
// logged ? btnLogin.classList.add("hide") : btnLogout.classList.add("hide");

// let tieneMascota = true;
// console.log(tieneMascota);
// tieneMascota = !tieneMascota;

const arr = [
    "Lorenzo",
    "Graciela",
    "Berenice",
    "Malcolm",
    "Juan carlos",
    "Everisto",
    "Ximena"
];
document.write(arr[0]);

document.write(`<br>`);

arr.push("pepito");
document.write(arr);

document.write(`<br>`);

arr.pop();
document.write(arr);

document.write(`<br>`);

arr.shift(); //Borra el primer elemento
document.write(arr);

document.write(`<br>`);





