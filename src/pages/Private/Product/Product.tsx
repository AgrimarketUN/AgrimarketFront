import { PrivateGrid } from '@/common';
import React from 'react'
import { useParams } from 'react-router-dom';

export interface ProductProps {
}

const Product: React.FC<ProductProps> = () => {
  const { id } = useParams();

  return (
    <PrivateGrid>
      <h1>Product: {id}</h1>
    </PrivateGrid>
  )
}

export default Product;