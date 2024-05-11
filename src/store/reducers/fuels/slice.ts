import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, REDUCER_PATH } from "./const";
import { IFuelForm } from "../../../components/FuelFilling/types";


const fuelSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {
    addFuelInfo: (state, action: PayloadAction<IFuelForm>) => {
      state.fuels.unshift(action.payload);
    },
    deleteFuelInfo: (state) => {
      state.fuels = [];
    },
    updateFuelInfo: (state, action: PayloadAction<IFuelForm>) => {
      const { payload } = action;
      const car = state.fuels.find((item) => item.id === payload.id);
      if (car) Object.assign(car, payload);
    }
  }
})

export const { addFuelInfo, deleteFuelInfo, updateFuelInfo } = fuelSlice.actions;

export default fuelSlice;