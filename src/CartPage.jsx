import React from 'react';
import CartList from './CartList';

const CartPage = ({ cartItems, onRemoveFromCart, onUpdateCart }) => {
  const handleQuantityChange = (id, quantity) => {
    onUpdateCart(id, quantity);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8">
      <CartList
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onQuantityChange={handleQuantityChange}
      />
      <div className="mt-8 flex justify-between items-center">
        <div>
          <input
            type="text"
            placeholder="Coupon code"
            className="border rounded px-4 py-2 mr-2"
          />
          <button className="bg-red-500 text-white rounded px-4 py-2">Apply Coupon</button>
        </div>
        <button className="bg-gray-500 text-white rounded px-4 py-2">Update Cart</button>
      </div>
      <div className="text-right mt-8 border-t pt-4">
        <div className="text-xl font-bold">Cart totals</div>
        <div className="text-lg">Subtotal: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</div>
        <div className="text-lg">Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</div>
        <button className="bg-red-500 text-white rounded px-4 py-2 mt-4">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
