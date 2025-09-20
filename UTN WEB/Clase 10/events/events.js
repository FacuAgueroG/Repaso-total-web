const btnContainer = document.getElementById("btn-container");
const btnTrigger = document.getElementById("trigger");
const btnRemover = document.getElementById("reset");

btnTrigger.addEventListener("click", createButtons);
const btnNum = 20;

function createButtons(){
    for(let i = 1; i < btnNum ; i ++){
        const newBtn = document.createElement("button");
        newBtn.innerText = `Button #${i+1}`;
        newBtn.addEventListener("click", eventHandler);
        btnContainer.appendChild(newBtn);
    }
}

function eventHandler(){
    console.log(`Presionado el boton`);
}

