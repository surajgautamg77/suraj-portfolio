import React from "react";
import { Link } from "react-router-dom";

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Kings Club Games",
      description:
        "Comprehensive software solution for KingsClub, enabling users to play various games and win money, with administrative tools for managing games and users.",
      image:
        "https://via.placeholder.com/800x500/4F46E5/FFFFFF?text=Kings+Club",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Tailwind CSS",
        "AWS S3",
      ],
      liveUrl: "https://kingsclub.games/",
      featured: true,
    },
    {
      id: 2,
      title: "Hadabon (Web and Mobile Application)",
      description:
        "An application that allows users to capture photos to identify skin problems, track improvement, book doctor appointments, and purchase beauty products.",
      image: "https://via.placeholder.com/800x500/10B981/FFFFFF?text=Hadabon",
      technologies: ["Node.js", "Express.js", "MongoDB", "API Integration"],
      liveUrl: "https://www.hadabon.jp/",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.aquaage.hadabon",
      featured: true,
    },
    {
      id: 3,
      title: "Physics Wallah Backend APIs",
      description:
        "Developed backend APIs for Physics Wallah's mobile application, facilitating efficient communication between the frontend and the database.",
      image:
        "https://via.placeholder.com/800x500/F59E0B/FFFFFF?text=Physics+Wallah",
      technologies: ["Node.js", "Express.js", "MongoDB", "Authentication"],
      featured: false,
    },
    {
      id: 4,
      title: "Personal Developer Portfolio",
      description:
        "A responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills with dark/light mode support.",
      image: "https://via.placeholder.com/800x500/3B82F6/FFFFFF?text=Portfolio",
      technologies: ["React.js", "Tailwind CSS", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/surajgautam27/portfolio",
      featured: false,
    },
    {
      id: 5,
      title: "Task Management System",
      description:
        "A full-stack task management application allowing users to create, assign, track, and manage tasks with different priority levels.",
      image:
        "https://via.placeholder.com/800x500/8B5CF6/FFFFFF?text=Task+Management",
      technologies: ["MERN Stack", "Redux", "JWT Authentication"],
      githubUrl: "https://github.com/surajgautam27/task-management",
      featured: false,
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description:
        "A MERN stack e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration.",
      image:
        "https://via.placeholder.com/800x500/EC4899/FFFFFF?text=E-commerce",
      technologies: ["MERN Stack", "Redux", "Payment Gateway Integration"],
      githubUrl: "https://github.com/surajgautam27/ecommerce-platform",
      featured: false,
    },
  ];

  return (
    <>
      {/* Projects Header */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
          A showcase of my work spanning web development, API design, and
          full-stack applications.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          GitHub
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      )}
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          More Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
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
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                      >
                        GitHub
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Hire Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-8 md:p-12 shadow-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm available for new opportunities and would love to discuss how my
            skills can help your team or project succeed.
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

export default ProjectsPage;
