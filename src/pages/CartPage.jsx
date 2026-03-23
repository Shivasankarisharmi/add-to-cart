import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cartItems, totalPrice, finalPrice } = useCart();
  const discount = totalPrice - finalPrice;

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-2xl text-gray-500">🛒 Your cart is empty!</p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

      
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-green-600 mb-2">
          <span>Discount (10%)</span>
          <span>− ${discount.toFixed(2)}</span>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between text-xl font-bold text-gray-800">
          <span>Total</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;