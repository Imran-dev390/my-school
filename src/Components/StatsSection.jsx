import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-[#f8f9fa] py-2 overlay-2 rounded-2xl">
      <div className="flex flex-col lg:flex-row justify-center relative">
        {/* Map Image */}
        <div className="w-full lg:w-1/4 md:w-1/2 flex justify-center mb-8 lg:mb-0">
          <picture>
            <source srcSet="https://simsin.com.pk/assets/img/map.webp" type="image/webp" />
            <source srcSet="https://simsin.com.pk/assets/img/map.webp" type="image/png" />
            <img
              src="https://simsin.com.pk/assets/img/map.webp"
              alt="SIMSIN | The School Digital Partner"
              className="w-full max-w-xs object-contain"
            />
          </picture>
        </div>

        {/* Stats Content */}
        <div className="w-full lg:w-3/4 md:w-1/2 px-4 py-5 md:py-0 self-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Schools */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="text-4xl font-bold text-blue-700"><span id="num1">1000</span>+</p>
              <p className="mt-1 font-semibold">School's Projects</p>
            </div>

            {/* Years */}
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <p className="text-4xl font-bold text-blue-700"><span id="num2">15</span>+</p>
              <p className="mt-1 font-semibold">Years</p>
            </div>

            {/* Students */}
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <p className="text-4xl font-bold text-blue-700"><span id="num3">250</span>k+</p>
              <p className="mt-1 font-semibold">Students</p>
            </div>

            {/* Parents */}
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <p className="text-4xl font-bold text-blue-700"><span id="num4">400</span>k+</p>
              <p className="mt-1 font-semibold">Parents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
