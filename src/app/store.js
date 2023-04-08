import { configureStore } from '@reduxjs/toolkit';
import { groceriesReducer } from '../groceries/groceriesSlice';
import { summaryReducer } from '../summary/summarySlice';

export const store = configureStore({
  reducer: {
    groceries: groceriesReducer,
    summary: summaryReducer
  },
});
