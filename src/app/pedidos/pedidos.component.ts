import { Component } from '@angular/core';
import { CarritoItem } from '../carrito/Carrito';
import { Pizza } from '../pizza-list/Pizza';

@Component({
  selector: 'app-pedidos',
  standalone: false,
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {
  carritoItems: CarritoItem[] = [];

  // Obtener los IDs de las pizzas que ya están en el carrito
  get pizzasEnCarrito(): number[] {
    return this.carritoItems.map(item => item.pizza.id);
  }

  onAgregarAlCarrito(pizza: Pizza) {
    // Verificar si la pizza ya está en el carrito
    const itemExistente = this.carritoItems.find(item => item.pizza.id === pizza.id);

    if (!itemExistente) {
      // Solo agregar si no existe en el carrito
      this.carritoItems.push({
        pizza: { ...pizza },
        cantidad: 1
      });
    }
  }
}
