import { Component, Input } from '@angular/core';
import { CarritoItem } from './Carrito';
import { Pizza } from '../pizza-list/Pizza';

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
    return item.pizza.precio * item.cantidad;
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
  sumarCantidad(item: CarritoItem,): void {
    if (item.cantidad < item.pizza.cantidad ) {
      item.cantidad++;
    }
  }

  restarCantidad(item: CarritoItem): void {
    if (item.cantidad > 1) {
      item.cantidad--;
    }
  } 
  //les juro que en estas validaciones no me ayudo chat.... dijo nadie nunca.
  // Valida que solo se ingresen números y teclas de control
  soloNumeros(event: KeyboardEvent): boolean {
    // Permitir teclas de control (backspace, tab, enter, flechas, etc.)
    const teclasPermitidas = [
      'Backspace', 'Tab', 'Enter', 'Delete', 'ArrowLeft', 
      'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'
    ];
    
    // Si es un número o una tecla permitida, permitir la acción
    if (/^[0-9]$/i.test(event.key) || teclasPermitidas.includes(event.key)) {
      return true;
    }
    
    // Prevenir cualquier otra tecla
    event.preventDefault();
    return false;
  }

  // Maneja el evento input para actualizar la cantidad
  validarCantidad(event: Event, item: CarritoItem): void {
    const input = event.target as HTMLInputElement;
    const valor = input.value;
    
    // Solo actualizar el valor si es un número
    if (/^\d*$/.test(valor)) {
      item.cantidad = valor ? parseInt(valor, 10) : 0;
    } else {
      // Si no es un número, mantener el valor anterior
      input.value = item.cantidad.toString();
    }
  }

  // Valida los límites cuando el input pierde el foco
  validarLimites(item: CarritoItem): void {
    // Asegurar que esté dentro de los límites
    if (item.cantidad < 1) {
      item.cantidad = 1;
    } else if (item.cantidad > item.pizza.cantidad) {
      item.cantidad = item.pizza.cantidad;
    }
  }
}
