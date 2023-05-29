import { api } from "@/common";
import { Product, shoppingCart } from "@/models";
import {
  addItem,
  clearShoppingCart,
  removeItem,
  setShoppingCart,
  updateItemQuantity,
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
  product: Product,
  quantity: number,
  shoppingCart: shoppingCart,
  dispatch: Dispatch
) => {
  const id = product.id;
  const item = shoppingCart[id];
  const availableQuantity = product.availableQuantity;
  const prevQuantity = item?.quantity || 0;
  const sum = prevQuantity + quantity;

  const value = {
    quantity: quantity,
    availableQuantity: availableQuantity,
    price: product.price,
    name: product.name,
    unit: product.unit,
    image: product.image,
    expiryDate: product.expiryDate,
  };

  if (
    item !== undefined &&
    !!prevQuantity &&
    quantity > 0 &&
    sum <= availableQuantity
  ) {
    updateProduct(id.toString(), sum, availableQuantity, dispatch);
  } else if (
    sum > availableQuantity ||
    quantity > availableQuantity ||
    quantity <= 0
  ) {
    return Error("Cantidad inválida");
  }

  await post(api.addItem + id.toString(), value)
    .then((data) => {
      dispatch(addItem({ productId: id, value }));
      return data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const updateProduct = async (
  id: string,
  quantity: number,
  availableQuantity: number,
  dispatch: Dispatch
) => {
  const response = async () => {
    const data = await post(api.updateItem + id.toString(), {
      quantity: quantity,
    });
    return data;
  };

  if (quantity < 0 || quantity > availableQuantity) {
    return Error("Cantidad inválida");
  }

  response()
    .then((data) => {
      dispatch(updateItemQuantity({ productId: id, quantity: quantity }));
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
