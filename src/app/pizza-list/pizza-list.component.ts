import { Component, OnInit  } from '@angular/core';
import { Pizza } from './Pizza';
import { CarritoPizzasService } from '../carrito-pizzas.service';
@Component({
  selector: 'app-pizza-list',
  standalone: false,
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})


export class PizzaListComponent implements OnInit {

  
  constructor(private carrito:CarritoPizzasService) { 
    
  }
  ngOnInit(): void {
    
  }

  maxStock(mensaje:string){
    alert(mensaje)
  }


  agregarACarrito(pizza:Pizza):void{
    this.carrito.agregarACarrito(pizza)
    pizza.stock -= pizza.cantidad;
    pizza.cantidad = 0;
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
      oferta: false,
      stock: 5,
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
