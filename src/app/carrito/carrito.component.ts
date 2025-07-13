import { Component, Input } from '@angular/core';
import { CarritoItem } from './Carrito';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  @Input() carritoItms: CarritoItem[] = [];

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
