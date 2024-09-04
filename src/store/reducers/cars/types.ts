import { type Cars } from '../../../types';

export interface CarsState {
  cars: Cars[];
  selectedCarId: string | null;
}
