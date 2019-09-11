import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Producto } from './compProducto/producto';

@NgModule({
  declarations: [
    AppComponent,
    Producto
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, Producto]
})
export class AppModule { }
