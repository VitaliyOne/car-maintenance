import { AuthState } from './types';

export const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token')
};
