import React from "react";
import { PrivateGrid } from "@/common";
import ProductsGrid from "./Components/ProductsGrid";
import { Grid } from "@mui/material";
import FiltersCard from "./Components/FiltersCard";
import { useSelector } from "react-redux";
import { AppStore } from "@/models";
import { getProducts } from "@/utils";

const DashBoard: React.FC<{}> = () => {
  const filters = useSelector((state: AppStore) => state.filters);

  React.useEffect(() => getProducts(filters), [filters]);

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
