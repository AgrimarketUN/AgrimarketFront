import React from "react";
import { PrivateGrid } from "@/common";
import ProductsGrid from "./Components/ProductsGrid";
import { Grid } from "@mui/material";
import FiltersCard from "./Components/FiltersCard";
import { useSelector } from "react-redux";
import { AppStore } from "@/models";
import { getProducts, getSellerProducts } from "@/utils";

const DashBoard: React.FC<{}> = () => {
  const isSeller = useSelector((state: AppStore) => state.user.isSeller);
  const filters = useSelector((state: AppStore) => state.filters);

  React.useEffect(() => {
    if (isSeller) {
      getSellerProducts();
    } else {
      getProducts(filters);
    }
  }, [filters]);

  return (
    <PrivateGrid>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FiltersCard />
        </Grid>
        <Grid item xs={10}>
          <ProductsGrid />
        </Grid>
      </Grid>
    </PrivateGrid>
  );
};

export default DashBoard;
