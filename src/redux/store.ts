import { AppStore } from "@/models";
import {
  Dispatch,
  configureStore,
} from "@reduxjs/toolkit";
import { userSlice } from "./states/userState";
import { shoppingCartSlice } from "./states/shoppingCartState";
import { filtersSlice } from "./states/filtersState";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/es/storage/session";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers<AppStore>({
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  filters: filtersSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const resetStore = (dispatch: Dispatch) => {
  dispatch(userSlice.actions.clearUser());
  dispatch(shoppingCartSlice.actions.clearShoppingCart());
  dispatch(filtersSlice.actions.clearFilters());
};

export const persistor = persistStore(Store);

export default Store;
