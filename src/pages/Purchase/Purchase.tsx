import React from 'react'
import { Box, Container, Grid, Typography, Button, Autocomplete, TextField, IconButton } from '@mui/material'
import { Buy } from '@/components/Buy/Buy'

export const Purchase: React.FC = () => {
    return (
        <div>
            <h1>Detalles compra</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Container sx={{ width: "100%", textAlign: 'left' }}>

                    <Grid container spacing={2}>
                        <Grid item xs={8} >
                            <Buy/>
                            <Buy/>
                        </Grid>
                        <Grid item xs={4}>

                            <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize', mb: '1rem' }}>{"Resumen de compra"}</Typography>
                            <Typography sx={{ fontSize: 'h6.fontSize', mb: '2rem' }}>{"Productos: #"}</Typography>

                            <Typography sx={{ fontSize: 'h6.fontSize', mb: '2rem' }}>{"Total: $..."}</Typography>



                            <Button variant="contained">Confirmar compra</Button>

                        </Grid>
                    </Grid>



                </Container>

            </Box>


        </div>
    )
}


