import { AppStore} from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/userState";
import { shoppingCartSlice } from "./states/shoppingCartState";
import { filtersSlice } from "./states/filtersState";

const Store = configureStore<AppStore>({
  reducer:{user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  filters: filtersSlice.reducer,}
});

export default Store;