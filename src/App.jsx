import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import ProductDetails from './ProductDetails';
import Header from './Header';
import Footer from './Footer';
import CartPage from './CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-200">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage onAddToCart={handleAddToCart} />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
