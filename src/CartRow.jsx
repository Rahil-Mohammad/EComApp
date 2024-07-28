import React from 'react';
import PropTypes from 'prop-types';

const CartRow = ({ item, onRemoveFromCart, onQuantityChange }) => {
  const handleRemove = () => {
    onRemoveFromCart(item.id);
  };

  const handleQuantityChange = (event) => {
    onQuantityChange(item.id, parseInt(event.target.value, 10));
  };

  return (
    <tr>
      <td className="border border-gray-200 p-2 flex items-center">
        <button
          onClick={handleRemove}
          className="bg-gray-200 text-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-2"
        >
          &times;
        </button>
        <img src={item.image} alt={item.title} className="w-16 h-16" />
        <span className="ml-4">{item.title}</span>
      </td>
      <td className="border border-gray-200 p-2">${item.price.toFixed(2)}</td>
      <td className="border border-gray-200 p-2">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="border rounded px-2 py-1 w-16"
        />
      </td>
      <td className="border border-gray-200 p-2">${(item.price * item.quantity).toFixed(2)}</td>
      <td className="border border-gray-200 p-2">
        <button
          onClick={handleRemove}
          className="bg-red-500 text-white rounded px-4 py-2"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

CartRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartRow;
