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
      const fuel = state.fuels.find((item) => item.id === payload.id);
      if (fuel) Object.assign(fuel, payload);
    },
    removeFuelInfo: (state, action: PayloadAction<IFuelForm['id']>) => {
      const { payload: fuelId } = action;
      state.fuels = state.fuels.filter((item) => item.id !== fuelId);
    }
  }
})

export const { addFuelInfo, deleteFuelInfo, updateFuelInfo, removeFuelInfo } = fuelSlice.actions;

export default fuelSlice;