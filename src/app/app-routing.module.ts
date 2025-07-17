import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AbautComponent } from './abaut/abaut.component'; 
const routes: Routes = [
  {
    path:'',
    redirectTo:'pedidos',
    pathMatch:'full'
  },
  {
    path:'pedidos',
    component:PedidosComponent
  },
  {
    path:'abaut',
    component:AbautComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
