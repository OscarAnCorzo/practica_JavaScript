var texto1 = "Hola";
var texto2 = "Mundo";

var busqueda = texto1.indexOf("la"); //busca una subcadena en una cadena, retorna el numero de la posicion donde comienza la cadena
console.log(busqueda);
var busqueda = texto1.search("la"); // lo mismo
console.log(busqueda);
var busqueda = texto1.lastIndexOf("la"); // lo mismo pero para la ultima coincidencia
console.log(busqueda);

var busqueda = texto1.match(/la/g); // busqueda global de la subcadena
console.log(busqueda);

var busqueda = texto1.substr(1,3); // guarda en la variable la subcadena que esta entre los indices 1 y 3
console.log(busqueda);

var busqueda = texto1.charAt(3); // saca el caracter del indice 3
console.log(busqueda);

var busqueda = texto1.startsWith("Ho"); // busca la subcadena al comienzo y retorna true o false
console.log(busqueda);

var busqueda = texto1.endsWith("la"); // busca la subcadena al final y retorna true o false
console.log(busqueda);

var busqueda = texto1.includes("la"); // busca la subcadena retorna true o false
console.log(busqueda);