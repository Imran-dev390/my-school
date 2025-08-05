import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      title: 'Digital School',
      dropdown: ['School Website Development', 'Digital Presence', 'Admission Tool', 'Edu-domain', 'Secure Hosting']
    },
    {
      title: 'Social Media',
      dropdown: ['School Social Media', 'Branding & Rebranding', 'Optimization', 'Content Management', 'Digital Marketing']
    },
    {
      title: 'Technologies',
      dropdown: ['ERP System', 'Time Punch – HCMS', 'School Khata', 'Mobile Apps', 'Education Software', 'Parho – Online Platform']
    },
    {
      title: 'School Advisory',
      dropdown: ['Consultancy', 'School BPO', 'Outsourcing', 'Digital Advisory', 'Centralized Structuring']
    }
  ];

  return (
    <header className="bg-white shadow py-2">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center h-16 w-52 space-x-2">
            <img src="/logo.jpg" alt="Logo" className="h-full w-full  object-cover" />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu */}
         <ul className={`lg:flex lg:flex-row lg:items-center flex-col absolute lg:static bg-white left-0 top-full w-full lg:w-auto lg:space-x-8 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} lg:block z-50`}>
            {menuItems.map((item, idx) => (
              <li key={idx} className="group relative px-4 py-2 lg:py-0">
                <span className="cursor-pointer font-medium">{item.title}</span>
                <ul className="hidden group-hover:block lg:absolute bg-white shadow-md mt-2 py-2 w-56 z-40">
                  {item.dropdown.map((subItem, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {subItem}
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Extra items for desktop only */}
            <li className="hidden lg:flex items-center space-x-2 px-4">
              <span className="text-green-600 font-semibold">📞 0340-5550120</span>
            </li>
            <li className="hidden lg:block">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
