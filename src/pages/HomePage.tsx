import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="py-16 md:py-28 px-4 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="text-gray-800 dark:text-gray-100">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
              Suraj Gautam
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 leading-relaxed">
            MERN Stack Developer specialized in building reliable web
            applications with clean, efficient code.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium py-3 md:py-4 px-8 md:px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Hire Me
            </Link>
            <a
              href="#projects"
              className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-900 hover:text-white py-3 md:py-4 px-8 md:px-10 rounded-lg transition-colors duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
            {/* Replace with your actual profile image */}
            <img
              src="https://via.placeholder.com/320x320/4F46E5/FFFFFF?text=SG"
              alt="Suraj Gautam"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Me Short Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
            About Me
          </h2>
          <div className="text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed">
            <p>
              I'm a MERN stack developer with 2 years of experience building
              backend APIs and full-stack web applications. I've had the
              opportunity to work on impactful projects for clients like Physics
              Wallah and Kings Club.
            </p>
            <p>
              My expertise includes backend technologies such as Node.js,
              Express.js, and MongoDB, as well as frontend technologies
              including React.js, JavaScript, and Tailwind CSS. I'm passionate
              about creating efficient, scalable solutions.
            </p>
            <p>
              Based in Jaunpur, Uttar Pradesh, I earned my Bachelor of
              Technology degree from Harcourt Butler Technical University,
              Kanpur with a 7.15 CGPA. I'm eager to join a dynamic team and
              contribute to meaningful projects.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Learn more about me →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "Express.js", icon: "devicon-express-original" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "React.js", icon: "devicon-react-original" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
            { name: "HTML5", icon: "devicon-html5-plain" },
            { name: "CSS3", icon: "devicon-css3-plain" },
            { name: "Git", icon: "devicon-git-plain" },
            { name: "GitHub", icon: "devicon-github-plain" },
            { name: "AWS S3", icon: "devicon-amazonwebservices-original" },
            { name: "PM2", icon: "devicon-pm2-plain" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100 dark:border-gray-700"
            >
              {/* For simplicity, using a placeholder color block instead of actual icons */}
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 inline-block rounded-lg mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md"></div>
              </div>
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section
        id="projects"
        className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden dark:border dark:border-gray-700 flex flex-col h-full">
            <div className="h-56 overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Kings+Club"
                alt="Kings Club Games"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Kings Club Games
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                Comprehensive software solution for KingsClub, enabling users to
                play various games and win money, with administrative tools for
                managing games and users.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "React.js",
                  "Tailwind CSS",
                  "AWS S3",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href="https://kingsclub.games/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                >
                  Live Site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden dark:border dark:border-gray-700 flex flex-col h-full">
            <div className="h-56 overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400/10B981/FFFFFF?text=Hadabon"
                alt="Hadabon App"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Hadabon (Web and Mobile Application)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                An application that allows users to capture photos to identify
                skin problems, track improvement, book doctor appointments, and
                purchase beauty products.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express.js", "MongoDB", "API Integration"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href="https://www.hadabon.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.aquaage.hadabon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                >
                  Google Play
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 md:mt-12">
          <Link
            to="/projects"
            className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-900 hover:text-white py-3 px-8 rounded-lg transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm eager to join a dynamic team and contribute to meaningful
            projects. If you're looking for a dedicated MERN stack developer,
            feel free to reach out.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
