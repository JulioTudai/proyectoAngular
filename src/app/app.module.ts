import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AbautComponent } from './abaut/abaut.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    CarritoComponent,
    PedidosComponent,
    AbautComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
