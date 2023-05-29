import { PrivateGrid } from '@/common';
import { Box, Container } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import OrderItem from './components/OrderItem';

const Order: React.FC<{}> = () => {
  const navigate = useNavigate();
    return (
        <PrivateGrid>
            <h1>Mis ordenes de compra</h1>
            <Box sx={{ flexGrow: 1, width: "100%" }} alignItems="center">
                <Container sx={{ width: "100%", textAlign: "left" }}>
                    {/*Acá se mapean las card de cart*/}
                    <OrderItem/>
                    <OrderItem/>
                    
                </Container>
            </Box>
        </PrivateGrid>
    )
};

export default Order;