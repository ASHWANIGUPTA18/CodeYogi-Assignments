import React from "react";

const ProductCard = ({ product, onClick }) => {
  // Calculate if product is on sale (has discount)
  const onSale = product.discountPercentage > 10;
  const originalPrice = onSale ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2) : null;

  return (
    <div
      className="cursor-pointer group"
      onClick={() => onClick(product)}
    >
      {/* Product Image */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {onSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Sale!
          </span>
        )}
      </div>

      {/* Product Info */}
      <p className="text-xs text-gray-400 mb-1 capitalize">{product.category}</p>
      <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">
        {product.title}
      </h3>

      {/* Rating Stars */}
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-xs ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
        ))}
      </div>

      {/* Price */}
      <div className="flex items-center gap-2">
        {originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            ${originalPrice}
          </span>
        )}
        <span className="text-sm font-semibold text-gray-800">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
