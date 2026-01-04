import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">
          amazon
          <span className="block h-1 w-12 bg-orange-400 rounded mt-1"></span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
