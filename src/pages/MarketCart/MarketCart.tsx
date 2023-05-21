import React from 'react'
import { Box, Container, Grid, Typography, Button, Autocomplete, TextField, IconButton } from '@mui/material'
import { Cart } from '@/components/Cart/Cart'
import { useNavigate } from 'react-router';

export interface MarketCarProps {};

const MarketCar: React.FC<MarketCarProps> = () => {
  const navigate = useNavigate();

  return (
    <div>
            <h1>Carrito de compra</h1>
            <Box sx={{ flexGrow: 1, width: "100%" }} alignItems="center">
                <Container sx={{ width: "100%", textAlign: 'left' }}>
                    {/*Acá se mapean las card de cart*/}
                    <Cart />
                    
                    <Cart />
                    {/* Cambiar por el total de los precios del carrito */}
                    <Typography variant='h4' align='center'>$Total</Typography>
                    <Button sx={{ml:'40%'}} variant="contained" onClick={() => navigate("/purchase")}>Continuar compra</Button>
                </Container>

            </Box>


        </div>
  )
};

export default MarketCar;