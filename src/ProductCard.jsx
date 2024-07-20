import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border bg-white flex flex-col gap-4">
      <img
        className="pt-2 h-64 w-72 lg:h-60 lg:w-60 self-center object-cover ml-2 mt-2 pr-1"
        src={product.image}
        alt={product.name}
      />
      <div className="text-xs ml-2 font-bold mt-2">{product.name}</div>
      <div className="text-red-500 text-xs ml-2">{product.category}</div>
      <div className="ml-2 -mt-1 font-bold">Price: ${product.price}</div>
      <Link to={`/ProductDetails/${product.id}`} className="ml-2 -mt-1 text-blue-500">
        View Details
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

