// DOM

console.log(document);
console.dir(document);

console.log(document.head);
console.dir(document.head);

console.log(document.body);
console.dir(document.body);

//Métodos para acceder al DOM

let titulo = document.getElementById('titulo');
console.log(titulo.textContent);

let nombre = 'Cosme Fulanito';
titulo.innerHTML = "Hola " + nombre;

let parrafos = document.getElementsByClassName('parrafos');
console.log(parrafos);

let parrafosTag = document.getElementsByTagName('p');
console.log(parrafosTag);

// Ejemplo modificación de Select

const categorias = [];
let select = document.getElementById('select');

// let entrada = prompt('Ingresa una categoría (escribir FIN para finalizar)');
// while (entrada.toUpperCase() != 'FIN') {
//    categorias.push(entrada.toUpperCase());
//    //select.appendChild(new Option(entrada, entrada));
//    entrada = prompt('Ingresa una categoría (escribir FIN para finalizar)');
// }

// console.log(categorias);

// for (const categoria of categorias) {
//    select.innerHTML += `<option value="${categoria}">${categoria}</option>`
// }

//Creación de un nuevo nodo
let titulo1 = document.createElement('h2'); // crear el nodo
titulo1.innerHTML = 'Hola desde JS'; 
document.body.appendChild(titulo1);

class Producto{
   constructor(id, nombre, precio){
      this.id = parseInt(id);
      this.nombre = nombre;
      this.precio = parseFloat(precio).toFixed(2); //precio;
   }
}

const productos = [];
productos.push(new Producto(1, 'Coca Cola', 100));
productos.push(new Producto(2, 'Pepsi', 100));
productos.push(new Producto(3, 'Fanta', 100));
productos.push(new Producto(4, 'Sprite', 100));

// Recorrer el array para crear un nodo por valor
for (const producto of productos) {
   let divProductos = document.createElement('div');
   divProductos.innerHTML = `<h3> ID: ${producto.id} </h3> 
                              <h4> Nombre: ${producto.nombre} - Precio: ${producto.precio} </h4>`;
   document.body.appendChild(divProductos);
}