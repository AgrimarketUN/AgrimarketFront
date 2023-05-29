import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Divider, Button } from '@mui/material'
import React, { useState } from 'react'

export const Order: React.FC<{}> = () => {
    return (
        <div>
            <Card sx={{ display: 'flex', width: "100 vw", mb: '0.5rem' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image="https://thumbs.dreamstime.com/z/imagen-del-tema-de-los-productos-agr%C3%ADcolas-34266908.jpg"
                    alt="Imagen Producto"
                />
                <CardContent sx={{ width: '20rem' }}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', ml: '0.2rem', my: '1rem' }}>Nombre</Typography>
                    <Typography sx={{ ml: '0.2rem' }}>{"Estado (Entregado/Pendiente)"}</Typography>
                    <Typography sx={{ ml: '0.2rem', }}>Llego o llega el dd/mm/aaaa</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ my: '1' }} variant="contained">Detalles compra</Button>
                </CardActions>
            </Card>
            <Divider sx={{ mb: '0.5rem' }} />
        </div>
    )
}
