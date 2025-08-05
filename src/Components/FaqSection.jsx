import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Disclosure } from '@headlessui/react';
//import { ChevronUpIcon } from '@heroicons/react/solid';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: "What is SIMSIN?",
    answer:
      "SIMSIN is a by-product of ARWAJ Tech, founded in 2007 in Karachi, to revolutionize the education sector into a digital education system in Pakistan by introducing products like SIMSIN ERP - School Management System, School Khata, Time Punch, and Admission Tool.",
  },
  {
    question: "What Products Does SIMSIN Provide?",
    answer: (
      <ul className="list-disc ml-6 space-y-1">
        <li>SIMSIN ERP - School Management System</li>
        <li>School Khata - Finance Management System</li>
        <li>Time Punch - Time Management System</li>
        <li>Parho - Online Learning Platform</li>
        <li>Admission Tool - Admission and Student Management System</li>
        <li>Customized Software for Schools in Pakistan</li>
      </ul>
    ),
  },
  {
    question: "What Services Does SIMSIN Provide?",
    answer: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Web Design & Development Services for Schools</li>
        <li>Social Media Marketing Services for Schools</li>
        <li>School Consultancy Services</li>
        <li>School Advisory Services</li>
        <li>Outsourcing Services for Schools</li>
        <li>Paid Marketing Services for Schools</li>
        <li>Digital Marketing for Schools</li>
      </ul>
    ),
  },
  {
    question: "Why Should I Choose SIMSIN for my School?",
    answer:
      "SIMSIN is the trusted digital partner for schools in Pakistan, with 15+ years of experience, 250+ partner schools, and 200,000+ students impacted through SIMSIN ERP.",
  },
  {
    question: "In Which Cities Does SIMSIN Operate?",
    answer:
      "The headquarters is in Karachi, but any school in Lahore, Islamabad, Hyderabad, Peshawar, Multan, or Faisalabad can onboard and access tailored services and products.",
  },
];

export default function FaqSection() {
  useEffect(() => {
    AOS.init({ once: true }); // `once: true` = animate only once per element
  }, []);

  return (
    <section className="bg-gray-300 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div
                  className="bg-white shadow-md rounded-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={`${idx * 200}`}
                >
                  <Disclosure.Button className="flex w-full justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 focus:outline-none">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-blue-600 transition-transform duration-200`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-4 pt-1 text-gray-700 text-sm">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
