import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza-list/Pizza';
import { tap } from 'rxjs/operators';

const URL = 'https://6879c0a3abb83744b7e9e3d5.mockapi.io/api/v1/pizzas/pizza' // mokapi pizzas

@Injectable({
  providedIn: 'root'
})
export class PizzaDataService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<Pizza[]> {


    return this.http.get<Pizza[]>(URL)// por lo que entiendo las pipes, son similares a las anotaciones lamda
    .pipe(
      tap((pizzas: Pizza[]) =>{
        pizzas.forEach(pizza => {
          pizza.cantidad = 0;
        });
      })
    );
  }



}
