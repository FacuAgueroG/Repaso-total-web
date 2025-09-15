const d = document;
const w = window;
export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]");

    const cb = entries =>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            //Este tipo de eventos me dice si se esta viendo o no algo en pantalla
            w.addEventListener("visibilitychange", e=>{
                d.visibilityState === "visible" //Si esta visible le doy play, si no, pause
                    ? entry.target.play()
                    : entry.target.pause();
            })
        });
    }

    //Una callback (como la que usa este objeto + constructor) es un parametro que es una funcion
    const observer = new IntersectionObserver(cb, {threshold:0.5});//cb es una funcion

    $videos.forEach(el=> observer.observe(el));
}