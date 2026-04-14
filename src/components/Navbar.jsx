import React, { useState } from 'react';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = ['Home', 'Features', 'Blogs', 'About Us', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaCode className="text-3xl text-purple-600" />
            <span className="text-2xl font-bold gradient-text">
              Smart Coders
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {menuItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 px-4 py-2 hover:bg-purple-50 rounded-lg"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
