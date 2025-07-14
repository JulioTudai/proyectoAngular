import { Component } from '@angular/core';
import { CarritoItem } from './carrito/Carrito';
import { Pizza } from './pizza-list/Pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'The Good Pizza';
  carritoItems: CarritoItem[] = [];

  onAgregarAlCarrito(item: CarritoItem) {
    const itemExistente = this.carritoItems.find(i => i.pizza.id === item.pizza.id);
    const cantidadSolicitada = item.cantidad;
    
    // Verificar si hay suficiente stock
    if (cantidadSolicitada > item.pizza.cantidad) {
      alert(`No hay suficiente stock. Solo quedan ${item.pizza.cantidad} unidades disponibles.`);
      return;
    }
    
    if (itemExistente) {
      // Verificar si al sumar superamos el stock disponible
      const nuevaCantidad = itemExistente.cantidad + cantidadSolicitada;
      if (nuevaCantidad > item.pizza.cantidad) {
        const cantidadDisponible = item.pizza.cantidad - itemExistente.cantidad;
        alert(`Solo puedes agregar ${cantidadDisponible} unidades más de esta pizza.`);
        return;
      }
      itemExistente.cantidad = nuevaCantidad;
    } else {
      // Si es un ítem nuevo, verificar que la cantidad no supere el stock
      if (cantidadSolicitada > item.pizza.cantidad) {
        alert(`No hay suficiente stock. Solo quedan ${item.pizza.cantidad} unidades disponibles.`);
        return;
      }
      this.carritoItems.push({...item});
    }
  }
}
