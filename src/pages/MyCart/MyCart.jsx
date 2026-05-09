import React, { use } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router";

const MyCart = () => {
  const { cart, removeFromCart, addToCart, totalPrice, clearCart } =
    use(CartContext);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-6xl font-bold">Your cart is empty!</h2>
        <Link to="/books" className="btn btn-accent">
          Go Shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-11/12 mx-auto py-20">
      <h1 className="text-3xl text-center font-bold mb-6">My Cart</h1>

      <div className="overflow-x-auto w-full bg-white rounded-lg shadow-md border border-accent/20">
        <table className="table w-full">
          {/* Table Header */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="font-bold">{item.title}</div>
                </td>
                <td>${item.price}</td>
                <td className="flex items-center gap-2">
                  <button
                    className="btn btn-xs btn-outline"
                    onClick={() => addToCart(item)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="btn btn-ghost btn-sm text-red-500 text-center"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The Summary Section */}
      <div className="mt-8 flex flex-col items-end gap-4">
        <div className="text-xl font-bold inter">
          Total Amount:{" "}
          <span className="text-accent">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex gap-4">
          <button onClick={clearCart} className="btn btn-outline btn-error">
            Clear Cart
          </button>
          <button className="btn btn-accent">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
