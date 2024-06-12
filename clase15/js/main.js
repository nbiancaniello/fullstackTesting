let frutas=["Manzana","Pera","Frutilla","Mora","Limón","Kiwi"];

// While

// let ix=0;
// while(ix<5){
//    // console.log("Valor de índice: ", ix);
//    document.write("Valor de índice: ", ix, "</br>");
//    ix++;
// }

// Do While

// let jx=0;
// do{
//    console.log("Valor de j: ", jx)
//    jx++;
// } while(jx < 5)

// Ejercicio

// let pasos = 100;
// while(pasos >= 1)
// {
//    pasos !== 1 ? document.write("Sólo faltan ", pasos, " pasos por caminar <br>") : 
//    document.write("Sólo falta ", pasos, " paso por caminar <br>");
//    pasos--;
// }

// For

// for(let i=0; i<frutas.length; i++)
// {
//    console.log(frutas[i]);
// }

// forEach

// frutas.forEach(function(frutas, indice, array){
//    console.log("Objeto con forEach es: ", frutas, indice, array);
// });

// frutas.forEach(function(frutas, indice){
//    console.log("Objeto con forEach es: ", frutas, indice);
// });


// frutas.forEach((fruta, indice) => console.log("Objeto con forEach 'Flecha'",fruta, indice));

// Map

// frutas.map((frutas) => {
//    console.log("Objeto con Map: " + frutas);
// });

 const numeros = [1, 3, 4, 5, 7, 11, 12];
// const porDos = numeros.map(x => x * 2);

// console.log(numeros);
// console.log(porDos);

// Find

// const encontrado = numeros.find(elemento => elemento > 4);
// console.log("Primero elemento encontrado", encontrado);

// const fruta = frutas.find(elemento => elemento === "Mora");
// console.log("Fruta encontrada", fruta);

// Filter

const newNumeros = numeros.filter(n => {
   return n > 5;
});

console.log(newNumeros);

const palabraBuscada = "ra";
const frutasFiltrada = frutas.filter(palabra => palabra.includes(palabraBuscada));

console.log("Frutas con filtro: ", frutasFiltrada);