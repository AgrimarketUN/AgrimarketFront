import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Autocomplete,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";
import { Buy } from "@/pages/Private/Purchase/components/Buy";
import { PrivateGrid } from "@/common";
import { useSelector } from "react-redux";
import { AppStore } from "@/models";
import { buyCart } from "@/utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Purchase: React.FC = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const shoppingCart = useSelector((state: AppStore) => state.shoppingCart);

  const total = () => {
    let total = 0;
    Object.entries(shoppingCart).map(
      ([_, value]) => {
        (total += value.quantity * value.price);}
    );
    return total;
  };

  const handleBuy = () => {
    buyCart(dispatcher)
    .then(() => navigate("/purchaseExit"))
  };

  return (
    <PrivateGrid>
      <h1>Detalles compra</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ width: "100%", textAlign: "left" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack>
                {Object.entries(shoppingCart).map(([productId, quantity]) => (
                  <Buy
                    productId={productId}
                    key={productId}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "h5.fontSize", mb: "1rem" }}
              >
                {"Resumen de compra"}
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize", mb: "2rem" }}>
                {`Items: ${Object.keys(shoppingCart).length}`}
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize", mb: "2rem" }}>
                {`$ ${total()}`}
              </Typography>
              <Button variant="contained" onClick={ handleBuy }>Confirmar compra</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PrivateGrid>
  );
};
