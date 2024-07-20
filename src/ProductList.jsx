import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Pagenum from './Pagenum';

function ProductList({ products, onAddToCart }) {
  return (
    <>
      <div className="bg-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(({ id, image, name, category, rate, price }) => (
          <Product
            key={id}
            id={id}
            pic={image}
            title={name}
            category={category}
            rate={rate}
            price={price}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <Pagenum />
    </>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      rate: PropTypes.number,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;
