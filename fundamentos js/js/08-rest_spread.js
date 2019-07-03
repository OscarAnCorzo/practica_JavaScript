/* 
* el tipo de parametro rest sirve para recoger una cantidad indeterminada de parametros 
* los almacena en una lista
* se define con tres puntos al inicio del nombre de la variable en el campo de los parametros donde
* se define la funcion
*/


function numeros(numero1, numero2, ...otros_numeros){
    console.log(numero1);
    console.log(numero2);
    console.log(otros_numeros);
}

numeros(1,2,3,4,5);

/* 
* el tipo de parametro spread sirve para enviar una cantidad indeterminada de valores en una lista 
* que son recibidos por la funcion como valores independiantes en variables independientes
* se define con tres puntos al inicio del nombre de la variable en el campo de los parametros donde
* se invoca la funcion.
*/
var numeroo = [1,2];
numeros(...numeroo,3,4,5);