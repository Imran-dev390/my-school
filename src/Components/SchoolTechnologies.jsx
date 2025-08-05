import React from 'react';

const SchoolTechnologies = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 xl:w-[90%]">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10">
          {/* Left Section */}
          <div
            className="lg:w-1/3 self-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-[#004aad]">School</span> Technologies
            </h3>
            <p className="mb-6 text-gray-700">
              Everyone wants to be productive. We know that, and we're here to help you get there. We offer a set of technology solutions for your intrinsic work. Many things on the new technological tab will undoubtedly improve your core working. With SIMSIN, you can connect your school with the world of technology.
            </p>
            <div className="hidden md:flex gap-4">
              <a
                href="school-technologies.php"
                className="btn bg-[#004aad] text-white px-4 py-2 rounded shadow"
              >
                Explore All
              </a>
              <a
                href="erp-school-management-system.php"
                className="btn bg-[#004aad] text-white px-4 py-2 rounded shadow"
              >
                Simsin ERP
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div
                className="bg-gray-100 rounded shadow p-4"
                data-aos="fade-down-right"
                data-aos-duration="1000"
              >
                <h4 className="text-xl font-semibold mb-2">SIMSIN ERP – School Management System</h4>
                <p className="text-gray-600">
                  With comprehensive cloud-based ERP software, SIMSIN brings efficiency to the school's daily operations.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="bg-gray-100 rounded shadow p-4"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                <h4 className="text-xl font-semibold mb-2">School Mobile Apps</h4>
                <p className="text-gray-600">
                  Get the school's news and events in real time, so you never miss anything.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="bg-gray-100 rounded shadow p-4"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <h4 className="text-xl font-semibold mb-2">Time Punch – HCMS</h4>
                <p className="text-gray-600">
                  Automate the HR operation of your school with us to increase productivity.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="bg-gray-100 rounded shadow p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h4 className="text-xl font-semibold mb-2">Specialized Education Software</h4>
                <p className="text-gray-600">
                  Customized software solutions tailored for your school's specific needs.
                </p>
              </div>

              {/* Card 5 */}
              <div
                className="bg-gray-100 rounded shadow p-4"
                data-aos="fade-down-left"
                data-aos-duration="1000"
              >
                <h4 className="text-xl font-semibold mb-2">School Khata</h4>
                <p className="text-gray-600">
                  Manage your school's finances with insights and smart tools.
                </p>
              </div>

              {/* Card 6 */}
              <div
                className="bg-gray-100 rounded shadow p-4"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                <h4 className="text-xl font-semibold mb-2">Parho – Online Learning Platform</h4>
                <p className="text-gray-600">
                  Flexible and affordable e-learning solution for schools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA buttons */}
        <div
          className="block md:hidden mt-8 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a
            className="btn bg-[#004aad] text-white px-6 py-2 rounded"
            href="school-technologies.php"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default SchoolTechnologies;
