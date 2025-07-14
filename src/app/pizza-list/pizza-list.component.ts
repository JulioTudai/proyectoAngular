import { Component, Output, EventEmitter } from '@angular/core';
import { Pizza } from './Pizza';
import { CarritoItem } from '../carrito/Carrito';

@Component({
  selector: 'app-pizza-list',
  standalone: false,
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent {
  @Output() agregarAlCarrito = new EventEmitter<CarritoItem>();
  pizzas: Pizza[] = [
    {
      id: 1,
      nombre: 'Mozzarella',
      precio: 2500,
      tipo: 'Clásica',
      imagen: "/assets/img/Mozzarella-pizza.jpg",
      oferta: true,
      cantidad: 5
    },
    {
      id: 2,
      nombre: 'Napolitana',
      precio: 2800,
      tipo: 'Clásica',
      imagen: "/assets/img/images.jpeg",
      oferta: false,
      cantidad: 5
    },
    {
      id: 3,
      nombre: 'Especial',
      precio: 3000,
      tipo: 'Gourmet',
      imagen: "/assets/img/nu04s777Q_720x0__1.jpg",
      oferta: false,
      cantidad: 5
    }
  ]

  onAgregarAlCarrito(pizza: Pizza) {
    const item: CarritoItem = {
      pizza: { ...pizza },
      cantidad: 1
    };
    this.agregarAlCarrito.emit(item);
  }
}
