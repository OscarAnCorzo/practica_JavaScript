import {Component} from '@angular/core';

@Component({
    selector: 'producto',
    templateUrl: './producto.html'
})

export class Producto{
    public nombre: string;
    public costo: string;

    constructor(){
        this.nombre = 'proteina bipro';
        this.costo = '30.000';
        console.log('se ha cargado el componente');
    }
}