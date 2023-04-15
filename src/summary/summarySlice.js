import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fruits: [],
    vegetables: [],
    dairy: [],
    leanmeat: [],
    redmeat: [],
    vegetarianprotein: []
};

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        addItemToSummary: (state, action) => {
            const { price, itemName, groceryType } = action.payload;
            const removeSpacesGrocery = groceryType.replaceAll(' ', '');
            const lowerCaseGroceryType = removeSpacesGrocery.toLowerCase();
            console.log('lower case grocery type: ', lowerCaseGroceryType);
            let exist = false;

            state[lowerCaseGroceryType].forEach((grocery) => {
                if (grocery.groceryName === itemName) {
                    grocery.quantity++;
                    exist = true;
                }
            });

            if (!exist) {
                console.log('doesnt exist, hooray');
                state[lowerCaseGroceryType].push({
                    groceryName: itemName,
                    price: price,
                    quantity: 1
                });
            }

            return state;
        }
    }
});

export const summaryReducer = summarySlice.reducer;

export const findCurrentSpecificList = ( groceryType) => (state) => {

    const removeSpacesGrocery = groceryType.replaceAll(' ', '');
    const lowerCaseGroceryType = removeSpacesGrocery.toLowerCase();
    return state.summary[lowerCaseGroceryType];

}

export const { addItemToSummary } = summarySlice.actions;
