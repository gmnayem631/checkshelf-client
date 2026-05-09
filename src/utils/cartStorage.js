const CART_KEY = "check_shelf_cart";

// get the cart from storage
const getStoredCart = () => {
  const storedCart = localStorage.getItem(CART_KEY);
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

// save the cart to storage
const saveCartToStorage = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// add an item
const addToStoredCart = (book) => {
  let cart = getStoredCart();

  // Check if the book already exists in the cart
  const existingItem = cart.find((item) => item._id === book._id);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  saveCartToStorage(cart);
  return cart;
};

// remove a specific item
const removeFromStoredCart = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((item) => item._id !== id);
  saveCartToStorage(remaining);
  return remaining;
};

// clear the whole cart
const deleteStoredCart = () => {
  localStorage.removeItem(CART_KEY);
};

export {
  getStoredCart,
  addToStoredCart,
  removeFromStoredCart,
  deleteStoredCart,
};
