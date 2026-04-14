import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 transform hover:scale-105 transition-all duration-300">
        <FaQuoteLeft className="text-4xl text-purple-300 mb-6" />

        <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
          "{testimonial.content}"
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-3 border-purple-500"
            />
            <div>
              <h4 className="font-bold text-lg">{testimonial.name}</h4>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          </div>

          <div className="flex space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
