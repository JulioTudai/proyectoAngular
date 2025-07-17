import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../pizza-list/Pizza';
@Component({
  selector: 'app-input-integer',  
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {

  
  constructor() { }
  @Input({ required: true } ) cantidad!: number //hice de todo y por esto es que cambie el proyecto en un momento volvi como 3 commits para atras
                          //pero si no le ponia el signo! que no me parece algo adecuado no me lo toma
                          //y ahora volvia a llegar a la misma parte siguiendo los pasos y otra vez en la misma
                          //que salga lo que tenga que salgar
  @Input({ required: true }) stock!: number
  @Output() cantidadChange = new EventEmitter<number>();  
  @Output() maxStock = new EventEmitter<string>();


  ngOnInit(): void {
  }
  restarCantidad(): void {
      if (this.cantidad >= 1) {
        this.cantidad--;
        this.cantidadChange.emit(this.cantidad);  
      }
    }
  
    sumarCantidad(): void {
      if (this.cantidad < this.stock) {
        this.cantidad++;
        this.cantidadChange.emit(this.cantidad)
      }
      else{
        this.maxStock.emit("stock maximo");
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
    actualizarCantidad(event: Event): void {
      const input = event.target as HTMLInputElement;
      const valor = input.value;
      
      // Solo actualizar el valor si es un número
      if (/^\d*$/.test(valor)) {
        const nuevaCantidad = valor ? parseInt(valor, 10) : 0;
        
        // Validar contra el stock disponible
        if (nuevaCantidad > this.stock) {
          this.cantidad = this.stock;
          input.value = this.stock.toString();
        } else if (nuevaCantidad < 1) {
          this.cantidad = 1;
          input.value = '1';
        } else {
          this.cantidad = nuevaCantidad;
          this.cantidadChange.emit(this.cantidad);  
         
        }
      } else {
        // Si no es un número, mantener el valor anterior
        input.value = this.cantidad.toString();
      }
    }

}
