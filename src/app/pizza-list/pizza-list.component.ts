import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  standalone: false,
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent {
  pizzas = [
    {
      name: 'Mozzarella',
      price: 2500,
      type: 'Clásica',
      quantity: 0,
      image: "img/Mozzarella-pizza.jpg"
    },
    {
      name: 'Napolitana',
      price: 2800,
      type: 'Clásica',
      quantity: 0,
      image: "img/Napolitana-pizza.jpg"
    },
    {
      name: 'Especial',
      price: 3000,
      type: 'Gourmet',
      quantity: 0,
      image: "img/Especial-pizza.jpg"
    }
  ]

}
