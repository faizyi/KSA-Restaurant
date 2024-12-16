import React from 'react';
import { useNavigate } from 'react-router-dom';
import menuitem from "../../src/assets/Images/menu.webp";

// Full menu data
const menu = [
  { name: "Truffle Infused Burger", priceUSD: 16.99, image: menuitem },
  { name: "Wood-Fired Pizza", priceUSD: 14.99, image: menuitem },
  { name: "Gourmet Tacos", priceUSD: 12.99, image: menuitem },
  { name: "Pasta Alfredo", priceUSD: 13.99, image: menuitem },
  { name: "Sushi Platter", priceUSD: 19.99, image: menuitem },
  { name: "Vegan Salad Bowl", priceUSD: 10.99, image: menuitem },
  { name: "BBQ Ribs", priceUSD: 18.99, image: menuitem },
  { name: "Grilled Salmon", priceUSD: 22.99, image: menuitem },
  { name: "Chicken Caesar Salad", priceUSD: 11.99, image: menuitem },
];

// Conversion rate (USD to SAR)
const USD_TO_SAR = 3.75;

export const MenuItems = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Specialties
        </h2>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {menu.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden
               transform transition duration-300 hover:scale-105"
            >
              {/* Menu Item Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />
              {/* Menu Item Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-lg font-medium text-yellow-600">
                  {`SAR ${(item.priceUSD * USD_TO_SAR).toFixed(2)}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/menu')}
            className="bg-yellow-500 text-gray-900 font-semibold
             py-3 px-10 rounded-full hover:bg-yellow-400 transition
              duration-300 transform hover:scale-105"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};
