import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const {price, itemName} = action.payload;

            // written in Immer format, we cannot actually mutate the state.
            state.items.push(`${itemName}: $${price}`);
            
        }
    }
});

export const summaryReducer = summarySlice.reducer;

export const currentList = (state) => {
    return state.summary.items;
}

export const {addItem} = summarySlice.actions;
