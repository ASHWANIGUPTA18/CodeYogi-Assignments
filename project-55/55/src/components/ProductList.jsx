import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProductList } from "../api/productApi";

const ProductList = ({ onProductClick }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    getProductList()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Sort products
  const getSortedProducts = () => {
    let sorted = [...products];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "name":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted;
    }
  };

  const sortedProducts = getSortedProducts();
  const productsPerPage = 9;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Sort Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
        >
          <option value="default">Default sorting</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onProductClick}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-10">
        {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded border ${
              currentPage === page
                ? "bg-red-400 text-white border-red-400"
                : "border-gray-300 text-gray-600 hover:border-gray-400"
            }`}
          >
            {page}
          </button>
        ))}
        {totalPages > 1 && (
          <button
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            className="w-8 h-8 rounded border border-gray-300 text-gray-600 hover:border-gray-400"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
