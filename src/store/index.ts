import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carsSlice from './reducers/cars/slice';
import fuelSlice from './reducers/fuels/slice';


const rootReducer = combineReducers({
  cars: carsSlice.reducer,
  fuels: fuelSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;