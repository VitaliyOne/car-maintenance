import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, REDUCER_PATH } from "./const";
import { IRepairCostsForm } from "../../../components/repairCosts/types";

const repairCostsSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {
    addRepairCostsInfo: (state, action: PayloadAction<IRepairCostsForm>) => {
      state.repairCosts.unshift(action.payload);
    },
    deleteRepairCostsInfo: (state) => {
      state.repairCosts = [];
    },
    updateRepairCostsInfo: (state, action: PayloadAction<IRepairCostsForm>) => {
      const { payload } = action;
      const repairCost = state.repairCosts
      repairCost.find((item) => item.id === payload.id);
      if (repairCost) Object.assign(repairCost, payload);
    },
    removeRepairCostsInfo: (state, action: PayloadAction<IRepairCostsForm['id']>) => {
      const { payload: repairCostId } = action;
      state.repairCosts = state.repairCosts.filter((item) => item.id !== repairCostId);
    }
  }
})

export const { addRepairCostsInfo, deleteRepairCostsInfo, updateRepairCostsInfo, removeRepairCostsInfo } = repairCostsSlice.actions;

export default repairCostsSlice;