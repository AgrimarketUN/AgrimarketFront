import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product as ProductInterface } from "@/models";
import { useNavigate } from "react-router-dom";

function Product({ product }: { product: ProductInterface}) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
  };

  const handleBuy = () => {
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea 
        onClick={() => {handleProductClick()}}
      >
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
      </CardActionArea>
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