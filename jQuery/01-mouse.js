$(document).ready(function(){
    console.log("estamos adentro de document.ready()");

     var caja = $('.caja');
/*    caja.mouseover(function(){
        $(this).css('background','red');
    });

    caja.mouseout(function(){
        $(this).css('background','yellow');
    }); */

    caja.hover(function(){
        $(this).css('background','red');
    }, function(){
        $(this).css('background','yellow');
    });

    caja.click(function(){
        $(this).css('background','blue');
    });

    caja.dblclick(function(){
        $(this).css('background','black');
    });

    var texto = $('#texto');

    texto.focus(function(){
        $(this).css('background','grey');
    });

    texto.blur(function(){
        $(this).css('background','pink');
    });

    $(document).mousemove(function(){
        $('#sigueme').css('left', event.clientX).css('top', event.clientY);
    });

});