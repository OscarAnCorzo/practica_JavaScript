var texto = "Hola Mundo";

var busqueda = texto.replace("Hola", "mundo"); //reemplaza una cadena por otra
console.log(busqueda);

var busqueda = texto.slice(2,6); //guarda la sucadena que esta desde el indice 2 hasta el 6
console.log(busqueda);

var busqueda = texto.split(" "); //separa una cadena dependiendo de un criterio Ej: espacio
console.log(busqueda);

var busqueda = texto.trim(); //quita espaios al inicio y al final de una cadena
console.log(busqueda);