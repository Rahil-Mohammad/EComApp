import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import initialProducts from './data';
import { HiArrowSmLeft } from 'react-icons/hi';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = initialProducts.find(p => p.id === productId);
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
    navigate('/cart');
  };

  return (
    <div className="bg-red-200 flex justify-center items-center flex-col">
      <Link to="/" className="text-3xl self-start px-4">
        <HiArrowSmLeft />
      </Link>
      <div className="bg-white lg:flex max-w-4xl lg:mb-24 mb-52">
        <img
          className="shrink-0 p-4 sm:h-80 lg:w-1/2 lg:h-full object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="space-y-2 m-2 gap-2">
          <h1 className="text-xl lg:text-3xl">{product.name}</h1>
          <h2 className="text-xl font-bold">${product.price}</h2>
          <div className="text-lg">Rating: {product.rate}/5</div> {/* Display rating */}
          <p className="text-gray-500 text-xs lg:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="flex gap-2 pt-4 max-h-16">
            <input
              type="number"
              placeholder="1"
              className="border-2 border-gray-300 p-2 w-10"
            />
            <button
              className="bg-orange-600 text-white rounded py-2 px-6"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
