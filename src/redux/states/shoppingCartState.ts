import { shoppingCart } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyShoppingCartState: shoppingCart = {};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: EmptyShoppingCartState,
  reducers: {
    setShoppingCart: (state, action) => action.payload,
    addItem: (state, action) => {
      const stateQuantity = state[action.payload.productId];
      const quantity = action.payload.quantity;
      const sum = stateQuantity + quantity;
      const stock = action.payload.stock;
      if (
        !!stateQuantity &&
        quantity > 0 &&
        sum <= stock
      ) {
        state[action.payload.productId] += quantity;
        return;
      } else if ( sum > stock || quantity > stock || quantity <= 0) {
        return;
      }
      state[action.payload.productId] = action.payload.quantity;
    },
    removeItem: (state, action) => {
      delete state[action.payload.productId];
    },
    updateItemQuantity: (state, action) => {
      state[action.payload.productId] = action.payload.quantity;
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
