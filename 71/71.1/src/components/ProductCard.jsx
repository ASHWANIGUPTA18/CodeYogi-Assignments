import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="w-full h-44 object-cover" />
      <div className="p-4 space-y-1">
        <div className="font-semibold text-gray-800">{product.title}</div>
        <div className="text-sm text-gray-500">{product.description}</div>
        <div className="font-bold text-indigo-600">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
