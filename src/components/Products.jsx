import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";

const Products = () => {
  const { category } = useParams();
  return (
    <div className="products">
      <h1>{category}</h1>
      <ProductList category={category} />
    </div>
  );
};

export default Products;
