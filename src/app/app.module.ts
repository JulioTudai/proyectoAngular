import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidosComponent } from './pedidos/pedidos.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    CarritoComponent,
    PedidosComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,// me aparece como deprecado, pero busque y no me dice que esta deprecado y anda igual
    //como toda ley de la programacion, si anda no se toca.
    ReactiveFormsModule,
    FormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
