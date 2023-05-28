import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { productsSubjectService as productsService } from "@/services";
import { useEffect, useState } from "react";
import { AppStore, Product } from "@/models";
import { useSelector } from "react-redux";
import filter from "../Utils/filter";

function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const productsSubscription$ = productsService.getSubject();
  const filters = useSelector((state: AppStore) => state.filters);

  useEffect(() => {
    productsSubscription$.subscribe((data) => {
      setProducts(data as Product[]);
    });
  }, []);

  useEffect(() => {
    //console.log("filters", filters);
    setProducts(filter(products, filters));
  }, [filters]);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductsGrid;
