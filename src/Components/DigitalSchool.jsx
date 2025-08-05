import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaGlobe,
  FaChartLine,
  FaClipboardList,
  FaShieldAlt,
  FaUniversity,
  FaArrowLeft
} from 'react-icons/fa';
import ServiceCards from './CardsSlider';
const iconMap = {
  'School Website Development': <FaGlobe className="text-blue-600 text-4xl" />,
  'School Digital Presence': <FaChartLine className="text-blue-600 text-4xl" />,
  'Online Admission Tools': <FaClipboardList className="text-blue-600 text-4xl" />,
  'Secure Hosting': <FaShieldAlt className="text-blue-600 text-4xl" />,
  'EDU-Domain': <FaUniversity className="text-blue-600 text-4xl" />
};
const DigitalSchool = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="pb-5 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div
            className="lg:w-3/4 md:w-11/12"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-4xl font-bold mb-4">
              Digital <span className="text-blue-600">School</span>
            </h3>
            <p className="text-gray-700">
              SIMSIN provides modern digital techniques that offer its users a host of exciting
              features and tools which make it easy to manage and operate their schools.
            </p>
          </div>

          {/* View All Button (Desktop) */}
          <div
            className="hidden md:block md:w-1/5 text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <a
              href="digital-school.php"
              className="btn bg-blue-600 text-white py-2 px-4 rounded w-full"
            >
              View All
            </a>
          </div>
        </div>

      <ServiceCards/>
      </div>
    </section>
  );
};

export default DigitalSchool;
