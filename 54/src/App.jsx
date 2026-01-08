import React from "react";
import "./index.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductInfo from "./ProductInfo";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";

function App() {
  //  const savedDatastring=localStorage.getItem("cartData")||"{}";
  //  const savedData=JSON.parse(savedDatastring);


   let [cart,setCart]=useState({});
   
  function handleCart(productId,count){
    const oldCount=cart[productId] || 0;
    const newCart={...cart,[productId]:oldCount+count};
    setCart(newCart);
     
    // const cartString=JSON.stringify(newCart);
    // localStorage.setItem("cartData",cartString);
  }
  return (
    <>
    <Navbar productCount={Object.values(cart).reduce((a,b) => a + b, 0)} />
    <Routes>
      <Route index element={<ProductListPage />} />
      <Route path="/productlistpage" element={<ProductListPage />} />
      <Route path="/productinfo" element={<ProductInfo />} />
      <Route path="/products/:id" element={<ProductDetail onAddToCart={handleCart} />} />
    </Routes>
    </>
  );
}

export default App;
