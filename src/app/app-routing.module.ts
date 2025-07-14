import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AbautComponent } from './abaut/abaut.component';
import { PedidosComponent } from './pedidos/pedidos.component'; 
const routes: Routes = [
  {
    path: 'pedidos',
    component: PedidosComponent
  },
  {
    path: 'abaut',
    component: AbautComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
