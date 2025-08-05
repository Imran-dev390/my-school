import React from 'react'

const ZeroSection = () => {
  return (
     <section className="py-10">
      <div className="container mx-auto pt-10 px-4">
        <div className="flex justify-center text-center">
          <div
            className="w-full max-w-3xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="text-purple-600">SIMSIN</span> helps in Growth of your{" "}
              <span className="text-blue-600">School</span>
            </h2>
            <p className="text-gray-700">
              SIMSIN provides schools with the best chance at success by digitally
              connecting them to our practical modules.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZeroSection
