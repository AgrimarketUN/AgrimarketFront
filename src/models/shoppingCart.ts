export type shoppingCart = {
  [productId: number]: {
    quantity: number;
    availableQuantity: number;
    price: number;
    name: string;
    unit: string;
    image?: string;
    expiryDate?: Date;
  };
};
