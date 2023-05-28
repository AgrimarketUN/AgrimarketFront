import { api } from "@/common";
import { Product } from "@/models";
import { get } from "@/services";

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const data = await get(api.getProduct + id);
    return data.Product as Product;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

