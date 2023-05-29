import { api } from "@/common";
import { NewProduct, Product, ProductsFilters } from "@/models";
import { filter } from "@/pages";
import { EmptyFiltersState } from "@/redux/states/filtersState";
import { post, productsSubjectService as productsService } from "@/services";
import { get } from "@/services";

export const getProducts = (filters: ProductsFilters) => {
  const response = async () => {
    const data = await get(api.getProducts);
    return data.Products as Product[];
  };

  response()
    .then((data) => {
      if (filters !== EmptyFiltersState) {
        productsService.setSubject(filter(data, filters));
      } else {
        productsService.setSubject(data);
      }
    })
    .catch((e) => {
      console.error(e);
    });
};

export const getSellerProducts = () => {//filters: ProductsFilters) => {
  const response = async () => {
    const data = await get(api.addItem);//api.getSellerProducts);
    return data.Products as Product[];
  };

  response()
    .then((data) => {
      console.log(data);
      /*if (filters !== EmptyFiltersState) {
        productsService.setSubject(filter(data, filters));
      } else {
        productsService.setSubject(data);
      }*/
      productsService.setSubject(data);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const data = await get(api.getProduct + id);
    return data.Product as Product;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const createProduct = async (newProduct: NewProduct): Promise<NewProduct> => {
  try {
    const data = await post(api.createProduct, newProduct);
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export const updateProductSell = async (product: NewProduct, id: string): Promise<NewProduct> => {
  try {
    const data = await post(api.updateProduct+id, product);
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export const deleteProductSell = async (id: string): Promise<string> => {
  try {
    const data = await post(api.deleteProduct, { productId: id });
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}