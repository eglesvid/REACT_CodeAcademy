import React, { useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const [products, setProducts] = useState([
    {
      text: "First Product",
    },
    {
      text: "Second Product",
    },
    {
      text: "Third Product",
    },
  ]);

  function handleAddProduct(product) {
    const newProducts = JSON.parse(JSON.stringify(products));
    newProducts.push({
      text: product,
    });
    setProducts(newProducts);
  }

  function handleDeleteProduct(index) {
    console.log(index);
    const newProducts = JSON.parse(JSON.stringify(products));
    newProducts.splice(index, 1);
    console.log(newProducts);

    setProducts(newProducts);
  }

  return (
    <div>
      <Header />
      <AddProductForm handleAdd={handleAddProduct} />
      <ProductList products={products} handleDelete={handleDeleteProduct} />
    </div>
  );
}

export default App;
