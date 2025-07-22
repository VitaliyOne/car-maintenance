import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, REDUCER_PATH } from './const';
import { localTimeState } from './types';

const localTimeSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {
    addLocalTimeInfo: (state, action: PayloadAction<localTimeState>) => {
      state.time = action.payload.time;
    }
  }
});

export const { addLocalTimeInfo } = localTimeSlice.actions;

export default localTimeSlice;
