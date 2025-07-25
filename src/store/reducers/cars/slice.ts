import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, REDUCER_PATH } from './const';
import { Cars } from '../../../types';

const carsSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {
    addCar: (state, action: PayloadAction<Cars>) => {
      state.cars.unshift(action.payload);
    },
    selectCar: (state, action: PayloadAction<string>) => {
      state.selectedCarId = action.payload;
    },
    deleteCar: (state, action: PayloadAction<string>) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
      if (state.selectedCarId === action.payload) {
        state.selectedCarId = state.cars[0]?.id || null;
      }
    },
    updateCar: (state, action: PayloadAction<Cars>) => {
      const { payload } = action;
      const car = state.cars.find((item) => item.id === payload.id);
      if (car) Object.assign(car, payload);
    }
  }
});

export const { addCar, selectCar, updateCar, deleteCar } = carsSlice.actions;

export default carsSlice;
