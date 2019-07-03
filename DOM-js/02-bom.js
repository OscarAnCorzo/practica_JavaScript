console.log(window.innerHeight); //retorna el alto de la ventana el navegador
console.log(window.innerWidth); //retorna el ancho de la ventana el navegador
console.log(window.location); // retorna la información de la pagina q esta en la ventana

// esta funcion abre una ventana nueva
function abrirVentana(url){
    window.open(url); //abre una pestaña nueva
    //window.open(url,"","width=400,height=300");//abre una ventana nueva
}
