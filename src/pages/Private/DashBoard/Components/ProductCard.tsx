import {
  Button,
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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductCard({ product }: { product: ProductInterface}) {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState<number>(0);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
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
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="h6">{"$"+product.price}</Typography>
          <Typography>{"Stock "+product.availableQuantity+" "+product.unit }</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <TextField 
          id="quantity"
          onChange={handleQuantityChange}
          sx={{ width: 150 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">{product.unit}</InputAdornment>,
            inputProps: { min: 0, max: product.availableQuantity },
          }}
          type="number"
          defaultValue={0}
          size="small"
        />
        <IconButton aria-label="Añadir al carrito">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;