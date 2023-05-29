import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { PrivateGrid } from "@/common";
import { useParams } from "react-router";
import { Product } from "@/models";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/states/shoppingCartState";
import { getProduct } from "@/utils";

export interface InfoProductProps {}

export const InfoProduct: React.FC<InfoProductProps> = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = useState<Product>({} as Product);
  const [quantity, setQuantity] = useState<number>(0);

  function incrementCount() {
    const updatedCount = quantity + 1;
    setQuantity(updatedCount);
  }

  function decrementCount() {
    const updatedCount = quantity - 1;
    setQuantity(updatedCount);
  };

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = (
    productId: number,
    quantity: number,
    stock: number
  ) => {
    dispatch(addItem({ productId, quantity, stock }));
  };

  React.useEffect(() => {
    if (id) {
      getProduct(id).then((data) => {
        setProduct(data);
      });
    }
  }, [id]);

  return (
    <PrivateGrid>
      <Box sx={{ width: "100%" }}>
        <Container sx={{ width: "100%", textAlign: "left" }}>
          <Grid container columnSpacing={2}>
            <Grid item xs={7}>
              <img
                src={
                  product?.image ||
                  "http://www.cyberscriptsolutions.com/wp-content/uploads/2017/10/default_product_icon.png"
                }
                style={{ width: "90%", borderRadius: "0.5em" }}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "h5.fontSize", mb: "1rem" }}
              >
                {product.name}
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize", mb: "2rem" }}>
                {"$" + product.price}
              </Typography>

              <Grid container columnSpacing={3}>
                <Grid item xs={2} p={0}>
                  <IconButton
                    onClick={decrementCount}
                    disabled={quantity === 0}
                    aria-label="removeCircle"
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={5} p={0} sx={{ mb: "2rem" }}>
                  <TextField
                    value={quantity}
                    variant="outlined"
                    onChange={changeQuantity}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">{product.unit}</InputAdornment>
                      ),
                      inputProps: { min: 0, max: product.availableQuantity },
                    }}
                  />
                </Grid>
                <Grid item xs={2} p={0}>
                  <IconButton onClick={incrementCount} aria-label="addCircle">
                    <AddCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>

              <Typography sx={{ fontSize: "small", mb: "2rem" }}>
                {`Disponible: ${product.availableQuantity} ${product.unit}`}
              </Typography>

              <Button
                variant="contained"
                onClick={() => {
                  handleAddToCart(
                    product.id,
                    quantity,
                    product.availableQuantity
                  );
                }}
              >
                Añadir al carrito
              </Button>
            </Grid>
          </Grid>
          <Grid sx={{ mt: 2 }} container columnSpacing={1}>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold" }}>
                {"Descripción"}
              </Typography>
              <Typography>{product.description}</Typography>
            </Grid>
          </Grid>

          <Grid sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid item xs={2}>
              <Typography sx={{ fontWeight: "bold" }}>{"Origen"}</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography>{product.origin}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={{ fontWeight: "bold" }}>
                {"Fecha de cosecha"}
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography>
                {product?.harvestDate?.toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={{ fontWeight: "bold" }}>
                {"Fecha de expiración"}
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography>
                {product?.expiryDate?.toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={{ fontWeight: "bold" }}>
                {"Metodo de cultivo"}
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography>{product.cultivationMethod}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={{ fontWeight: "bold" }}>
                {"Certificaciones"}
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography>{product.organicCertifications}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PrivateGrid>
  );
};
