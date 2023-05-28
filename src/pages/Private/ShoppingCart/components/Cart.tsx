import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  TextField,
  Divider,
  Stack,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Product } from "@/models";
import { deleteProduct, getProduct, updateProduct } from "@/utils";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

interface CartProps {
  productId: string;
  quantity: number;
}

export const Cart: React.FC<CartProps> = ({ productId, quantity }) => {
  const dispatcher = useDispatch();
  const [product, setProduct] = useState<Product>({} as Product);
  const [newQuantity, setNewQuantity] = useState<number>(quantity);

  function incrementquantity() {
    const updatedquantity = newQuantity + 1;
    setNewQuantity(updatedquantity);
  }

  function decrementquantity() {
    const updatedquantity = newQuantity - 1;
    setNewQuantity(updatedquantity);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuantity(Number(e.target.value));
  };

  const handleUpdate = (id: string, quantity: number, stock: number) => {
    updateProduct(id, quantity, stock, dispatcher);
  };

  const handleDelete = (id: string) => {
    deleteProduct(id, dispatcher);
  };

  React.useEffect(() => {
    getProduct(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  return (
    <div>
      <Card sx={{ display: "flex", width: "100 vw", mb: "0.5rem" }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={
            product?.image ||
            "https://thumbs.dreamstime.com/z/imagen-del-tema-de-los-productos-agr%C3%ADcolas-34266908.jpg"
          }
          alt="Imagen Producto"
        />
        <CardContent sx={{ width: "20rem" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", ml: "0.2rem", my: "1rem" }}
          >
            {product.name}
          </Typography>
          <Typography sx={{ ml: "0.2rem" }}>Fecha de expiración</Typography>
          <Typography sx={{ ml: "0.2rem" }}>
            {product?.expiryDate?.toLocaleDateString() || "-"}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={6} sx={{ display: "flex" }}>
                <IconButton
                  onClick={decrementquantity}
                  disabled={quantity === 0}
                  aria-label="removeCircle"
                >
                  <RemoveCircleIcon />
                </IconButton>
                <TextField
                  onChange={onChange}
                  id="quantity"
                  sx={{ mx: "1rem", my: "0.5rem" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {product.unit}
                      </InputAdornment>
                    ),
                    inputProps: { min: 0, max: product.availableQuantity },
                  }}
                  value={newQuantity}
                  size="small"
                />
                <IconButton onClick={incrementquantity} aria-label="addCircle">
                  <AddCircleIcon />
                </IconButton>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{ mx: "auto" }}
                >{`Disponible ${product.availableQuantity} ${product.unit}`}</Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              onClick={() =>
                handleUpdate(
                  product.id.toString(),
                  newQuantity,
                  product.availableQuantity
                )
              }
            >
              Confirmar modificación
            </Button>
          </Stack>
        </CardActions>
        <CardContent sx={{ width: "30%" }}>
          <Typography variant="h5" sx={{ mx: "1rem", my: "4rem" }}>
            {"$ " + product.price * newQuantity}
          </Typography>
        </CardContent>
        <Divider orientation="vertical" flexItem />
        <CardActions>
          <IconButton
            aria-label="deleteIcon"
            onClick={() => handleDelete(product.id.toString())}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Divider sx={{ mb: "0.5rem" }} />
    </div>
  );
};
