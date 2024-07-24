import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const Header = ({ isAuthenticated }) => {
  return (
    <div className="bg-white flex justify-between items-center h-20 px-5 lg:px-20">
      <Link to="/">
        <img
          className="h-12 w-auto"
          src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png"
          alt="logo"
        />
      </Link>
      <div className="flex items-center">
        <Link to="/cart" className="relative">
          <HiOutlineShoppingCart className="h-10 w-10 text-gray-600" />
        </Link>
        {!isAuthenticated && (
          <Link to="/login" className="ml-4 text-blue-500">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
