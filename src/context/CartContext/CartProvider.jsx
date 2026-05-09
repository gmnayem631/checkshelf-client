import React, { useState } from "react";
import { CartContext } from "./CartContext";
import {
  getStoredCart,
  addToStoredCart,
  removeFromStoredCart,
  deleteStoredCart,
} from "../../utils/cartStorage";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getStoredCart());

  // Add to Cart
  const addToCart = (book) => {
    const updatedCart = addToStoredCart(book);
    setCart([...updatedCart]);
  };

  // Remove item
  const removeFromCart = (id) => {
    const updatedCart = removeFromStoredCart(id);
    setCart([...updatedCart]);
  };

  // Clear the whole cart
  const clearCart = () => {
    deleteStoredCart();
    setCart([]);
  };

  //   items counter
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const cartInfo = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
    totalPrice,
  };

  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
