import React from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductInfo from "./ProductInfo";

function Sidebar() {
  return (
    <div className="w-80 h-screen bg-gray-400 p-2 flex flex-col">
      <h2 className="p-2 text-2xl font-bold">Sidebar</h2>
        <Link to="/productlistpage">Product List</Link>
        <Link to="/productinfo">Product Info</Link>
    </div>
  );
}

export default Sidebar;