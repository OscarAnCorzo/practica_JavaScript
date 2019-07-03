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
})

var campo = document.getElementById('campo');
campo.addEventListener('focus', function(){
    campo.style.background = 'yellow';
})