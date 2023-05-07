import { Product } from "@/components";
import { Grid } from "@mui/material";
import { Product as ProductInterface } from "@/models";

function ProductsGrid({ products }: { products: ProductInterface[] }) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Product product={product}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductsGrid;