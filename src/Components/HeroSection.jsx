import React from 'react';
import StatsSection from './StatsSection';

const HeroSection = () => {
  return (
    <div className="bg-white p-10 lg:px-10   min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 px-4 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="text-blue-600">Meritaleem </span>
            Tools Growing <span className="text-orange-500">Schools.</span>
          </h1>
          <p className="mt-6 text-gray-700">
            Empower your educational institution with Meritaleem school management systems and cutting-edge Ed-Tech solutions, revolutionizing the way schools operate in the digital era.
          </p>
          <button
            type="button"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow"
          >
            Get Started
          </button>
        </div>

        {/* Right Image Section */}
    <div className="relative w-full max-w-[600px] h-[600px] mx-auto">
  {/* Rotating Outer Frame */}
  <div className="absolute inset-0 animate-slow z-10">
    <img
      src="https://simsin.com.pk/assets/img/b1.png?v=1"
      alt="Rotating Frame"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Static Inner Image — Touching Edges */}
  <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
    <img
      src="https://simsin.com.pk/assets/img/b-2.webp?v=1"
      alt="Inner Content"
      className="w-[880px] h-[880px]  object-contain"
    />
  </div>
</div>


      </div>
      <StatsSection/>
      
    </div>
  );
};


export default HeroSection;
