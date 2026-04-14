import React from 'react';
import { FaArrowRight, FaClock, FaCalendar } from 'react-icons/fa';

const BlogCard = ({ post }) => {
  return (
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <FaCalendar className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <button className="flex items-center text-purple-600 font-semibold group-hover:translate-x-1 transition-transform">
            Read More <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
