// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <span className="text-blue-600">★</span>
            <span className="text-sm font-medium text-gray-700">
              Jump start your growth
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
        >
          We boost the growth for{' '}
          <span className="text-blue-600 relative inline-block">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>{' '}
          Companies
          <span className="inline-block ml-2">⏰</span>
        </motion.h1>

        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg active:scale-95">
            →
          </button>
        </motion.div>
      </div>

      {/* Right Column */}
      <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative bg-gray-100 rounded-lg h-80 md:h-96 flex items-center justify-center">
          <span className="text-gray-400 text-lg">🖼️ Hero Image</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
