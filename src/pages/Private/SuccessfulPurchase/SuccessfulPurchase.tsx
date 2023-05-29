import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { PrivateGrid } from '@/common';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export const SuccessfulPurchase: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <PrivateGrid>
            <TaskAltIcon sx={{ fontSize: 200 }} color="success" />
            <Typography>¡Gracias por tu compra!</Typography>
            <Typography textAlign={"center"}>Hemos recibido correctmente el pago de tus productos.</Typography>
            <div style={{
                display: "flex",
                justifyContent: "center",
                height: "100%"
            }}>
                <Button
                    sx={{ mt:'2rem'}}
                    variant="contained"
                    onClick={() => navigate("/dashboard")}
                >
                    Continuar comprando
                </Button>
            </div>

        </PrivateGrid>
    )
}

