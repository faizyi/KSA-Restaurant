import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <header className="border-b sticky top-0 z-50 bg-opacity-90 backdrop-filter backdrop-blur-sm bg-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 onClick={() => navigate('/')} className="cursor-pointer text-2xl font-bold
         text-gray-800">Tasty Bites</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-800 
          cursor-pointer transition duration-300">Home</a>
          <a onClick={() => navigate('/menu')} className="text-gray-600
          cursor-pointer hover:text-gray-800 transition duration-300">Menu</a>
          <a href="#services" className="text-gray-600 hover:text-gray-800 transition duration-300">Services</a>
          <a href="#blogs" className="text-gray-600 hover:text-gray-800 transition duration-300">Blog</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 transition duration-300">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={handleDrawerOpen}>
          <MenuOutlined className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Tasty Bites"
        placement="right"
        onClose={handleDrawerClose}
        open={isDrawerOpen}
      >
        <nav className="space-y-4">
          <a onClick={() => navigate('/')} className="block text-gray-600
          cursor-pointer hover:text-gray-800 transition duration-300">Home</a>
          <a onClick={() => navigate('/menu')} className="block text-gray-600
          cursor-pointer hover:text-gray-800 transition duration-300">Menu</a>
          <a href="#" className="block text-gray-600 hover:text-gray-800 transition duration-300">Services</a>
          <a href="#" className="block text-gray-600 hover:text-gray-800 transition duration-300">Blog</a>
          <a href="#" className="block text-gray-600 hover:text-gray-800 transition duration-300">Contact</a>
        </nav>
      </Drawer>
    </header>
  );
};
