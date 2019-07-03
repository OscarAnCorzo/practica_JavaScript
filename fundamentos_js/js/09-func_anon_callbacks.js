function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var suma = numero1 + numero2;

    sumaYmuestra(suma);
    sumaPorDos(suma);
}

sumame(2,3, dato => {
    console.log('la suma es:', dato);
},
function(dato){
    console.log('la suma por dos es:',(dato*2));
})