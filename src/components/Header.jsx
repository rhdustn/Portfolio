// Header.js file

import React from 'react';
import logo from "../img/logo.png"

const Header = () => {
  return (
    <header className='bg-white shadow fixed w-full z-10'>
      <div className="container mx-auto flex items-center justify-between py-4">
        <div>
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <nav className="flex items-center space-x-4">
          <div className="text-gray-800 hover:text-gray-600">About</div>
          <div className="text-gray-800 hover:text-gray-600">Projects</div>
          <div className="text-gray-800 hover:text-gray-600">Contact</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
