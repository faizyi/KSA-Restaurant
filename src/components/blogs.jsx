import React from 'react';
import { Link } from 'react-router-dom';
import blogImage1 from '../../src/assets/Images/blog.jpg';


const blogsData = [
  {
    id: 1,
    title: "Discover the Secret Ingredients Behind Our Famous Burger",
    description:
      "Dive into the world of flavors as we reveal what makes our burger stand out.",
    image: blogImage1,
  },
  {
    id: 2,
    title: "Top 5 Tips for Pairing Wines with Your Favorite Dishes",
    description:
      "Explore how pairing wine with food can elevate your dining experience.",
      image: blogImage1,
    },
  {
    id: 3,
    title: "Healthy Eating at Tasty Bites: Our Top 3 Menu Picks",
    description:
      "Discover healthy options that are both tasty and satisfying on our menu.",
      image: blogImage1,
    },
];

export const BlogsSection = () => {
  return (
    <section id='blogs' className="py-20 bg-gray-50">
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
                {/* <Link
                  to="/blogs"
                  className="inline-block bg-yellow-500 text-gray-900 
                  font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300"
                >
                  Read More
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
