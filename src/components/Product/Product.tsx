import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const CardComponent: React.FC<{}> = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image="https://thumbs.dreamstime.com/z/imagen-del-tema-de-los-productos-agr%C3%ADcolas-34266908.jpg"
                alt="Imagen Producto"
            />
            <CardContent>
                <Typography variant='h6'>Nombre</Typography>
                <Typography>Descripción</Typography>
                <Typography>Precio</Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label='Añadir al carrito'>
                    <AddShoppingCartIcon/>
                </IconButton>
                <Button variant='contained' size='small'>Comprar</Button>
            </CardActions>
        </Card>
    )
}


