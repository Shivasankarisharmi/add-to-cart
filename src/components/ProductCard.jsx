import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition duration-300">
      
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mx-auto mb-4"
      />

      
      <div className="flex-1">
        <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-gray-500 text-xs mb-2 line-clamp-3">
          {product.description}
        </p>
        <p className="text-blue-600 font-bold text-lg">${product.price}</p>
      </div>

      
      <button
        onClick={() =>
          inCart ? removeFromCart(product.id) : addToCart(product)
        }
        className={`mt-4 w-full py-2 rounded-xl font-semibold text-white transition ${
          inCart
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {inCart ? "✕ Remove from Cart" : "+ Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;