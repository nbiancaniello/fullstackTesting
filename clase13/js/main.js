// Clase 13: Intro a JS

// Hola Mundo desde un archivo externo
console.log('Hola Mundo!');

//Variable
// var: Alcance global
// var nombre = "Harry";
// console.log(nombre);

// let: Dentro del scope donde se declaró
// string
let nombrelet = "Hermione";
console.log(nombrelet);

// number
let edad = 10;
console.log(edad);

// constant
const PI = 3.14;
console.log(PI);

// boolean
let tenerMascotas = true;
console.log(tenerMascotas);

console.log(edad, PI, tenerMascotas);

//Operaciones básicas
let numeroA = 2;
let numeroB = 5;

let resultadoSuma = numeroA + numeroB;
console.log(numeroA + numeroB);
console.log(resultadoSuma);

let nombre = "Cosme";
let apellido = "Fulanito";
const espacio = " ";

let nombreCompleto = nombre + espacio + apellido;

console.log(nombreCompleto);

// let entrada = prompt("Ingrese su nombre");
// let salida = "Hola " + entrada;
// alert(salida);

// let numero = parseInt(prompt("Ingrese su numero"));
// const numeroConst = 30;
// let salidaNumero = numero + numeroConst;
// alert(salidaNumero);