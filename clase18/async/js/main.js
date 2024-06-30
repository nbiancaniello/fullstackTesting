// let contador = 0;
// let interval = setInterval(() => {
//    console.log(contador++);
//    if (contador === 10) {
//       clearInterval(interval);
//    }
// }, 1000)

//Ejemplo combinado

let contador = 0;
let intervalID = setInterval(() => {
   console.log(contador++);
}, 1000);

setTimeout(() => {
   clearInterval(intervalID);
   console.log('Hola cada 3 segundos');
}, 3000);

function mostrarHora(){
   let reloj = document.getElementById('reloj');
   let ahora = new Date();
   reloj.innerHTML = ahora.toDateString() + ' - ' + ahora.toLocaleTimeString();
}

let cronometro = setInterval(mostrarHora, 1000);