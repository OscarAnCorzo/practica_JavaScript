window.addEventListener('load', () =>{
    var boton = document.getElementById('boton');

    //evento del raton
    function cambiarColor(){
        boton.style.background = 'green';
    }

    boton.addEventListener('click', function(){
        cambiarColor();
    });

    boton.addEventListener('mouseover', function(){
        boton.style.background = 'red';
    });

    boton.addEventListener('mouseout', function(){
        boton.style.background = 'yellow';
    });

    var campo = document.getElementById('campo');
    campo.addEventListener('focus', function(){
        document.querySelector('#enunciado').innerHTML = 'estas en el campo';
    });

    campo.addEventListener('blur', function(){
        document.querySelector('#enunciado').innerHTML = 'estas afuera del campo';
    });

    campo.addEventListener('keydown', function(evento){
        document.querySelector('#enunciado').innerHTML = 'pulsando esta letra:' + String.fromCharCode(evento.keyCode);
    });

    campo.addEventListener('keydown', function(evento){
        document.querySelector('#enunciado').innerHTML = 'pulsate esta letra:' + String.fromCharCode(evento.keyCode);
    });

    campo.addEventListener('keypress', function(evento){
        document.querySelector('#enunciado').innerHTML = 'precionó esta letra:' + String.fromCharCode(evento.keyCode);
    });

    campo.addEventListener('keyup', function(evento){
        document.querySelector('#enunciado').innerHTML = 'soltó esta letra:' + String.fromCharCode(evento.keyCode);
    });
});


