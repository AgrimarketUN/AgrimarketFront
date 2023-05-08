import React, { useState } from 'react'
import { Box, Container, Grid, Typography, Button, Autocomplete, TextField, IconButton, TableContainer, Paper, Table, TableHead, TableRow, TableCell } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


export const InfoProduct: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  function incrementCount() {
    const updatedCount = count + 1;
    setCount(updatedCount);
  }

  function decrementCount() {
    const updatedCount = count - 1;
    setCount(updatedCount);
  }

  const units = [
    { label: 'Gramos' },
    { label: 'Libras' },
    { label: 'Kilogramos' },
  ];

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Container sx={{ width: "100%", textAlign: 'left' }}>

          <Grid sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid item xs={6} >
              <img src={"http://www.cyberscriptsolutions.com/wp-content/uploads/2017/10/default_product_icon.png"} style={{ width: "100%", borderRadius: "0.5em" }} />

            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize', mb: '1rem' }}>{"Nombre_Producto"}</Typography>
              <Typography sx={{ fontSize: 'h6.fontSize', mb: '2rem' }}>{"$Precio"}</Typography>

              <Grid sx={{ mt: 3 }} container columnSpacing={3}>
                <Grid item xs={2} p={0}><IconButton onClick={decrementCount} disabled={count === 0} aria-label="removeCircle"><RemoveCircleIcon /></IconButton></Grid>
                <Grid item xs={4} p={0} sx={{ mb: '2rem' }}><TextField label={"Cantidad"} value={count} variant="outlined" /></Grid>
                <Grid item xs={2} p={0}><IconButton onClick={incrementCount} aria-label="addCircle"><AddCircleIcon /></IconButton></Grid>
              </Grid>

              <Typography sx={{ fontSize: 'small', mb: '2rem' }}>{"Disponible: ..."}</Typography>

              <Autocomplete
                options={units}
                sx={{ width: 200, mb: '2rem' }}
                renderInput={(params) => <TextField {...params} label="Unidad" />}
              />

              <Button variant="contained">Añadir al carrito</Button>

            </Grid>

          </Grid>
          <Grid sx={{ mt: 2 }} container columnSpacing={1}>
            <Grid item xs={12} >
              <Typography >{"Descripción ..."}</Typography>
              <Typography>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</Typography>
            </Grid>
          </Grid>

          <Grid sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid item xs={2} >
              <Typography sx={{ fontWeight: 'bold'}}>{"Origen"}</Typography>
            </Grid>
            <Grid item xs={10} >
              <Typography >{"Origen ..."}</Typography>
            </Grid>
            <Grid item xs={2} >
              <Typography sx={{ fontWeight: 'bold'}}>{"Fecha de cosecha"}</Typography>
            </Grid>
            <Grid item xs={10} >
              <Typography >{"dd/mm/aaaa"}</Typography>
            </Grid>
            <Grid item xs={2} >
              <Typography sx={{ fontWeight: 'bold'}}>{"Fecha de expiración"}</Typography>
            </Grid>
            <Grid item xs={10} >
              <Typography >{"dd/mm/aaaa"}</Typography>
            </Grid>
            <Grid item xs={2} >
              <Typography sx={{ fontWeight: 'bold'}}>{"Metodo de cultivo"}</Typography>
            </Grid>
            <Grid item xs={10} >
              <Typography >{"información metodo de cultivo ..."}</Typography>
            </Grid>
            <Grid item xs={2} >
              <Typography sx={{ fontWeight: 'bold'}}>{"Certificaciones"}</Typography>
            </Grid>
            <Grid item xs={10} >
              <Typography >{"Información certificaciones"}</Typography>
            </Grid>
          </Grid>
          


        </Container>
      </Box>
    </div>
  )
}


