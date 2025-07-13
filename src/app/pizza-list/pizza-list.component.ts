import { Component } from '@angular/core';
import { Pizza } from './Pizza';

@Component({
  selector: 'app-pizza-list',
  standalone: false,
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent {
  pizzas: Pizza[] = [
    {
      nombre: 'Mozzarella',
      precio: 2500,
      tipo: 'Clásica',
      imagen: "/assets/img/Mozzarella-pizza.jpg",
      oferta: true
    },
    {
      nombre: 'Napolitana',
      precio: 2800,
      tipo: 'Clásica',
      imagen: "/assets/img/images.jpeg",
      oferta: false
    },
    {
      nombre: 'Especial',
      precio: 3000,
      tipo: 'Gourmet',
      imagen: "/assets/img/nu04s777Q_720x0__1.jpg",
      oferta: false
    }
  ]

  
}
