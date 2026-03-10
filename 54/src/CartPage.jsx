import React, { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";
import { getProductData } from "./api";

function CartPage({cart}) {
    const productIds=Object.keys(cart);
    const productIdsString = productIds.join(",");
    const [products, setProducts]=useState([]);
    
    // console.log("Product Ids in CartPage:", productIds);
    useEffect(function(){
        const ids = productIdsString.split(",").filter(id => id);
        const promises = ids.map(function(id){
            return getProductData(id);
        });
        Promise.all(promises).then(function(productsData){
            setProducts(productsData);
        });
    }, [productIdsString]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart Page</h1>
      {products.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {products.map(function(product){
            return (
              <div key={product.id} className="flex items-center gap-4 border-b py-4">
                <img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-cover" />
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <p className="text-sm">Quantity: {cart[product.id]}</p>
                </div>
              </div>
            );
          })}
          <div className="mt-4 font-bold">
            Total: ${products.reduce((total, product) => total + (product.price * cart[product.id]), 0).toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;