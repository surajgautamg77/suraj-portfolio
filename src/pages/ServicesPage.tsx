import React from "react";
import { Link } from "react-router-dom";

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Services Header */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-0 max-w-3xl mx-auto">
          We offer a range of professional services to help your business grow
          and succeed in the digital world.
        </p>
      </section>

      {/* Main Services */}
      <section className="py-8 md:py-10 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-10 md:gap-16">
          {/* Web Development */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="bg-blue-100 p-4 md:p-6 rounded-lg shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 md:h-16 w-12 md:w-16 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-blue-600">
                  Web Development
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our web development services include creating custom websites,
                  web applications, e-commerce solutions, and content management
                  systems. We use modern technologies and frameworks to build
                  responsive, high-performance, and user-friendly web
                  experiences.
                </p>
                <div className="mt-4 md:mt-6">
                  <h3 className="text-lg md:text-xl font-medium mb-2 text-gray-800">
                    Technologies We Use:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      Angular
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      Vue.js
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      PHP
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      WordPress
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      Shopify
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="bg-blue-100 p-4 md:p-6 rounded-lg shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 md:h-16 w-12 md:w-16 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-blue-600">
                  Mobile App Development
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We develop high-quality native and cross-platform mobile
                  applications for iOS and Android. Our mobile solutions are
                  designed to provide seamless user experiences, optimal
                  performance, and robust functionality across all devices.
                </p>
                <div className="mt-4 md:mt-6">
                  <h3 className="text-lg md:text-xl font-medium mb-2 text-gray-800">
                    Technologies We Use:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      React Native
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      Flutter
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      Swift
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      Kotlin
                    </span>
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm">
                      Java
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consulting */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="bg-blue-100 p-4 md:p-6 rounded-lg shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 md:h-16 w-12 md:w-16 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-blue-600">
                  Technology Consulting
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our technology consulting services provide expert guidance to
                  help your business make informed decisions about technology
                  investments, strategy, and implementation. We work closely
                  with you to understand your business goals and develop
                  customized solutions.
                </p>
                <div className="mt-4 md:mt-6">
                  <h3 className="text-lg md:text-xl font-medium mb-2 text-gray-800">
                    Our Consulting Services Include:
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1 md:space-y-2">
                    <li>Digital Transformation Strategy</li>
                    <li>Technology Stack Assessment</li>
                    <li>IT Infrastructure Planning</li>
                    <li>Software Architecture Design</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-10 rounded-2xl shadow-md border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Contact us today to discuss how we can help your business grow with
            our services.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
