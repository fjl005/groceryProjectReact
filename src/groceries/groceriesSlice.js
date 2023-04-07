import { PRODUCE } from "./data/PRODUCE";
import { PROTEIN } from './data/PROTEIN';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    budget: 0
};

const groceriesSlice = createSlice({
    name: 'groceries',
    initialState,
    reducers: {
        updateBudget: (state, action) => {
            // ...state,
            // action.budget: state[budget] + action.budget,

            // The code below is using Immer, which is directly mutating the state. However, I want to eventually write it the correct way with the spread operator; I just haven't figured that out yet.
            state.budget = state.budget - action.payload;
        },

        setBudget: (state, action) => {
            state.budget = action.payload;
        }
    }
});

export const groceriesReducer = groceriesSlice.reducer;

export const {updateBudget, setBudget} = groceriesSlice.actions;

export const currentBudget = (state) => {
    return state.groceries.budget;
}

export const produceArray = PRODUCE;
export const proteinArray = PROTEIN;