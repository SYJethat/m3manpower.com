import React, { useState } from 'react';
import Logo from '../assests/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white/60 via-white/80 to-white/100 backdrop-blur-md shadow-md fixed w-full top-0 z-50 transition-all duration-300">
    <div className="container mx-auto px-4 py-3">
      <div className="flex justify-between items-center">
  
        {/* Logo and Title */}
        <div className="flex items-center">
          <div className="relative">
            <img
              src={Logo}
              alt="M3 Logo"
              className="w-14 h-14 mr-3 object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">M3 MANPOWER</h1>
            <p className="text-sm text-gray-600">Migrant Magnet Manpower</p>
          </div>
        </div>
  
        {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
  <a href="#home" className="font-bold text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition">Home</a>
  <a href="#services" className="font-bold text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition">Services</a>
  <a href="#about" className="font-bold text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition">About Us</a>
  <a href="#gallery" className="font-bold text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition">Gallery</a>
  <a href="#contact" className="font-bold text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition">Contact</a>
</nav>

  
        {/* Mobile Toggle Button */}
       <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
  {isMenuOpen ? (
    // Close (X) Icon
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    // Hamburger Icon
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )}
</button>
      </div>
  
      {/* Mobile Menu */}
      {isMenuOpen && (
  <nav className="md:hidden mt-4 pb-4 flex flex-col items-center justify-center space-y-2">
    <a href="#home" className="text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition" >Home</a>
    <a href="#services" className="text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition">Services</a>
    <a href="#about" className="text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition">About Us</a>
    <a href="#gallery" className="text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition">Gallery</a>
    <a href="#contact" className="text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 transition">Contact</a>
  </nav>
)}

    </div>
  </header>
  
  );
};

export default Header;