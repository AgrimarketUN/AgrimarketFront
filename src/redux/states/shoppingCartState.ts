import { shoppingCart } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyShoppingCartState: shoppingCart = {};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: EmptyShoppingCartState,
  reducers: {
    setShoppingCart: (state, action) => action.payload,

    addItem: (state, action) => {
      state[action.payload.productId] = action.payload.value;
    },

    removeItem: (state, action) => {
      delete state[action.payload.productId];
    },

    updateItemQuantity: (state, action) => {
      state[action.payload.productId].quantity = action.payload.quantity;
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
