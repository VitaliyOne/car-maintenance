import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carsSlice from './reducers/cars/slice';

const rootReducer = combineReducers({
  cars: carsSlice
});

export const store = configureStore({
  reducer: rootReducer
});