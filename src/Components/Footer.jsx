import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="bg-gray-200 bg-opacity-60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            {/* Quick Links */}
            <div className="w-full lg:w-2/3">
              <p className="text-2xl font-semibold mb-6">Quick Links</p>
              <div className="flex flex-wrap">
                {/* Each column */}
                {[
                  [
                    { label: "Digital School", href: "digital-school.php" },
                    { label: "School Website Development", href: "school-website-development-services.php" },
                    { label: "School Digital Presence", href: "digital-school.php" },
                    { label: "Admission Tool", href: "lp/addmission-tool/" },
                    { label: "Edu-domain", href: "digital-school.php" },
                    { label: "Secure Hosting", href: "digital-school.php" },
                    { label: "Social Media", href: "social-media.php" },
                  ],
                  [
                    { label: "School Social Media", href: "school-social-media-services.php" },
                    { label: "School Branding & Rebranding", href: "social-media.php" },
                    { label: "Social Media Optimization", href: "social-media.php" },
                    { label: "Content Management", href: "social-media.php" },
                    { label: "Digital Marketing", href: "social-media.php" },
                    { label: "Technologies", href: "school-technologies.php" },
                    { label: "ERP – School Management System", href: "erp-school-management-system.php" },
                    { label: "Time Punch – HCMS", href: "school-technologies.php" },
                  ],
                  [
                    { label: "School Khata", href: "school-technologies.php" },
                    { label: "School Mobile Apps", href: "school-technologies.php" },
                    { label: "Specialized Education Software", href: "school-technologies.php" },
                    { label: "Parho – Online Learning Platform", href: "http://parho.simsin.com.pk/login", external: true },
                    { label: "School Advisory", href: "school-advisory.php" },
                    { label: "Consultancy & Advisory", href: "school-advisory.php" },
                    { label: "Campus BPO", href: "school-advisory.php" },
                    { label: "Outsourcing", href: "school-advisory.php" },
                  ],
                  [
                    { label: "Centralized Structuring", href: "school-advisory.php" },
                    { label: "Digital Learning Advisory", href: "school-advisory.php" },
                    { label: "Home", href: "https://simsin.com.pk/" },
                    { label: "About Us", href: "about.php" },
                    { label: "Blogs", href: "blogs" },
                    { label: "Contact Us", href: "contact-us.php" },
                    { label: "Privacy Policy", href: "privacy.php" },
                    { label: "Terms And Conditions", href: "terms.php" },
                  ],
                ].map((col, i) => (
                  <div key={i} className="w-1/2 md:w-1/4 mb-6">
                    <ul className="space-y-2">
                      {col.map(({ label, href, external }) => (
                        <li key={label} className="mt-2">
                          <a
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="text-gray-700 hover:text-blue-600 transition"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/3 pt-10 lg:pt-0 lg:pl-12">
              <p className="text-2xl font-semibold mb-6">Contact info</p>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5h2l3.6 7.59a1 1 0 01-.36 1.36l-3 2a12.045 12.045 0 006 6l2-3a1 1 0 011.36-.36L19 19v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold">Call Us</span>
                    <br />
                    <a href="tel:02134526043" className="hover:text-blue-600">021-34526043</a>,{" "}
                    <a href="tel:03405550120" className="hover:text-blue-600">0340-5550120</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h2a2 2 0 012 2v4a2 2 0 01-2 2h-2m-4-6h4m-6 0H4a2 2 0 00-2 2v4a2 2 0 002 2h4m6-8v8" />
                  </svg>
                  <div>
                    <span className="font-semibold">Mail Us</span>
                    <br />
                    <a href="mailto:info@simsin.com.pk" className="hover:text-blue-600">info@simsin.com.pk</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314 8 8 0 00-6.364 13.071z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Find Us</span>
                    <br />
                    <a
                      href="https://goo.gl/maps/vFGL2w6D6feFRKZf8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >
                      Office 47-H، Street 47، off Shahrah-e-Faisal Road, Block 6 PECHS, Karachi, Sindh 75400, Pakistan
                    </a>
                  </div>
                </li>
                <li>
                  <span className="font-semibold block mb-2">Follow Us</span>
                  <ul className="flex space-x-6 text-blue-600">
                    <li>
                      <a href="https://www.facebook.com/SIMSINbyARWAJ" target="_blank" rel="noopener noreferrer" aria-label="SIMSIN Facebook Page">
                        <i className="fab fa-facebook-f text-xl"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/simsinbyarwaj/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="SIMSIN Instagram Page">
                        <i className="fab fa-instagram text-xl"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/SIMSINbyARWAJ" target="_blank" rel="noopener noreferrer" aria-label="SIMSIN Twitter Page">
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://pk.linkedin.com/company/simsinbyarwaj" target="_blank" rel="noopener noreferrer" aria-label="SIMSIN Linkedin Page">
                        <i className="fab fa-linkedin-in text-xl"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/SimsinbyArwaj/" target="_blank" rel="noopener noreferrer" aria-label="SIMSIN Pinterest Page">
                        <i className="fab fa-pinterest-p text-xl"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-gray-300 text-center text-gray-600 text-sm">
            <p>
              © 2025. All Rights Reserved By SIMSIN Edtech Private Limited. | A Group Company of Arwaj Technologies Private Limited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
