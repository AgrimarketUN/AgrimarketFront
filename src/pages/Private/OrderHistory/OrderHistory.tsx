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
} from "@mui/material";
import { Cart } from "@/components/Cart/Cart";
import { useNavigate } from "react-router";
import { PrivateGrid } from "@/common";
import { Order } from "@/components/Order/Order";

export const OrderHistory: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <PrivateGrid>
            <h1>Mis ordenes de compra</h1>
            <Box sx={{ flexGrow: 1, width: "100%" }} alignItems="center">
                <Container sx={{ width: "100%", textAlign: "left" }}>
                    {/*Acá se mapean las card de cart*/}
                    <Order/>
                    <Order/>
                    
                </Container>
            </Box>
        </PrivateGrid>
    )
}


