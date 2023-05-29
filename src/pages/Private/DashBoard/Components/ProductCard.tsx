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
import { AppStore, Product as ProductInterface } from "@/models";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/utils";
import { useSelector } from "react-redux";

function ProductCard({ product }: { product: ProductInterface }) {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state: AppStore) => state.shoppingCart);

  const [quantity, setQuantity] = useState<number>(0);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleProductClick = () => {
    window.open(`/product/${product.id}`, "_blank");
  };

  const handleAddToCart = () => {
    addProduct(product, quantity, shoppingCart, dispatch);
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
          image={product?.image || "https://thumbs.dreamstime.com/z/imagen-del-tema-de-los-productos-agr%C3%ADcolas-34266908.jpg"}
          alt={"Imagen producto " + product.name}
        />
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="h6">{"$" + product.price}</Typography>
          <Typography>
            {`Disponible ${product.availableQuantity} ${product.unit}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <TextField
          id="quantity"
          onChange={handleQuantityChange}
          sx={{ width: 150 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">{product.unit}</InputAdornment>
            ),
            inputProps: { min: 0, max: product.availableQuantity },
          }}
          type="number"
          defaultValue={0}
          size="small"
        />
        <IconButton
          onClick={() => handleAddToCart()}
          aria-label="Añadir al carrito"
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
