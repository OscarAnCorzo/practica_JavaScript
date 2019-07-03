var nombre = prompt('Ingresa tu Nombre');
var apellido = prompt('Ingresa tu Apellido');

var texto = `
    <h1> Hola </h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`

document.write(texto);