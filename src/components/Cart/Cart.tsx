import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Grid, TextField, Divider } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
//import { Box, Container, Grid, Typography, Button, Autocomplete, TextField, IconButton } from '@mui/material'



export const Cart: React.FC<{}> = () => {

    const [count, setCount] = useState<number>(0);

    function incrementCount() {
        const updatedCount = count + 1;
        setCount(updatedCount);
    }

    function decrementCount() {
        const updatedCount = count - 1;
        setCount(updatedCount);
    }

    return (
        <div>
            <Card sx={{ display: 'flex', width: "100 vw", mb:'0.5rem'}}>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image="https://thumbs.dreamstime.com/z/imagen-del-tema-de-los-productos-agr%C3%ADcolas-34266908.jpg"
                    alt="Imagen Producto"
                />
                <CardContent sx={{ width: '20rem' }}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', ml: '0.2rem', my: '1rem' }}>Nombre</Typography>
                    <Typography sx={{ ml: '0.2rem' }}>Fecha de expiración</Typography>
                    <Typography sx={{ ml: '0.2rem', }}>dd/mm/aaaa</Typography>
                </CardContent>
                <CardActions>
                    <Grid container direction="column" justifyContent="space-between" alignItems="center" >
                        <Grid item xs={6} sx={{ display: 'flex' }}>
                            <IconButton onClick={decrementCount} disabled={count === 0} aria-label="removeCircle"><RemoveCircleIcon /></IconButton>
                            <Typography sx={{ mx: '1rem', my: '0.5rem' }}>{count}</Typography>
                            <IconButton onClick={incrementCount} aria-label="addCircle"><AddCircleIcon /></IconButton>
                        </Grid>
                        <Grid item xs={6}><Typography sx={{ mx: 'auto' }}>Disponible</Typography></Grid>
                    </Grid>
                </CardActions>
                <CardContent sx={{ width: '30%' }}>
                    <Typography variant='h5' sx={{ mx: '1rem', my: '4rem' }}>$Precio</Typography>
                </CardContent>
                <Divider orientation="vertical" flexItem />
                <CardActions>
                    <IconButton aria-label="deleteIcon"><DeleteIcon /></IconButton>
                </CardActions>
            </Card>
            <Divider sx={{mb:'0.5rem'}} />
        </div>
    )
}

