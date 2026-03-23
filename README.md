# 🛍️ Add to Cart - React App

A shopping cart application built with React + Vite + Tailwind CSS.

## Features
- Browse products fetched from Fake Store API
- Add / Remove products from cart
- Increase / Decrease item quantity in cart
- Per item total price shown based on quantity
- 10% discount applied on total price
- Fully responsive layout
- Routing with React Router DOM

## Tech Stack
- ReactJS + Vite
- React Router DOM
- Tailwind CSS v4
- Fake Store API

## Project Structure
src/
├── context/CartContext.jsx   → Global cart state management
├── pages/ProductsPage.jsx    → Products listing page
├── pages/CartPage.jsx        → Cart page
├── components/Navbar.jsx     → Navigation bar
├── components/ProductCard.jsx → Single product card
├── components/CartItem.jsx   → Single cart item row
└── App.jsx                   → Routes setup

## How to Run Locally
npm install
npm run dev

## Live Demo
https://addtocart-shopeasy.netlify.app/
```

---

## ✅ Final Correct Structure

After fix, you should only see:
```
ADD-TO-CART/          ← root
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── ...
├── public/
├── README.md         ← ✅ Only ONE here at root
├── package.json
└── vite.config.js