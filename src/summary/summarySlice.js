import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    fruitItems: [],
    vegetableItems: [],
    dairyItems: []
};

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const {price, itemName, groceryType} = action.payload;

            switch (groceryType) {
                case ('Fruits'): {
                    state.fruitItems.push({
                    groceryName: itemName,
                    price: price,
                    quantity: 1
                    });
                    return state;
                }

                case ('Vegetables'): {
                    state.vegetableItems.push({
                    groceryName: itemName,
                    price: price,
                    quantity: 1
                    });
                    return state;
                }

                case ('Dairy'): {
                    state.dairyItems.push({
                    groceryName: itemName,
                    price: price,
                    quantity: 1
                    });
                    return state;
                }
                default:
                    return state;
            }
            
        }
    }
});

export const summaryReducer = summarySlice.reducer;

export const currentList = (state) => {
    return state.summary.items;
}

export const currentFruitList = (state) => {
    return state.summary.fruitItems;
}

export const currentVegetableList = (state) => {
    return state.summary.vegetableItems;
}

export const currentDairyList = (state) => {
    return state.summary.dairyItems;
}

// export const findQuantity = (grocery) => (state) => {
//     return state.summary.items.grocery.quantity;
// }

// export const findPrice = (grocery) => (state) => {
//     return state.summary.items.actiongrocery.price;
// }

// export const findGroceryName = (grocery) => (state) => {
//     const groceryArray = state.summary.items;
//     console.log('grocery Array', groceryArray);

//     // const groceryName = grocery.groceryName;
//     // console.log(groceryName);
    
//     // const blueberries = 'blueberries';
//     // const groceryName = groceryArray.find((item) => item === blueberries).groceryName;
//     // console.log('grocery name', groceryName);

//     // return state.summary.items.grocery.name;
// }

export const {addItem} = summarySlice.actions;
