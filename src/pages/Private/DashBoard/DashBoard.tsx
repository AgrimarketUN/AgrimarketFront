import React, { useState } from "react";
import { api } from "@/common";
import { get } from "@/services";
import { PrivateGrid } from "@/common";
import { Product } from "@/models/product";
import ProductsGrid from "./Components/ProductsGrid";

const DashBoard: React.FC<{}> = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const data = await get(api.getproducts);
    return data.Products as Product[];
  };

  React.useEffect(() => {
    const promise = getProducts();

    promise
      .then((data) => {
        setProducts((prevProducts) => [...prevProducts, ...data]);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  
  return <PrivateGrid>
    <ProductsGrid products={products} />
  </PrivateGrid>;
};

export default DashBoard;
