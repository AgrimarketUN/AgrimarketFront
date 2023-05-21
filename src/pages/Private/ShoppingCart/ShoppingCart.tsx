import { PrivateGrid } from '@/common';
import React, { useEffect } from 'react';

export interface ShoppingCartProps {};

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  return (
    <PrivateGrid>
      <h1>ShoppingCart</h1>
    </PrivateGrid>
  )
};

export default ShoppingCart;