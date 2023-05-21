import { addItem } from "@/redux/states/shoppingCartState";
import { Dispatch } from "@reduxjs/toolkit";

const addProduct = (productId: number, quantity: number, stock: number, dispatch: Dispatch) => {
  dispatch(addItem({ productId, quantity, stock }));
};

export default addProduct;