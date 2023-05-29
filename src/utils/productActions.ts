import { api } from "@/common";
import { Product, ProductsFilters } from "@/models";
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

export const createProduct = (product: Product) => {
  const response = async () => {
    const data = await post(api.createProduct, product);
    return data;
  };

  response()
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.error(e);
    });
};
