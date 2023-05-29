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
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppStore } from "@/models";
import { useSelector } from "react-redux";

interface BuyProps {
  productId: string;
}

export const Buy: React.FC<BuyProps> = ({ productId }) => {
  const shoppingCart = useSelector((state: AppStore) => state.shoppingCart);
  const item = shoppingCart[parseInt(productId)];

  return (
    <div>
      <Card sx={{ display: "flex", width: "100 vw", mb: "0.5rem" }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image="https://thumbs.dreamstime.com/z/imagen-del-tema-de-los-productos-agr%C3%ADcolas-34266908.jpg"
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
          <Typography sx={{ ml: "0.2rem" }}>{item?.expiryDate?.toLocaleDateString() || "-"}</Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={6} sx={{ display: "flex" }}>
              <Typography sx={{ mx: "1rem", my: "0.5rem" }}>{`${item.unit} ${item.quantity}`}</Typography>
            </Grid>
          </Grid>
        </CardActions>
        <CardContent sx={{ width: "30%" }}>
          <Typography variant="h5" sx={{ mx: "1rem", my: "4rem" }}>
          {`$ ${item.price * item.quantity}`}
          </Typography>
        </CardContent>
        <Divider orientation="vertical" flexItem />
      </Card>
      <Divider sx={{ mb: "0.5rem" }} />
    </div>
  );
};
