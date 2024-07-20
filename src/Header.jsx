import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center h-20 px-5 lg:px-20">
      <Link to="/">
        <img
          className="h-12 w-auto" // Adjusted height and automatic width
          src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png"
          alt="logo"
        />
      </Link>
      <Link to="/cart" className="relative">
        <HiOutlineShoppingCart className="h-10 w-10 text-gray-600" />
      </Link>
    </div>
  );
};

export default Header;
