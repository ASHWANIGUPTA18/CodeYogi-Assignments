import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow bg-gray-100">
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} onBack={handleBack} />
        ) : (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ProductList onProductClick={handleProductClick} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;