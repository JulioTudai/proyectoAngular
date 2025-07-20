import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoPizzasService } from './carrito-pizzas.service';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'The Good Pizza';

  constructor(
    private router: Router,
    private carritoService: CarritoPizzasService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.carritoService.vaciarCarrito();
      });
  }
}
