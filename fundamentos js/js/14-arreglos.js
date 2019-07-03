var lista = ['hola', 'mundo', 'mundo'];

lista.push("agregar"); //agragar elementos a una lista
console.log(lista);

lista.pop(); //elimina el ultimo elemento
console.log(lista);

lista.sort(); //ordena alfabeticamente el array
console.log(lista);

lista.reverse(); //invierte el orden de la lista
console.log(lista);



var texto = lista.join(); // pasa un array a un texto separado por ,
console.log(texto);

var busqueda = lista.findIndex(elemento => elemento == 'mundo'); //busca el primer elemento en la lista y lo retorna
console.log(busqueda);

var busqueda = lista.some(elemento => elemento == 'mndo'); //busca el primer elemento en la lista y retorn true o false
console.log(busqueda);
