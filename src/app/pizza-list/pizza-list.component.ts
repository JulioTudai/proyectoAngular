import { Component } from '@angular/core';
import { Pizza } from './Pizza';

@Component({
  selector: 'app-pizza-list',
  standalone: false,
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent {

  restarCantidad(pizza: Pizza): void {
    if (pizza.cantidad >= 1) {
      pizza.cantidad--;
    }
  }

  sumarCantidad(pizza: Pizza): void {
    if (pizza.cantidad < pizza.stock) {
      pizza.cantidad++;
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
  actualizarCantidad(event: Event, pizza: Pizza): void {
    const input = event.target as HTMLInputElement;
    const valor = input.value;
    
    // Solo actualizar el valor si es un número
    if (/^\d*$/.test(valor)) {
      const nuevaCantidad = valor ? parseInt(valor, 10) : 0;
      
      // Validar contra el stock disponible
      if (nuevaCantidad > pizza.stock) {
        pizza.cantidad = pizza.stock;
        input.value = pizza.stock.toString();
      } else if (nuevaCantidad < 1) {
        pizza.cantidad = 1;
        input.value = '1';
      } else {
        pizza.cantidad = nuevaCantidad;
      }
    } else {
      // Si no es un número, mantener el valor anterior
      input.value = pizza.cantidad.toString();
    }
  }

  pizzas: Pizza[] = [
    {
      id: 1,
      nombre: 'Mozzarella',
      precio: 2500,
      tipo: 'Clásica',
      imagen: "/assets/img/Mozzarella-pizza.jpg",
      oferta: true,
      stock: 0,
      cantidad: 0
    },
    {
      id: 2,
      nombre: 'Napolitana',
      precio: 2800,
      tipo: 'Clásica',
      imagen: "/assets/img/images.jpeg",
      oferta: true,
      stock: 0,
      cantidad: 0
    },
    {
      id: 3,
      nombre: 'Especial',
      precio: 3000,
      tipo: 'Gourmet',
      imagen: "/assets/img/nu04s777Q_720x0__1.jpg",
      oferta: false,
      stock: 10,
      cantidad: 0 
    }
  ]

  
}
