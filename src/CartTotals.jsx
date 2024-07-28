import React from 'react';

const CartTotals = ({ cartItems }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="border p-4 mt-4">
      <h2 className="text-xl font-bold mb-4">Cart totals</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <button className="bg-red-500 text-white rounded px-4 py-2 w-full mt-4">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default CartTotals;
