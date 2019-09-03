$(document).ready(function(){
    console.log('efectos');

    $('#mostrar').click(function(){
        //$('#cuadro').show(360); // maximiza el div
        //$('#cuadro').fadeIn('slow'); // desvanece el div
        $('#cuadro').slideDown('slow'); // desplega hacia abajo el div
    });
    
    $('#ocultar').click(function(){
        //$('#cuadro').hide(360); // inimiza el div
        //$('#cuadro').fadeOut('slow'); //desanece el div
        $('#cuadro').slideUp('slow', function(){
            console.log('oculto');
        }); //desplega hacia arriba y oculta el div
    });

    $('#animar').click(function(){
        $('#cuadro').animate({
            marginLeft: '500px',
            fontSize: '40px'
        }, 'slow',function(){
            console.log('animado');
        });
    });
});