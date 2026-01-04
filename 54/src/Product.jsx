import React from "react";
import { Link } from "react-router-dom";
export default function Product({ title, price, imgUrl, category, id }) {
  return (
    <div className="border p-3 w-48 rounded-md shadow">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-32 object-cover rounded"
      />
      <div>{category}</div>
      <h2 className="font-bold mt-2">{title}</h2>
      <p className="text-gray-700">${Number(price).toFixed(2)}</p>
      <Link to={`/products/`+id}>View</Link>
    </div>
  );
}

