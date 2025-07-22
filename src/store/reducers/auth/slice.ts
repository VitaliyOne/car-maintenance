import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './const';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem('token');
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice;
