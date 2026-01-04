import React, { useState } from "react";

const ProductDetail = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No product selected</p>
      </div>
    );
  }

  // Use images array from dummyjson API, fallback to thumbnail
  const images = product.images || [product.thumbnail];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={images[selectedImage]}
                  alt={product.title}
                  className="w-full h-112.5object-cover"
                />
              </div>
              {/* Thumbnail gallery */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded overflow-hidden border-2 ${
                        selectedImage === index ? 'border-[#e07575]' : 'border-gray-200'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-semibold text-gray-700 mb-4">
                {product.title}
              </h1>

              <p className="text-2xl font-bold text-gray-800 mb-6">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-gray-500 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-16 border border-gray-300 rounded px-3 py-2 text-center focus:outline-none focus:border-gray-400"
                />

                <button className="bg-[#e07575] hover:bg-[#d06565] text-white font-medium px-8 py-3 rounded transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;