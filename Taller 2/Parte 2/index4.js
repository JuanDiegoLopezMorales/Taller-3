let semaforo = ["rojo", "amarillo", "verde"]
let color = 0
function semaforo2(){
    alert(Es ${semaforo[color]})

    color = (color +1)% semaforo.length
}
let intervaloId = setInterval(semaforo2,10000 )

setTimeout(() => {
    clearInterval(intervaloId);
    alert("Ha sido detenido");
}, 10000);
