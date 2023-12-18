
const $btnActivar = document.querySelector('#btnActivar');


function cambioColor(){

    const colores = ["verde", "amarillo", "rojo"];
    const $semaforo = document.querySelector('#semaforo');

    $semaforo.innerHTML = `        
    <div id="circulo" class="verde circulo"></div>
    <button  id="btnActivar" class="btnDesActivar" onclick="location.reload()">Detener</button>
    <p class="etiqueta">No desesperes, esto puede tardar unos momentos</p>  
    `;
    
    setInterval(() => {

        for (let i = 0; i <= colores.length-1; i++) {
                

            setTimeout(() => {
                            
                $semaforo.innerHTML = `
            
                <div id="circulo" class="${colores[i]} circulo"></div>
                <button  id="btnActivar" class="btnDesActivar" onclick="location.reload()">Detener</button>
                <p class="etiqueta">No desesperes, esto puede tardar unos momentos</p>
        
                `;

            }, i*2000);
        }
    },6000);
}

$btnActivar.addEventListener('click', cambioColor);