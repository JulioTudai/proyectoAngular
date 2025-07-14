import { Pizza } from '../pizza-list/Pizza';

export interface CarritoItem {
  pizza: Pizza;
  cantidad: number;
  subtotal?: number; // Opcional, se puede calcular
}