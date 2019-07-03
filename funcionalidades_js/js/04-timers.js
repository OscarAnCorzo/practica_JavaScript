window.addEventListener('load', ()=>{
    // el setInterval se ejecuta cada vez que se cumpla el tiempo que se le pas como segundo parametro
    var tiempo = setInterval(()=>{
        console.log('ejecutando set interval');
        var titulo = document.querySelector("h1");
        if(titulo.style.fontSize == "40px"){
            document.querySelector("h1").style.fontSize = '20px';
        }else{
            document.querySelector("h1").style.fontSize = '40px';
        }
    }, 1000);

    var tiempo = setTimeout(()=>{
        console.log('ejecutando time out');
        var caja = document.querySelector("#micaja");
        document.querySelector("#micaja").style.color = 'red';

    }, 3000);

});