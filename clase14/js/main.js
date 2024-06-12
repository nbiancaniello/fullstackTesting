// let diaSemana = new Date().getDay();
// let dia = undefined;

// switch(diaSemana)
// {
//    case 0:
//       dia = "Domingo";
//       break;
//    case 1:
//       dia = "Lunes";
//       break;
//    case 2:
//       dia = "Martes";
//       break;
//    case 3:
//       dia = "Miércoles";
//       break;
//    case 4:
//       dia = "Jueves";
//       break;
//    case 5:
//       dia = "Viernes";
//       break;
//    case 6:
//       dia = "Sábado";
//       break;
// }

// console.log("Hoy es ", dia);

let valor = prompt("Ingrese un número");

if (!isNaN(valor) && valor !== null)
{  valor = Number(valor);
   if (valor > 1000)
      document.write("El valor es mayor a 1000");
   else if (valor >= 10 && valor <= 50)
      document.write("El valor está entre 10 y 50");   
}
else
   document.write("No es un número");


// if(prompt("Ingrese texto") == "Hola")
//    alert("Y cuando dije Hola??");
