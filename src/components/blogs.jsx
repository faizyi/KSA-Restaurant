import React from 'react';
import { Link } from 'react-router-dom';
import blogImage1 from '../../src/assets/Images/blog1.jpg';
import blogImage2 from '../../src/assets/Images/blog2.jpg';
import blogImage3 from '../../src/assets/Images/blog3.jpg';


const blogsData = [
  {
    id: 1,
    title: "The Traditional Food of Makkah and Madina",
    description:
      "Relic the taste of truly traditional- Mutabbaq! This everyday snack of Makkah can be enjoyed anytime.",
    image: blogImage1,
    link: "https://www.abdulmalikfareed.com/the-traditional-food-of-makkah-and-madina-2022/"
  },
  {
    id: 2,
    title: "The Best Special Foods Of Taif Saudi Arabia",
    description:
      "Taif is also known for its unique culinary best special and delicious food of Taif.",
      image: blogImage2,
      link: "https://www.abdulmalikfareed.com/the-best-special-foods-of-taif-saudi-arabia-2023/"
    },
  {
    id: 3,
    title: "Top 10 Street Food of Makkah",
    description:
      "This traditional appetizer food is a nice dish  that you can enjoy even after getting tired of roaming in the streets.",
      image: blogImage3,
      link: "https://www.abdulmalikfareed.com/top-10-street-food-of-makkah-2022/"
    },
];

export const BlogsSection = () => {
  return (
    <section id='blogs' className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          From Our Blog
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform
               transition duration-300 hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  target='_blank'
                  className="inline-block bg-yellow-500 text-gray-900 
                  font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
