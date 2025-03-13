import React from 'react';
import { ShoppingCart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Revolutionizing Retail with AIoT Smart Cart
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Seamless shopping experience powered by AI and IoT technology
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-80 h-80 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-40 h-40 text-white" />
              <div className="absolute inset-0 border-4 border-white border-opacity-20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;