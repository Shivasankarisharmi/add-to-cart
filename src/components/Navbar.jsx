import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        🛍️ ShopEasy
      </Link>
      <Link
        to="/cart"
        className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
      >
        🛒 Cart
        {totalItems > 0 && (
          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;