import React, { createContext, useState } from 'react';

export const CartContext = createContext();  // Create context

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.id === product.id);
      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

