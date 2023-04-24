import { CardComponent } from '@/components'
import React, { useState } from 'react'
import { api } from '@/common';
import { get } from '@/services';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const DashBoard : React.FC<{}> = () => {

  interface Products {
    products: Array<any>,
  }

  const [products, setProducts] = useState<Products>({
    products: [],
  });

  const getProducts = async () => {
    const data = await get(api.getproducts);
    return data.Products;
  };

  React.useEffect(()=>{
    const promise = getProducts();

    promise.then((data)=>{
      setProducts(data);
      console.log(data);
    })
    .catch((e)=>{
      console.error(e)
    })
  },[])

  return (
    <div>
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
                    <AddShoppingCartIcon />
                </IconButton>
                <Button variant='contained' size='small'>Comprar</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default DashBoard
