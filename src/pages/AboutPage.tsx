import React from "react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <>
      {/* About Header */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
          A passionate MERN Stack Developer driven by creating effective
          solutions and elegant code.
        </p>
      </section>

      {/* Profile Overview */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
              <img
                src="https://via.placeholder.com/256x256/4F46E5/FFFFFF?text=SG"
                alt="Suraj Gautam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Suraj Gautam
              </h2>
              <h3 className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-4">
                MERN Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a results-driven MERN stack developer with experience
                building backend APIs and full-stack web applications. I
                specialize in Node.js, Express.js, MongoDB, and React.js, with a
                focus on creating efficient, scalable, and maintainable code.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Jaunpur, Uttar Pradesh, India
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:surajgautamg77@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    surajgautamg77@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+919451306025"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    +91 9451306025
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Connect
                  </h4>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/surajgautam27"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      GitHub
                    </a>
                    <span className="text-gray-400">•</span>
                    <a
                      href="https://www.linkedin.com/in/suraj-gautam-897284184/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          My Journey
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            I discovered my passion for programming during my college years at
            Harcourt Butler Technical University, where I earned my Bachelor of
            Technology degree with a 7.15 CGPA. What started as curiosity
            quickly evolved into a career path when I began working with web
            technologies.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Over the past 2 years, I've had the opportunity to work on a variety
            of projects, from developing backend APIs for mobile applications to
            creating comprehensive web solutions for clients. My experience
            includes working with startups and established businesses like
            Physics Wallah and Kings Club.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            My approach to development focuses on writing clean, efficient code
            that solves real problems. I'm continuously learning and expanding
            my skill set to stay current with the latest technologies and best
            practices in web development.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Backend Development
            </h3>
            <ul className="space-y-3">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "RESTful API Design",
                "Authentication & Authorization",
                "AWS S3",
                "PM2",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Frontend Development
            </h3>
            <ul className="space-y-3">
              {[
                "React.js",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Responsive Design",
                "Redux",
                "React Router",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Tools & Workflows
            </h3>
            <ul className="space-y-3">
              {[
                "Git & GitHub",
                "Postman",
                "VSCode",
                "Agile/Scrum Methodology",
                "NPM/Yarn",
                "CI/CD",
                "Debugging & Testing",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Other Skills
            </h3>
            <ul className="space-y-3">
              {[
                "Problem Solving",
                "Communication",
                "Team Collaboration",
                "Project Management",
                "Attention to Detail",
                "Self-motivated Learning",
                "Documentation",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          Work Experience
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  MERN Stack Developer
                </h3>
                <p className="text-blue-600 dark:text-blue-400">
                  Physics Wallah
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                Jan 2022 - Mar 2022
              </p>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-5 list-disc">
              <li>
                Developed backend APIs for the mobile application, facilitating
                smooth communication between the frontend and database.
              </li>
              <li>
                Used Node.js, Express.js, and MongoDB to create a scalable and
                efficient backend architecture.
              </li>
              <li>
                Implemented secure authentication mechanisms and robust error
                handling for the APIs.
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  MERN Stack Developer
                </h3>
                <p className="text-blue-600 dark:text-blue-400">Kings Club</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                Apr 2022 - Apr 2023
              </p>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-5 list-disc">
              <li>
                Developed a comprehensive software solution that enabled users
                to play various games and win money, including features for user
                authentication, game management, and transaction processing.
              </li>
              <li>
                Created administrative tools for managing games, users, and
                monitoring platform activity.
              </li>
              <li>
                Utilized Node.js, Express.js, MongoDB, React.js, and Tailwind
                CSS to build a full-stack application with a responsive user
                interface.
              </li>
              <li>
                Implemented AWS S3 for storing user media and integrated payment
                gateways for seamless transactions.
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  Backend Developer
                </h3>
                <p className="text-blue-600 dark:text-blue-400">
                  Hadabon (Mobile Application)
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                Sep 2023 - Nov 2023
              </p>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-5 list-disc">
              <li>
                Developed backend APIs for a mobile application that allowed
                users to capture photos to identify skin problems, track
                improvement, and purchase beauty products.
              </li>
              <li>
                Designed and implemented a database schema for storing user
                data, skin analysis results, and product information.
              </li>
              <li>
                Integrated the application with external services for scheduling
                doctor appointments and processing payments.
              </li>
              <li>
                Used Node.js and Express.js for API development, with MongoDB
                for data storage.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          Education
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Bachelor of Technology
              </h3>
              <p className="text-blue-600 dark:text-blue-400">
                Harcourt Butler Technical University, Kanpur
              </p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              2016 - 2020
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Graduated with a 7.15 CGPA, focusing on computer science and
            engineering fundamentals. Participated in various technical
            competitions and workshops.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 md:p-12 rounded-xl text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities to contribute my skills
            and expertise. If you're looking for a dedicated MERN stack
            developer, let's connect!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
