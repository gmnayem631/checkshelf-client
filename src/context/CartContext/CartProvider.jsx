import React, { useState } from "react";
import { CartContext } from "./CartContext";
import {
  getStoredCart,
  addToStoredCart,
  removeFromStoredCart,
  deleteStoredCart,
  decreaseQuantityInStoredCart,
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

  // decrease item quantity
  const decreaseQuantity = (id) => {
    const updatedCart = decreaseQuantityInStoredCart(id);
    setCart([...updatedCart]);
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
    decreaseQuantity,
    cartCount,
    totalPrice,
  };

  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
