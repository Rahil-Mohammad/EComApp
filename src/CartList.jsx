import React from 'react';
import PropTypes from 'prop-types';
import CartRow from './CartRow';

const CartList = ({ cartItems, onRemoveFromCart, onQuantityChange }) => {
  return (
    <table className="w-full border-collapse border border-gray-200 mt-4">
      <thead>
        <tr>
          <th className="border border-gray-200 p-2">Product</th>
          <th className="border border-gray-200 p-2">Price</th>
          <th className="border border-gray-200 p-2">Quantity</th>
          <th className="border border-gray-200 p-2">Subtotal</th>
          <th className="border border-gray-200 p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <CartRow
            key={item.id}
            item={item}
            onRemoveFromCart={onRemoveFromCart}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </tbody>
    </table>
  );
};

CartList.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartList;
