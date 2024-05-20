import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, REDUCER_PATH } from "./const";
import { ITuningForm } from "../../../components/tuning/types";



const tuningSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {
    addTuningInfo: (state, action: PayloadAction<ITuningForm>) => {
      state.tuning.unshift(action.payload);
    },
    deleteTuningInfo: (state) => {
      state.tuning = [];
    },
    updateTuningInfo: (state, action: PayloadAction<ITuningForm>) => {
      const { payload } = action;
      const tuning = state.tuning.find((item) => item.id === payload.id);
      if (tuning) Object.assign(tuning, payload);
    },
    removeTuningInfo: (state, action: PayloadAction<ITuningForm['id']>) => {
      const { payload: tuningId } = action;
      state.tuning = state.tuning.filter((item) => item.id !== tuningId);
    }
  }
})

export const { addTuningInfo, deleteTuningInfo, updateTuningInfo, removeTuningInfo } = tuningSlice.actions;

export default tuningSlice;