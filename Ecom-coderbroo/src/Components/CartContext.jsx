import React, { createContext, useState, useContext } from 'react';

// Create a Cart Context
const CartContext = createContext();

// Provide cart state globally
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from cart (optional, for future functionality)
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
