import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const FeatureCard = ({ feature, reverse }) => {
  const Icon = feature.icon;

  const cardStyles = {
    0: 'bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200',
    1: 'bg-gradient-to-tr from-purple-50 to-pink-50 border-2 border-purple-200',
    2: 'bg-gradient-to-bl from-green-50 to-emerald-50 border-2 border-green-200',
  };

  const iconStyles = {
    0: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    1: 'bg-gradient-to-r from-purple-500 to-pink-500',
    2: 'bg-gradient-to-r from-green-500 to-emerald-500',
  };

  return (
    <div
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}
    >
      {/* Content Side */}
      <div className="flex-1 space-y-6">
        <div
          className={`inline-flex p-4 rounded-2xl ${iconStyles[feature.title.includes('Real') ? 0 : feature.title.includes('Analytics') ? 1 : 2]} shadow-lg transform hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="text-3xl text-white" />
        </div>

        <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {feature.description}
        </p>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span className="text-gray-700">Advanced encryption</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span className="text-gray-700">24/7 customer support</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span className="text-gray-700">Cloud synchronization</span>
          </div>
        </div>

        <button
          className={`px-6 py-3 rounded-full font-semibold bg-gradient-to-r ${feature.gradient} text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
        >
          Learn More →
        </button>
      </div>

      {/* Image Side */}
      <div className="flex-1">
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 ${cardStyles[feature.title.includes('Real') ? 0 : feature.title.includes('Analytics') ? 1 : 2]}`}
        >
          <div className="relative h-80 lg:h-96">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-20`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
