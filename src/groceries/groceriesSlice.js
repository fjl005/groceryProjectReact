import { PRODUCE } from "./data/PRODUCE";
import { PROTEIN } from './data/PROTEIN';
import {createSlice} from '@reduxjs/toolkit';
import { validateBudgetInput } from "../utils/validateBudgetInput";
import { validateBudgetInRedux } from "../utils/validateBudgetInRedux";

const initialState = {
    budget: null,
    produce: PRODUCE,
    protein: PROTEIN
};

const groceriesSlice = createSlice({
    name: 'groceries',
    initialState,
    reducers: {
        updateBudget: (state, action) => {
            state.budget = state.budget - action.payload;
        },

        setBudget: (state, action) => {
            const budgetInput = action.payload;

            if (validateBudgetInRedux(budgetInput)) {
                state.budget = null;

            } else {
                state.budget = budgetInput;
            }
        },

        addGroceryReducer: (state, action) => {
            const {name, price, groceryType, category} = action.payload;
            const lowerCaseCategory = category.toLowerCase();
            const newGrocery = {
                name: name,
                price: price
            }

            state[lowerCaseCategory].map((item) => {
                if (item.groceryType === groceryType) {
                    item.items.push(newGrocery);
                }

            });
            
            return state;
            
        },

        // Need to work on this next
        updateGroceryReducer: (state, action) => {
            const {name, price, groceryType, category} = action.payload;
            const lowerCaseCategory = category.toLowerCase();

            const groceryTypeObject = state[lowerCaseCategory].find((type) => (type.groceryType === groceryType));
            groceryTypeObject.items.map((item) => {
                if (item.name === name) {
                    item.price = price;
                }
            });
            return state;
        },

        deleteGroceryReducer: (state,action) => {
            const {name, groceryType, category} = action.payload;
            const lowerCaseCategory = category.toLowerCase();

            const groceryTypeObject = state[lowerCaseCategory].find((type) => (type.groceryType === groceryType));
            const indexRemoval = groceryTypeObject.items.find((item) => item.name === name);
            groceryTypeObject.items.splice(indexRemoval, 1);
            console.log('completed');
        }
    }
});

export const groceriesReducer = groceriesSlice.reducer;

export const {updateBudget, setBudget, addGroceryReducer, updateGroceryReducer, deleteGroceryReducer} = groceriesSlice.actions;

export const currentBudget = (state) => {
    return state.groceries.budget;
}

export const findCategory = (category) => (state) => {

    const lowerCaseCategory = category.toLowerCase();
    return state.groceries[lowerCaseCategory];

}

export const findGroceryType = (category, groceryType) => (state) => {
    let returnGroceryType;

    category.map((findType) => {
        if (findType.groceryType === groceryType) {
            returnGroceryType = findType;
        }
    })

    return returnGroceryType;
}