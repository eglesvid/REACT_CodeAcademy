import React from "react";
import Product from "../Product/Product";

export default function ProductList({ products, handleDelete }) {
  return (
    <div>
      {products.map((product, index) => {
        return <Product key={index} text={product.text} handleDelete={() => handleDelete(index)} />;
      })}
    </div>
  );
}
