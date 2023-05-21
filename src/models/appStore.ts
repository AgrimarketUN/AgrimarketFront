import { ProductsFilters } from "./productsFilters";
import { shoppingCart } from "./shoppingCart";
import { UserInfo } from "./userInfo";

export interface AppStore {
  user: UserInfo;
  shoppingCart: shoppingCart;
  filters: ProductsFilters;
};