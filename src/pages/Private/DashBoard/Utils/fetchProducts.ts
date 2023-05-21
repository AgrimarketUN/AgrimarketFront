import { api } from "@/common";
import { Product, ProductsFilters } from "@/models";
import { EmptyFiltersState } from "@/redux/states/filtersState";
import { productsSubjectService as productsService } from "@/services";
import { get } from "@/services";
import filter from "./filter";

const getProducts = async () => {
  const data = await get(api.getproducts);
  return data.Products as Product[];
};

export const fetchProducts = (filters: ProductsFilters) => {
  const promise = getProducts();

    promise
      .then((data) => {
        if(filters !== EmptyFiltersState){
          productsService.setSubject(filter(data, filters));
        }else{
          productsService.setSubject(data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
}