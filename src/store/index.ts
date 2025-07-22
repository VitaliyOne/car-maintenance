import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carsSlice from './reducers/cars/slice';
import fuelSlice from './reducers/fuels/slice';
import oilChangeSlice from './reducers/oil/slice';
import localTimeSlice from './reducers/localTime/slice';
import repairCostsSlice from './reducers/repair/slice';
import technicalMaintenancesSlice from './reducers/technicalMaintenance/slice';
import tuningSlice from './reducers/tuning/slice';
import authSlice from './reducers/auth/slice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  cars: carsSlice.reducer,
  fuels: fuelSlice.reducer,
  oilChange: oilChangeSlice.reducer,
  localTime: localTimeSlice.reducer,
  repairCosts: repairCostsSlice.reducer,
  technicalMaintenance: technicalMaintenancesSlice.reducer,
  tuning: tuningSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
