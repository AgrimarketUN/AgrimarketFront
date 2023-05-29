export interface Item {
  quantity: number;
  availableQuantity: number;
  price: number;
  name: string;
  unit: string;
  image?: string;
  expiryDate?: Date;
};

export type shoppingCart = {
  [productId: number]: Item;
};
