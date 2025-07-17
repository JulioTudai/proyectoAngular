import { Component, OnInit } from '@angular/core';
import { CarritoPizzasService } from '../carrito-pizzas.service';
import { Pizza } from '../pizza-list/Pizza';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  carritoList$ :Observable<Pizza[]>;  
 constructor(private carrito:CarritoPizzasService){
  this.carritoList$ = this.carrito.carritoList.asObservable();
 }


  ngOnInit(): void {
    
  }

}
