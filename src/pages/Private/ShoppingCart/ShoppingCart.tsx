import React, { useEffect } from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import { PrivateGrid } from "@/common";
import { CartItem } from "./components/CartItem";
import { useSelector } from "react-redux";
import { AppStore } from "@/models";
import { getShoppingCart } from "@/utils";
import { useDispatch } from "react-redux";

export interface ShoppingCartProps {}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const shoppingCart = useSelector((state: AppStore) => state.shoppingCart);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const total = () => {
    let total = 0;
    Object.entries(shoppingCart).map(
      ([_, value]) => {
        (total += value.quantity * value.price);}
    );
    setTotalPrice(total);
  };

  useEffect(() => {
    getShoppingCart(dispatcher);
    total();
  }, [shoppingCart]);

  return (
    <PrivateGrid>
      <h1>Carrito de compra</h1>
      <Box sx={{ flexGrow: 1, width: "100%" }} alignItems="center">
        <Container sx={{ width: "100%", textAlign: "left" }}>
          <Stack>
            {Object.entries(shoppingCart).map(([productId, cartItem]) => (
              <CartItem
                productId={productId}
                item={cartItem}
                key={productId}
              />
            ))}
          </Stack>
          <Typography variant="h4" align="center">
            {"$ " + totalPrice}
          </Typography>
          <Button
            sx={{ ml: "40%" }}
            variant="contained"
            onClick={() => navigate("/purchase")}
          >
            Continuar compra
          </Button>
        </Container>
      </Box>
    </PrivateGrid>
  );
};

export default ShoppingCart;
