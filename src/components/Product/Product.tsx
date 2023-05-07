import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product as ProductInterface } from "@/models";

function Product({ product }: { product: ProductInterface}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image= {product.image}
        alt={"Imagen producto "+product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography>{product.description}</Typography>
        <Typography>{"$ "+product.price}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Añadir al carrito">
          <AddShoppingCartIcon />
        </IconButton>
        <Button variant="contained" size="small">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;