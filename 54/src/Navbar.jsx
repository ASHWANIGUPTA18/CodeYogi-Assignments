import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

function Navbar({productCount}) {
  return (
    <>
    <div className="flex justify-between">
    <div className="w-full h-16 bg-white border-b border-gray-200 flex items-center px-8">
      <Link to="/" className="flex items-center">
        <span className="text-3xl font-bold text-gray-800">amazon</span>
        <span className="text-orange-400 text-2xl">〰</span>
      </Link>
      </div>
      <div>
        <div className="flex items-center">
        <h1 className="text-xl font-bold">Cart Items: {productCount}</h1>
      <HiOutlineShoppingCart className="text-6xl" />
      </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;
