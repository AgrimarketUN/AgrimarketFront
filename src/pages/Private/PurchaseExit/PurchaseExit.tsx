import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { PrivateGrid } from '@/common';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const PurchaseExit: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <PrivateGrid>
            <div style={{
                display: "flex",
                justifyContent: "center",
                height: "100%"
            }}>
                <TaskAltIcon sx={{ fontSize: 200 }} color="success" />
            </div>

            <Typography textAlign={"center"}>¡Gracias por tu compra!</Typography>
            <Typography textAlign={"center"}>Hemos recibido correctamente el pago de tus productos.</Typography>
            <div style={{
                display: "flex",
                justifyContent: "center",
                height: "100%"
            }}>
                <Button
                    sx={{ mt: '2rem' }}
                    variant="contained"
                    onClick={() => navigate("/dashboard")}
                >
                    Continuar comprando
                </Button>
            </div>

        </PrivateGrid>
    )
}

export default PurchaseExit;
