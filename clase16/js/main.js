// Funciones

// function devolverInfo(nombre, apellido, serieFavorita){
//    return"Hola " + nombre + " " + apellido + " tu serie favorita es " + serieFavorita;
// }

// document.write(devolverInfo("Nicolas", "Biancaniello", "One Piece"));

// function devolverLargoNombre(nombre){
//    return nombre.length;
// }

// document.write("El largo del nombre es " + devolverLargoNombre("Nicolas"));

// DOM

// console.log(document.head);
// console.dir(document.head);

// Selección de elementos del DOM quertSelector

// let titulo = document.querySelector('#titulo');
// let titulo = document.querySelector('#titulo');
// console.log(titulo);

// let parrafos = document.querySelectorAll('.parrafo');
// console.log(parrafos);

// let cambiarTextoBtn = document.querySelector('#cambiarTexto');
// let cambiarColorBtn = document.querySelector('#cambiarColor');
// let cambiarClaseBtn = document.querySelector('#cambiarClase');

// console.log(cambiarTextoBtn);
// console.log(cambiarColorBtn);
// console.log(cambiarClaseBtn);

// function cambiarTexto(){
//    titulo.textContent = 'Texto Nuevo';
// }
// // Asignar evento CLICK a los botones.
// cambiarTextoBtn.addEventListener('click', cambiarTexto);

// function cambiarColor(){
//    parrafos.forEach(parrafo => {
//       parrafo.classList.toggle('cambiarColor');
//    })
// }
// // Asignar evento CLICK a los botones.
// cambiarColorBtn.addEventListener('click', cambiarColor);

// function cambiarClase(){
//    parrafos.forEach(parrafo => {
//       parrafo.classList.toggle('nuevaClase');
//    })
// }
// cambiarClaseBtn.addEventListener('click', cambiarClase);


// console.dir(document.body.childNodes);
let titulo = document.querySelector('#titulo');
console.log(titulo);

let cambiarEstiloBtn = document.querySelector('#cambiarEstilo');
console.log(cambiarEstiloBtn);

console.dir(document.body.childNodes);
console.dir(document.body.childNodes[1].id);

console.log(titulo.textContent);

function cambiarTitulo(){
   titulo.textContent = "Texto cambiado";
   titulo.classList.toggle("agregarClase");
}

cambiarEstiloBtn.addEventListener('click', cambiarTitulo);
