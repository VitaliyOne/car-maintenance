import { CarsState } from './types';

export const REDUCER_PATH = 'cars';

export const INITIAL_STATE: CarsState = {
  cars: [],
  selectedCarId: null
};
