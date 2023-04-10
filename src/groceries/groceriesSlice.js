import { PRODUCE } from "./data/PRODUCE";
import { PROTEIN } from './data/PROTEIN';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    budget: 0,
    produce: PRODUCE,
    protein: PROTEIN
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
        },

        addGrocery: (state, action) => {
            const {name, price, groceryType, category} = action.payload;
            const newGrocery = {
                name: name,
                price: price
            }
            
            switch (category) {
                case 'Produce': {
                    state.produce.map((item) => {
                        if (item.name === groceryType) {
                            item.items.push(newGrocery);
                        }
        
                    });
                    return state;
                }
                case 'Protein': {
                    state.protein.map((item) => {
                        if (item.name === groceryType) {
                            item.items.push(newGrocery);
                        }
        
                    });
                    return state;
                }
            }
            
        }
    }
});

export const groceriesReducer = groceriesSlice.reducer;

export const {updateBudget, setBudget, addGrocery} = groceriesSlice.actions;

export const currentBudget = (state) => {
    return state.groceries.budget;
}

// Double check if I even use these two variables? I forget...
export const produceArray = (state) => {
    return state.groceries.produce;
};

export const proteinArray = (state) => {
    return state.groceries.protein;
};