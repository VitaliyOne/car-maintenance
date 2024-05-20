import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, REDUCER_PATH } from "./const";
import { ITechnicalMaintenanceForm } from "../../../components/technicalMaintenance/types";

const technicalMaintenancesSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {
    addTechnicalMaintenancesInfo: (state, action: PayloadAction<ITechnicalMaintenanceForm>) => {
      state.technicalMaintenances.unshift(action.payload);
    },
    deleteTechnicalMaintenancesInfo: (state) => {
      state.technicalMaintenances = [];
    },
    updateTechnicalMaintenancesInfo: (state, action: PayloadAction<ITechnicalMaintenanceForm>) => {
      const { payload } = action;
      const oilChange = state.technicalMaintenances
      oilChange.find((item) => item.id === payload.id);
      if (oilChange) Object.assign(oilChange, payload);
    },
    removeTechnicalMaintenancesInfo: (state, action: PayloadAction<ITechnicalMaintenanceForm['id']>) => {
      const { payload: fuelId } = action;
      state.technicalMaintenances = state.technicalMaintenances.filter((item) => item.id !== fuelId);
    }
  }
})

export const { addTechnicalMaintenancesInfo, deleteTechnicalMaintenancesInfo, updateTechnicalMaintenancesInfo, removeTechnicalMaintenancesInfo } = technicalMaintenancesSlice.actions;

export default technicalMaintenancesSlice;