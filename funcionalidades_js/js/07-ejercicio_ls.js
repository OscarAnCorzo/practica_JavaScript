window.addEventListener('load', ()=>{
    var form = document.querySelector('#boton');

    form.addEventListener('click', ()=>{
        var titulo = document.querySelector('#nom_pelicula').value;
        localStorage.setItem(titulo , titulo);

        document.querySelector('#peliculas').append(localStorage[titulo]);
    });
});