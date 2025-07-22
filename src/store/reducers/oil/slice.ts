import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, REDUCER_PATH } from './const';
import { IOilChangeForm } from '../../../components/oilChange/types';

const oilChangeSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {
    addOilChangeInfo: (state, action: PayloadAction<IOilChangeForm>) => {
      state.oilChanges.unshift(action.payload);
    },
    deleteOilChangeInfo: (state) => {
      state.oilChanges = [];
    },
    updateOilChangeInfo: (state, action: PayloadAction<IOilChangeForm>) => {
      const { payload } = action;
      const oilChange = state.oilChanges;
      oilChange.find((item) => item.id === payload.id);
      if (oilChange) Object.assign(oilChange, payload);
    },
    removeOilChangeInfo: (state, action: PayloadAction<IOilChangeForm['id']>) => {
      const { payload: oilChangesId } = action;
      state.oilChanges = state.oilChanges.filter((item) => item.id !== oilChangesId);
    }
  }
});

export const { addOilChangeInfo, deleteOilChangeInfo, updateOilChangeInfo, removeOilChangeInfo } =
  oilChangeSlice.actions;

export default oilChangeSlice;
