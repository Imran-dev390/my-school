import {
  FaLaptopCode,     // Website Development
  FaGlobe,          // Digital Presence
  FaUserPlus,       // Admission Tools
  FaServer,         // Secure Hosting
  FaGraduationCap,  // EDU-Domain
  FaAngleRight      // Bottom arrow icon
} from 'react-icons/fa';

const cardData = [
  {
    title: 'School Website Development',
    desc: 'We provide the best design and navigation for school websites that support education, improve engagement and boost your online presence.',
    img: 'assets/img/d-s-1.png',
    icon: <FaLaptopCode />,
  },
  {
    title: 'School Digital Presence',
    desc: 'We ensure your school is digitally present on all available platforms where parents and students can interact with you.',
    img: 'assets/img/d-s-6.png',
    icon: <FaGlobe />,
  },
  {
    title: 'Online Admission Tools',
    desc: 'We provide a comprehensive online admission platform that connects parents and reduces hassle.',
    img: 'assets/img/d-s-4.png',
    icon: <FaUserPlus />,
  },
  {
    title: 'Secure Hosting',
    desc: 'We preserve your digital presence from malware and provide smooth hosting for school operations.',
    img: 'assets/img/d-s-2.png',
    icon: <FaServer />,
  },
  {
    title: 'EDU-Domain',
    desc: 'We provide an "Edu domain" to make your site stand out and have a strong digital school presence.',
    img: 'assets/img/d-s-5.png',
    icon: <FaGraduationCap />,
  },
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 px-2">
      {cardData.map((item, idx) => (
        <div
          key={idx}
          className="relative group bg-white shadow-md rounded-xl p-5 pt-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay={idx * 100}
          data-aos-duration="1000"
        >
          {/* Faded background image in top right */}
          {/* <div className="absolute -top-4 -right-4 w-20 h-20 opacity-20 pointer-events-none">
            <img
              src={item.icon}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div> */}
           <div className="w-16 h-16 justify-center bg-blue-100 text-blue-700 rounded-full flex items-center  text-lg shadow">
              {item.icon}
            </div>

          {/* Title */}
          <h4 className="text-2xl font-bold text-blue-600 mt-2">{item.title}</h4>

          {/* Description */}
          <p className="text-md text-gray-600 mt-2">{item.desc}</p>

          {/* Bottom Icons */}
          <div className="mt-6 flex items-center justify-between">

            {/* Right arrow icon */}
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow transition-transform duration-300 group-hover:translate-x-1">
              <FaAngleRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
