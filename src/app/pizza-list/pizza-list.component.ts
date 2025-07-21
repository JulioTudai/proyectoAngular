import { Component, OnInit  } from '@angular/core';
import { Pizza } from './Pizza';
import { CarritoPizzasService } from '../carrito-pizzas.service';
import { PizzaDataService } from '../pizza-data.service';

@Component({
  selector: 'app-pizza-list',
  standalone: false,
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})


export class PizzaListComponent implements OnInit {

  
  constructor(
    private carrito:CarritoPizzasService,
    private pizzaDataService:PizzaDataService
  ) { 
    
  }
  ngOnInit(): void {
    this.pizzaDataService.getAll().subscribe((pizzas) => {
      this.pizzas = pizzas;
    })  
  }

  maxStock(mensaje:string){
    alert(mensaje)
  }


  agregarACarrito(pizza:Pizza):void{
    this.carrito.agregarACarrito(pizza)
    pizza.stock -= pizza.cantidad;
    pizza.cantidad = 0;
    }



  pizzas: Pizza[] = [];
  
  }
