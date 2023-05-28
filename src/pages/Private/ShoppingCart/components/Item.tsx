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
import { AppStore, Product } from "@/models";
import { deleteProduct, getProduct, updateProduct } from "@/utils";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

interface CartProps {
  productId: string;
};

export const Item: React.FC<CartProps> = ({ productId }) => {
  const dispatcher = useDispatch();
  const shoppingCart = useSelector((state: AppStore) => state.shoppingCart);
  const item = shoppingCart[parseInt(productId)];
  const [newQuantity, setNewQuantity] = useState<number>(item.quantity);

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

  return (
    <div>
      <Card sx={{ display: "flex", width: "100 vw", mb: "0.5rem" }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={
            item?.image ||
            "https://thumbs.dreamstime.com/z/imagen-del-tema-de-los-productos-agr%C3%ADcolas-34266908.jpg"
          }
          alt="Imagen Producto"
        />
        <CardContent sx={{ width: "20rem" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", ml: "0.2rem", my: "1rem" }}
          >
            {item.name}
          </Typography>
          <Typography sx={{ ml: "0.2rem" }}>Fecha de expiración</Typography>
          <Typography sx={{ ml: "0.2rem" }}>
            {item?.expiryDate?.toLocaleDateString() || "-"}
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
                  disabled={newQuantity === 0}
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
                        {item.unit}
                      </InputAdornment>
                    ),
                    inputProps: { min: 0, max: item.availableQuantity },
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
                >{`Disponible ${item.availableQuantity} ${item.unit}`}</Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              onClick={() =>
                handleUpdate(
                  productId,
                  newQuantity,
                  item.availableQuantity
                )
              }
            >
              Confirmar modificación
            </Button>
          </Stack>
        </CardActions>
        <CardContent sx={{ width: "30%" }}>
          <Typography variant="h5" sx={{ mx: "1rem", my: "4rem" }}>
            {`$ ${item.price * newQuantity}`}
          </Typography>
        </CardContent>
        <Divider orientation="vertical" flexItem />
        <CardActions>
          <IconButton
            aria-label="deleteIcon"
            onClick={() => handleDelete(productId)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Divider sx={{ mb: "0.5rem" }} />
    </div>
  );
};
