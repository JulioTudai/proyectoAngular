import { Component, OnInit } from '@angular/core';
import { CarritoPizzasService } from '../carrito-pizzas.service';
import { Pizza } from '../pizza-list/Pizza';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carritoList$: Observable<Pizza[]>;
  total$: Observable<number>;
  
  constructor(private carrito: CarritoPizzasService) {
    this.carritoList$ = this.carrito.carritoList.asObservable();
    
    // Calcular el total basado en los elementos del carrito
    this.total$ = this.carritoList$.pipe(
      map(items => {
        return items.reduce((total, item) => {
          return total + (item.precio * (item.cantidad || 0));
        }, 0);
      })
    );
  }

  ngOnInit(): void {
    // Inicialización si es necesaria
  }
}
