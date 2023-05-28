import React, { useEffect } from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import { PrivateGrid } from "@/common";
import { Cart } from "./components/Cart";
import { useSelector } from "react-redux";
import { AppStore } from "@/models";
import { getProduct, getShoppingCart } from "@/utils";
import { useDispatch } from "react-redux";

export interface ShoppingCartProps {}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const shoppingCart = useSelector((state: AppStore) => state.shoppingCart);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const total = async () => {
    const prices = await Promise.all(
      Object.entries(shoppingCart).map(([productId, quantity]) =>
        getProduct(productId).then((data) => data.price * quantity)
      )
    );
    setTotalPrice(prices.reduce((a, b) => a + b, 0));
  };

  useEffect(() => {
    getShoppingCart(dispatcher);
  }, [shoppingCart]);

  useEffect(() => {
    total();
  }, [shoppingCart]);

  return (
    <PrivateGrid>
      <h1>Carrito de compra</h1>
      <Box sx={{ flexGrow: 1, width: "100%" }} alignItems="center">
        <Container sx={{ width: "100%", textAlign: "left" }}>
          <Stack>
            {Object.entries(shoppingCart).map(([productId, quantity]) => (
              <Cart productId={productId} quantity={quantity} />
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
