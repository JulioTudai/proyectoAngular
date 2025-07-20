import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FormComponent } from './form/form.component';
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
    path:'form',
    component:FormComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
