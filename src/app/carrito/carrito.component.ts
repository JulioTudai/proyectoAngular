import { Component, Input, OnInit } from '@angular/core';
import { CarritoItem } from './Carrito';
import { CarritoPizzasService } from '../carrito-pizzas.service';
@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {
  @Input() carritoItms: CarritoItem[] = [];

 constructor(private carrito:CarritoPizzasService){}


  ngOnInit(): void {
    
  }

  // Calcular subtotal para un ítem
  getSubtotal(item: CarritoItem): number {
    return item.precio * item.cantidad;
  }

  // Calcular total para todos los ítems
  getTotal(): number {
    return this.carritoItms.reduce((total, item) => total + this.getSubtotal(item), 0);
  }

  // Eliminar ítem del carrito
  removeItem(index: number): void {
    if (index >= 0 && index < this.carritoItms.length) {
      this.carritoItms.splice(index, 1);
    }
  }
}
