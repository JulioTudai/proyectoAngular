import { TestBed } from '@angular/core/testing';

import { CarritoPizzasService } from './carrito-pizzas.service';

describe('CarritoPizzasService', () => {
  let service: CarritoPizzasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoPizzasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
