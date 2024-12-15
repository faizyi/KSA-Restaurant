import React from 'react';
import { Drawer } from 'antd';

export const MenuDrawer = ({ isDrawerOpen, handleDrawerClose, path, navigate }) => {
  return (
    <Drawer
      title={
        <h2 className="text-xl font-bold text-gray-900 text-center">Restaurant</h2>
      }
      placement="right"
      onClose={handleDrawerClose}
      open={isDrawerOpen}
    //   bodyStyle={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: '20px 0',
    //   }}
    >
      <nav className="space-y-6 text-center">
        {/* Always show Home and Menu */}
        <a
          onClick={() => {
            navigate('/');
            handleDrawerClose();
          }}
          className="block text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300"
        >
          Home
        </a>
        <a
          onClick={() => {
            navigate('/menu');
            handleDrawerClose();
          }}
          className="block text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300"
        >
          Menu
        </a>

        {/* Conditionally show additional links */}
        {path === '/' && (
          <>
            <a
              href="#services"
              className="block text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#blogs"
              className="block text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="block text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Contact
            </a>
          </>
        )}
      </nav>
    </Drawer>
  );
};
