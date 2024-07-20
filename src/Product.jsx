import React from 'react';
import { Link } from 'react-router-dom';

function Product({ id, pic, title, category, rate, price, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart({ id, title, price, image: pic });
  };

  return (
    <div className="border bg-white flex flex-col gap-4">
      <img
        className="pt-2 h-64 w-72 lg:h-60 lg:w-60 self-center object-cover ml-2 mt-2 pr-1"
        src={pic}
        alt={title}
      />
      <div className="text-xs ml-2 font-bold mt-2">{title}</div>
      <div className="text-red-500 text-xs ml-2">{category}</div>
      <div className="text-xs ml-2 -mt-1">Rating: {rate}/5</div> {/* Display rating */}
      <div className="ml-2 -mt-1 font-bold">Price: ${price}</div>
      <Link to={`/ProductDetails/${id}`} className="ml-2 -mt-1 text-blue-500">
        View Details
      </Link>
      <button
        onClick={handleAddToCart}
        className="ml-2 mt-2 bg-blue-500 text-white rounded px-4 py-2"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
