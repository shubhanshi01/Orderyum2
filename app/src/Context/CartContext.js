import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (meal) => {
    setCart((prev) => {
      const found = prev.find(item => item.id === meal.id);
      if (found) {
        return prev.map(item => item.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...meal, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const getTotal = () => {
    return cart.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return sum + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
