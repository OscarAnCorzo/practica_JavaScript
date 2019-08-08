window.addEventListener('load', ()=>{
    
    // pregunta si Storage esta disponible en la versión del navegador
    if(typeof(Storage) !== 'undefined'){
        console.log('disponible');
    }else{
        console.log('no disponible');
    }

    // guardar datos
    localStorage.setItem('clave', 'valor');
    localStorage.setItem('clave3', 'valor3');

    // Recuperar datos
    console.log(localStorage.getItem('clave3'));

    // Guardar objetos
    var objeto = {
        nombre: 'nombre1',
        edad: 'edad1'
    };
        // pasa el objeto a formato string
    localStorage.setItem('usuario', JSON.stringify(objeto));

    // Recuperar Objeto
    // console.log(localStorage.getItem('usuario'));  -- esto me devuelve un string, texto plano
    console.log(JSON.parse(localStorage.getItem('usuario')));

    // eliminar elementos 
    localStorage.removeItem('clave');

    // limpiar todo 
    localStorage.clear();

});