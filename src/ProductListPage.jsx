import React, { useState } from 'react';
import ProductList from './ProductList';
import initialProducts from './data';
import sortProducts from './sortProducts';

const ProductListPage = ({ onAddToCart }) => {
  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = (option) => {
    const sortedProducts = sortProducts(products, option);
    setProducts(sortedProducts);
    setSortOption(option);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl bg-white gap-4 py-14 mx-auto px-12">
      <div className="flex justify-between flex-wrap px-2 py-2 gap-2">
        <input 
          className="border-2 border-gray-500 rounded-md flex-grow"
          type="text" 
          onChange={handleChange} 
          placeholder="Search"
        />
        <select 
          className="border rounded px-4 py-2"
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="default">Default sorting</option>
          <option value="title">Sort by title</option>
          <option value="price-low-high">Sort by price: low to high</option>
          <option value="price-high-low">Sort by price: high to low</option>
        </select>
      </div>
      <div className="container mx-auto px-4 py-8">
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
        ) : (
          <div className="text-center text-2xl">Product not found</div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
