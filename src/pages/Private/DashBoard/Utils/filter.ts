import { Product, ProductsFilters } from "@/models";

function filter(products: Product[], filters: ProductsFilters): Product[] {
  const filteredProducts = products.filter(
    (product: Product) =>
      (filters.Search
        ? product.name.toLowerCase().includes(filters.Search.toLowerCase())
        : true) &&
      (filters.Category ? product.categoryId === filters.Category : true) &&
      (filters.Organic ? product.organicCertifications : true) &&
      (filters.PriceMin ? product.price >= filters.PriceMin : true) &&
      (filters.PriceMax ? product.price <= filters.PriceMax : true)
  );

  switch (filters.OrderBy) {
    case 1:
      return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 2:
      return filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    case 3:
      return filteredProducts.sort((a, b) => a.price - b.price);  
    case 4:
      return filteredProducts.sort((a, b) => b.price - a.price);
  };

  return filteredProducts;
}

export default filter;