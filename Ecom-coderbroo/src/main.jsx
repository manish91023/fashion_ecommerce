import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "../src/Components/CartContext.jsx"; // Import CartProvider
import React from "react";
import ReactDOM from "react-dom/client";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App /> {/* Wrap the entire app */}
    </CartProvider>
  </React.StrictMode>
);



