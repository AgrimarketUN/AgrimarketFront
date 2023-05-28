import { api } from "@/common";
import { shoppingCart } from "@/models";
import {
  addItem,
  clearShoppingCart,
  removeItem,
  setShoppingCart,
} from "@/redux/states/shoppingCartState";
import { deleteReq, get, post } from "@/services";
import { Dispatch } from "@reduxjs/toolkit";

export const getShoppingCart = async (dispatch: Dispatch) => {
  const response = async () => {
    const data = await get(api.getShoppingCart);
    return data.cart as shoppingCart;
  };

  response()
    .then((cart) => {
      dispatch(setShoppingCart(cart));
    })
    .catch((e) => {
      console.error(e);
    });
};

export const addProduct = async (
  id: number,
  quantity: number,
  stock: number,
  shoppingCart: shoppingCart,
  dispatch: Dispatch
) => {
  const response = async () => {
    const data = await post(api.addItem + id.toString(), {
      quantity: quantity,
    });
    return data;
  };

  const prevQuantity = shoppingCart[id];
  const sum = prevQuantity + quantity;

  if (!!prevQuantity && quantity > 0 && sum <= stock) {
    updateProduct(id.toString(), sum, stock, dispatch);
  } else if (sum > stock || quantity > stock || quantity <= 0) {
    return Error("Cantidad inválida");
  }

  response()
    .then((data) => {
      dispatch(addItem({ productId: id, quantity: quantity }));
      return data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const updateProduct = async (
  id: string,
  quantity: number,
  stock: number,
  dispatch: Dispatch
) => {
  const response = async () => {
    const data = await post(api.updateItem + id.toString(), {
      quantity: quantity,
    });
    console.log("update:",data);
    return data;
  };

  if (quantity < 0 || quantity > stock) {
    return Error("Cantidad inválida");
  }

  response()
    .then((data) => {
      dispatch(addItem({ productId: id, quantity: quantity }));
      return data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const deleteProduct = async (id: string, dispatch: Dispatch) => {
  const response = async () => {
    const data = await deleteReq(api.deleteItem + id.toString());
    return data;
  };

  response()
    .then((data) => {
      dispatch(removeItem({ productId: id }));
      return data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const buyCart = async (dispatch: Dispatch) => {
  const response = async () => {
    const data = await get(api.buyCart);
    return data;
  };

  response()
    .then((data) => {
      dispatch(clearShoppingCart());
      return data;
    })
    .catch((e) => {
      console.error(e);
    });
};
