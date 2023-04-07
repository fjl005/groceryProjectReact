import { configureStore } from '@reduxjs/toolkit';
import { groceriesReducer } from '../groceries/groceriesSlice';

export const store = configureStore({
  reducer: {
    groceries: groceriesReducer
  },
});
