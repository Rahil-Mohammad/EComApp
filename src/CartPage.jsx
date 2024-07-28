import React, { useState, useEffect } from 'react';
import CartList from './CartList';
import CouponCode from './CouponCode';
import CartTotals from './CartTotals';

const CartPage = ({ cartItems, onUpdateCart, onRemoveFromCart }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const storedCartItems = await new Promise((resolve) => {
          const items = localStorage.getItem('cartItems');
          resolve(items ? JSON.parse(items) : []);
        });
        setCartItems(storedCartItems);
      } catch (error) {
        setError('');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (id, quantity) => {
    onUpdateCart(id, quantity);
  };

  const handleRemoveItem = (id) => {
    onRemoveFromCart(id);
  };

  const handleUpdateCart = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Cart updated!');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8">
      {error && <div className="text-red-500">{error}</div>}
      <CartList
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveItem}
        onQuantityChange={handleQuantityChange}
      />
      <div className="flex justify-between items-center mt-4">
        <CouponCode />
        <button
          onClick={handleUpdateCart}
          className="bg-red-500 text-white rounded px-4 py-2"
        >
          UPDATE CART
        </button>
      </div>
      <CartTotals cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
