import React, { useState, useEffect } from 'react';
import CartList from './CartList';

const CartPage = ({ cartItems, onRemoveFromCart, onUpdateCart }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const storedCartItems = await new Promise((resolve) => {
          const items = localStorage.getItem('cartItems');
          resolve(items ? JSON.parse(items) : []);
        });
        onUpdateCart(storedCartItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [onUpdateCart]);

  const handleQuantityChange = async (id, quantity) => {
    setLoading(true);
    try {
      await new Promise((resolve) => {
        onUpdateCart(id, quantity);
        resolve();
      });
    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (id) => {
    setLoading(true);
    try {
      await new Promise((resolve) => {
        onRemoveFromCart(id);
        resolve();
      });
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8">
      <CartList
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveItem}
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
