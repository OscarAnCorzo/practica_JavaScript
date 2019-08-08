var carro = {
    marca:"mazda",
    color: 'rojo',
    modelo: '2015'
};

console.log(carro.color);

var carro2 = {
    marca: carro,
    color: '',
    modelo: ''
};

console.log(carro2);

carro2.color = 'azul';

console.log(carro2);