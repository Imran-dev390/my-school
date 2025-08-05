import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

//import schoolSmmWebp from 'assets/img/school-smm.webp';
//import schoolSmmPng from 'assets/img/school-smm.png';

AOS.init();

const SchoolSocialMedia = () => {
  return (
    <section className="relative bg-gray-100 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* Left image */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <picture>
              <source src="https://simsin.com.pk/assets/img/school-smm.webp?v=1" type="image/webp" />
              <source src="https://simsin.com.pk/assets/img/school-smm.webp?v=1" type="image/png" />
              <img
                src="https://simsin.com.pk/assets/img/school-smm.webp?v=1"
                alt="SIMSIN | The School Digital Partner"
                className="w-full h-auto"
              />
            </picture>
          </div>

          {/* Right content */}
          <div className="w-full lg:w-1/2 space-y-6 py-6">
            <div data-aos="fade-left" data-aos-duration="1000">
              <h3 className="text-4xl font-bold text-blue-900">Social Media</h3>
              <p className="mt-2 text-gray-700">
                Since your school is comprised of unique and diverse individuals, all with their passions, interests, and goals, we offer the right social media strategy combined with the perfect content mix best suited for your school's growth.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
              <h4 className="text-xl font-semibold text-blue-700">
                School Social Media Services
              </h4>
              <p className="text-gray-700">
                Raise your profile and communicate with specific audiences across all social platforms with the assistance of SIMSIN.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <h4 className="text-xl font-semibold text-blue-700">
                School Branding & Rebranding Services
              </h4>
              <p className="text-gray-700">
                Your school stands out and gains a more professional reputation with a unique logo, color scheme, and fonts. We'll set you apart from competitors with our creativity.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <h4 className="text-xl font-semibold text-blue-700">
                Social Media Optimization Services
              </h4>
              <p className="text-gray-700">
                Reach your prospects with our stand-out social media campaign. You'll get expert social media optimization services that can take your school to a whole new level.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <h4 className="text-xl font-semibold text-blue-700">
                Content Management Services
              </h4>
              <p className="text-gray-700">
                Content boosts the school's presence online. Good content leads to a higher rank on the Google search engine when it's done correctly with SEO practices. SIMSIN provides content for the school website, including a monthly calendar and captions.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
              <h4 className="text-xl font-semibold text-blue-700">
                Digital Marketing Services
              </h4>
              <p className="text-gray-700">
                Information, research, and comparison are just a click away. Our team employs the best digital marketing strategies and techniques to make your school reach its target audience.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
              <a
                href="social-media.php"
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                aria-label="SIMSIN School Social Media Service"
              >
                Explore All
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolSocialMedia;
