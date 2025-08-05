import React from 'react';

const AboutSimsin = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 xl:max-w-[90%]">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Video Section */}
          <div
            className="w-full lg:w-1/2 relative group animate-fade-right duration-1000"
          >
            <div className="rounded-lg overflow-hidden shadow-lg relative">
              <video
                src="https://simsin.com.pk/assets/video/simsin.mp4"
                alt="SIMSIN | The School Digital Partner"
                className="w-full h-auto object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <a
                  href="https://simsin.com.pk/assets/video/simsin.mp4"
                  data-fancybox="video-gallery"
                  className="text-white text-6xl hover:scale-110 transition-transform"
                  aria-label="Video About SIMSIN"
                >
                  <span className="icon-play-circle">&#9658;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 animate-fade-left duration-1000 space-y-4">
            <h2 className="text-4xl font-bold">
              About <span className="text-indigo-600">SIMSIN</span>
            </h2>
            <p>
              SIMSIN was founded in 2007 with the mission of digitalizing schools. We are proud to be "the school digital partner," completed 1000+ projects, and managing 250k+ students across the country.
            </p>
            <p>
              As pioneers in school digital consultancy, we have over 15 years of experience helping schools make the most of technology. That’s why we developed Simsin ERP — a comprehensive solution that integrates admissions, student management, attendance, and finance.
            </p>
            <p>
              In addition to our School Management Systems, SIMSIN offers a range of SaaS services to support schools in their digital transformation journey.
            </p>
            <a
              href="about.php"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded transition"
              aria-label="About SIMSIN"
            >
              Learn More About SIMSIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimsin;
