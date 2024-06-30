// // Funciones y DOM

class Mascota{
   constructor(nombre){
      this.nombre = nombre;
      this.adoptada = false;
   }

   // Método
   adoptar(){
      this.adoptada = true;
   }
}

// // Función para agregar mascota a la lista
function agregarMascota(){
   const inputMascota = document.getElementById("nuevaMascota");
   const nombreMascota = inputMascota.value.trim();

   if(nombreMascota != ""){
      const nuevaMascota = new Mascota(nombreMascota);
      const elementoLista = document.createElement("li");
      elementoLista.textContent = nuevaMascota.nombre;
      
      //Botón para eliminar
      const botonEliminar = document.createElement("span");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add("eliminar");
      
      // Evento para eliminar
      botonEliminar.addEventListener("click", function(){
         elementoLista.remove();
      })

      // Agregar clase si la mascota está adoptada
      if (nuevaMascota.adoptada){
         elementoLista.classList.add("adoptada");
      }

      //Evento para indicar que fue adoptada
      elementoLista.addEventListener("click", function(){
         nuevaMascota.adoptar();
         elementoLista.classList.add("adoptada");
      });

      //Evitar que el evento de adoptada se dispare al hacer click en Eliminar
      botonEliminar.addEventListener("click", function(event){
         event.stopPropagation();
      });

      elementoLista.appendChild(botonEliminar);
      const listaMascota = document.getElementById("listaMascotas");
      listaMascota.appendChild(elementoLista);

      inputMascota.value = "";
   }
}

const botonAgregarMascotas = document.getElementById("agregarMascota");
botonAgregarMascotas.addEventListener("click", agregarMascota);

//permitir agregar mascota al presionar enter
document.getElementById("nuevaMascota").addEventListener("keydown", function(event){
   if (event.key === "Enter"){
      agregarMascota();
   }
})

