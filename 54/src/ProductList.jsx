import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
export default function ProductList({data}) {
  return (
    
    <div className="flex flex-wrap gap-4">
          {data.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.thumbnail}
              category={item.category}
            />
          ))}
        </div>
  );
}