// import React from 'react';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import AOS from 'aos'
// const SimsinServices = () => {
//   return (
//     <section className="bg-gray-100 py-10">
//       <div className="bg-black/5 py-10">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center animate-fade-up duration-1000 space-y-6">
//             <h2 className="text-4xl md:text-5xl font-bold">
//               Services &amp; Products of <span className="text-indigo-600">SIMSIN</span>
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Discover the wide range of services and products offered by SIMSIN. From comprehensive{' '}
//               <a
//                 href="https:/erp.meritaleempk.com"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 school management ERP system
//               </a>{' '}
//               to creative{' '}
//               <a
//                 href="school-website-development-services.php"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 web design and development
//               </a>
//               ,{' '}
//               <a
//                 href="social-media.php"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 content management
//               </a>
//               , and{' '}
//               <a
//                 href="school-advisory.php"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 advisory & consultancy
//               </a>{' '}
//               services, we provide solutions that empower schools in Pakistan in this digital age. Simsin’s{' '}
//               <a
//                 href="https://simsin.com.pk/lp/addmission-tool/"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 online admission tool
//               </a>{' '}
//               and{' '}
//               <a
//                 href="school-social-media-services.php"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 social media marketing
//               </a>{' '}
//               services increase your admissions and help you target the right audience easily. SIMSIN also provides customized school software and portals like{' '}
//               <a
//                 href="https://parho.simsin.com.pk/login"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 Parho – Online Learning Platform
//               </a>
//               ,{' '}
//               <a
//                 href="school-technologies.php"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 School Khata
//               </a>
//               , and{' '}
//               <a
//                 href="school-technologies.php"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 Time Punch
//               </a>
//               . Contact us today and explore our services and products to find the perfect fit for your school to turn it into a{' '}
//               <a
//                 href="digital-school.php"
//                 className="text-indigo-600 hover:text-indigo-800 underline transition"
//               >
//                 Digital School
//               </a>
//               .
//             </p>
//             <button
//               type="button"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition"
//               onClick={() => {
//                 // Handle modal open logic here (e.g., setModalOpen(true))
//                 alert('Open Get Started Modal');
//               }}
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SimsinServices;

























import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SimsinServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // initialize AOS with default duration
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="bg-black/5 py-10">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center space-y-6"
            data-aos="fade-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Services &amp; Products of <span className="text-indigo-600">SIMSIN</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Discover the wide range of services and products offered by SIMSIN. From comprehensive{' '}
              <a
                href="https:/erp.meritaleempk.com"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                school management ERP system
              </a>{' '}
              to creative{' '}
              <a
                href="school-website-development-services.php"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                web design and development
              </a>
              ,{' '}
              <a
                href="social-media.php"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                content management
              </a>
              , and{' '}
              <a
                href="school-advisory.php"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                advisory & consultancy
              </a>{' '}
              services, we provide solutions that empower schools in Pakistan in this digital age. Simsin’s{' '}
              <a
                href="https://simsin.com.pk/lp/addmission-tool/"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                online admission tool
              </a>{' '}
              and{' '}
              <a
                href="school-social-media-services.php"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                social media marketing
              </a>{' '}
              services increase your admissions and help you target the right audience easily. SIMSIN also provides customized school software and portals like{' '}
              <a
                href="https://parho.simsin.com.pk/login"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                Parho – Online Learning Platform
              </a>
              ,{' '}
              <a
                href="school-technologies.php"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                School Khata
              </a>
              , and{' '}
              <a
                href="school-technologies.php"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                Time Punch
              </a>
              . Contact us today and explore our services and products to find the perfect fit for your school to turn it into a{' '}
              <a
                href="digital-school.php"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                Digital School
              </a>
              .
            </p>
            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition"
              data-aos="zoom-in"
              data-aos-delay="200"
              onClick={() => {
                alert('Open Get Started Modal');
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimsinServices;
