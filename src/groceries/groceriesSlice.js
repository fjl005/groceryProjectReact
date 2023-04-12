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
            state.budget = state.budget - action.payload;
        },

        setBudget: (state, action) => {
            state.budget = action.payload;
        },

        addGrocery: (state, action) => {
            const {name, price, groceryType, category} = action.payload;
            const lowerCaseCategory = category.toLowerCase();
            const newGrocery = {
                name: name,
                price: price
            }

            state[lowerCaseCategory].map((item) => {
                if (item.name === groceryType) {
                    item.items.push(newGrocery);
                }

            });
            return state;
            
        },

        // Need to work on this next
        updateGrocery: (state, action) => {
            // const {name, price, groceryType, category} = action.payload;
            // const lowerCaseCategory = category.toLowerCase();

            // console.log('i assume this works');
            // const groceryTypeObject = state[lowerCaseCategory].find((type) => (type.name === groceryType));
            // console.log('groceryTypeObject: ', groceryTypeObject);
            // groceryTypeObject.items.map((item) => {
            //     if (item.name === name) {
            //         console.log('this works');
            //         item.price = price;
            //     }
            // });

            return state;
        }
    }
});

export const groceriesReducer = groceriesSlice.reducer;

export const {updateBudget, setBudget, addGrocery, updateGrocery} = groceriesSlice.actions;

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
        if (findType.name === groceryType) {
            returnGroceryType = findType;
        }
    })

    return returnGroceryType
}

//     return state.groceries.protein;
// };