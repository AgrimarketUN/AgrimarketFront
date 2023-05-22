import { AppStore } from "@/models";
import { Dispatch, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/userState";
import { shoppingCartSlice } from "./states/shoppingCartState";
import { filtersSlice } from "./states/filtersState";

const Store = configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

export const resetStore = (dispatch: Dispatch) => {
  dispatch(userSlice.actions.clearUser());
  dispatch(shoppingCartSlice.actions.clearShoppingCart());
  dispatch(filtersSlice.actions.clearFilters());
};

export default Store;
