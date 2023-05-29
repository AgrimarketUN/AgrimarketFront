import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Divider } from '@mui/material'
import React, { useState } from 'react'

export const Buy: React.FC<{}> = () => {
    const [count, setCount] = useState<number>(0);

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
                            <Typography sx={{ mx: '1rem', my: '0.5rem' }}>{count}</Typography>
                        </Grid>
                        
                    </Grid>
                </CardActions>
                <CardContent sx={{ width: '30%' }}>
                    <Typography variant='h5' sx={{ mx: '1rem', my: '4rem' }}>$Precio</Typography>
                </CardContent>
                
            </Card>
            <Divider sx={{mb:'0.5rem'}} />
        </div>
  )
}

