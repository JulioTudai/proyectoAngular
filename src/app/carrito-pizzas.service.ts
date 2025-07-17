import { Injectable } from '@angular/core';
import { Pizza } from './pizza-list/Pizza';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarritoPizzasService {

  private _carritoList: Pizza[] = [];
  carritoList: BehaviorSubject<Pizza[]> = new BehaviorSubject(this._carritoList);


  agregarACarrito(pizza:Pizza){

    let item : Pizza | undefined = this._carritoList.find(p => p.id === pizza.id)

   if(!item){
    this._carritoList.push({...pizza});//angular entiende esto nomas que cosa rara que inventan
   }
   else{
    item.cantidad += pizza.cantidad;
   }
   this.carritoList.next(this._carritoList);
  } 


  constructor() { }
}
