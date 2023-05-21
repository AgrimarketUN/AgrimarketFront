import { shoppingCart, item } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyShoppingCartState: shoppingCart = {
  items: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: EmptyShoppingCartState,
  reducers: {
    setShoppingCart: (state, action) => action.payload,
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item: item) => item.product.id !== action.payload
      );
    },
    updateItemQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item: item) => item.product.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
    clearShoppingCart: () => EmptyShoppingCartState,
  },
});

export const {
  setShoppingCart,
  addItem,
  removeItem,
  updateItemQuantity,
  clearShoppingCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
