import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SchoolAdvisorySection = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  const accordionItems = [
    {
      id: 'one',
      title: 'Consultancy & Advisory Services',
      content:
        'We focus on a custom approach for every school to quickly identify and prioritize its strengths and weaknesses.',
    },
    {
      id: 'two',
      title: 'Outsourcing Services',
      content:
        'Our outsourcing strategy is to collaborate with schools as partners, using our expertise to raise the caliber of their work.',
    },
    {
      id: 'three',
      title: 'Digital Learning Advisory',
      content:
        'Improve the quality of teaching with digital learning. We create customized learning opportunities to improve student achievement and make education accessible.',
    },
    {
      id: 'four',
      title: 'School BPO',
      content:
        'Our BPO services strive to enhance delivery excellence while ensuring quality and security standards compliance.',
    },
    {
      id: 'five',
      title: 'Centralized Structuring',
      content:
        'Our corporation envisions itself as a centralized organization, where decisions are taken at the top and passed down the line of command to increase the quality of work.',
    },
  ]

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div
            className="md:w-3/4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-blue-600">School</span> Advisory
            </h3>
            <p className="text-gray-700">
              Our Advisory and Outsourcing services can take care of the administrative tasks, giving your school more time to focus on teaching and better outcomes.
            </p>
          </div>
          <div
            className="hidden lg:block"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <a
              href="school-advisory.php"
              className="btn bg-blue-600 text-white px-6 py-2 rounded w-full mt-4 text-center block"
            >
              View All
            </a>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {accordionItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white shadow rounded overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              <details className="group">
                <summary className="cursor-pointer px-6 py-4 bg-gray-100 font-semibold hover:bg-blue-50">
                  {item.title}
                </summary>
                <div className="px-6 py-4 text-gray-700">
                  <p>{item.content}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div
          className="block md:hidden mt-8 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a
            href="school-advisory.php"
            className="btn bg-blue-600 text-white px-6 py-2 rounded w-full max-w-xs mx-auto"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  )
}

export default SchoolAdvisorySection
