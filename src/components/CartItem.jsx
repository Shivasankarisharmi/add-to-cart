import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 mb-4">
      
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-contain"
      />

      
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>

        
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => decreaseQty(item.id)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full font-bold text-lg"
          >
            −
          </button>
          <span className="font-semibold text-gray-700">{item.quantity}</span>
          <button
            onClick={() => increaseQty(item.id)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full font-bold text-lg"
          >
            +
          </button>
        </div>
      </div>

      
      <div className="text-right">
        <p className="font-bold text-green-600 text-lg">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="mt-2 text-sm text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;