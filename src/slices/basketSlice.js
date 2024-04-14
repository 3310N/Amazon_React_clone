import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Actions
    addToBasket: (state, action) => {
      // The payload is the product that we pass in
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // Find the index of the first item that matches the id that we passed in
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      // Make a copy of the current basket
      let newBasket = [...state.items];
      // If the index is not -1, then we found the item in the basket
      if (index >= 0) {
        // Remove the item at the index
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in the basket!`
        );
      }
      // Set the basket to the new basket
      state.items = newBasket;

    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0); 

export default basketSlice.reducer;
