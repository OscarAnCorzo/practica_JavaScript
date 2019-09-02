$(document).ready(function(){
    console.log($('a').length);
    // recorre todo las etiquetas a y añade el texto con el contenido del link
    $('a').each(function(index){
        var texto = $(this).attr('href');
        $(this).text(texto);
    });

    
    $('#registrar').click(function(){
        $('ul').append('<li><a href="'+$('#texto').val()+'"></a></li>');
        $('#texto').val('');
        $('a').each(function(index){
            var texto = $(this).attr('href');
            $(this).text(texto);
        });
    });

});