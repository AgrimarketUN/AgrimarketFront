import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product as ProductInterface } from "@/models";
import { useState } from "react";
import addProduct from "@/utils/addProduct";
import { useDispatch } from "react-redux";

function ProductCard({ product }: { product: ProductInterface }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(0);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleProductClick = () => {
    window.open(`/product/${product.id}`, "_blank");
  };

  const handleAddToCart = (
    productId: number,
    quantity: number,
    stock: number
  ) => {
    addProduct(productId, quantity, stock, dispatch);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          handleProductClick();
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={product.image}
          alt={"Imagen producto " + product.name}
        />
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="h6">{"$" + product.price}</Typography>
          <Typography>
            {"Stock " + product.availableQuantity + " " + product.unit}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <TextField
          id="quantity"
          onChange={handleQuantityChange}
          sx={{ width: 150 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{product.unit}</InputAdornment>
            ),
            inputProps: { min: 0, max: product.availableQuantity },
          }}
          type="number"
          defaultValue={0}
          size="small"
        />
        <IconButton
          onClick={() => {
            handleAddToCart(product.id, quantity, product.availableQuantity);
          }}
          aria-label="Añadir al carrito"
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;