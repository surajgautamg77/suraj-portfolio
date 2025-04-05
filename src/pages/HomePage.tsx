import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  // Group skills by category with ratings
  const skills = {
    backend: [
      {
        name: "Node.js",
        icon: "⬢",
        color: "text-green-600 dark:text-green-400",
        rating: 5,
      },
      {
        name: "Python",
        icon: "🐍",
        color: "text-blue-700 dark:text-blue-400",
        rating: 4,
      },
      {
        name: "PostgreSQL",
        icon: "🐘",
        color: "text-blue-800 dark:text-blue-400",
        rating: 4,
      },
      {
        name: "MongoDB",
        icon: "🍃",
        color: "text-green-500 dark:text-green-400",
        rating: 5,
      },
      {
        name: "Gen AI",
        icon: "🧠",
        color: "text-purple-600 dark:text-purple-400",
        rating: 3,
      },
    ],
    frameworks: [
      {
        name: "Express.js",
        icon: "𝓔",
        color: "text-gray-700 dark:text-gray-300",
        rating: 5,
      },
      {
        name: "NestJS",
        icon: "🪺",
        color: "text-red-600 dark:text-red-400",
        rating: 4,
      },
      {
        name: "FastAPI",
        icon: "⚡",
        color: "text-teal-600 dark:text-teal-400",
        rating: 3,
      },
      {
        name: "React.js",
        icon: "⚛️",
        color: "text-blue-500 dark:text-blue-400",
        rating: 4,
      },
      {
        name: "PM2",
        icon: "⚙️",
        color: "text-blue-500 dark:text-blue-400",
        rating: 4,
      },
    ],
    frontend: [
      {
        name: "JavaScript",
        icon: "𝙅𝙎",
        color: "text-yellow-500 dark:text-yellow-400",
        rating: 5,
      },
      {
        name: "TypeScript",
        icon: "𝗧𝗦",
        color: "text-blue-600 dark:text-blue-400",
        rating: 4,
      },
      {
        name: "Tailwind CSS",
        icon: "🌊",
        color: "text-cyan-500 dark:text-cyan-400",
        rating: 4,
      },
      {
        name: "HTML5",
        icon: "🔱",
        color: "text-orange-500 dark:text-orange-400",
        rating: 5,
      },
      {
        name: "CSS3",
        icon: "🎨",
        color: "text-blue-600 dark:text-blue-400",
        rating: 4,
      },
    ],
    others: [
      {
        name: "Git",
        icon: "🌿",
        color: "text-red-500 dark:text-red-400",
        rating: 4,
      },
      {
        name: "GitHub",
        icon: "🐱",
        color: "text-gray-700 dark:text-gray-300",
        rating: 4,
      },
      {
        name: "AWS",
        icon: "☁️",
        color: "text-orange-500 dark:text-orange-400",
        rating: 3,
      },
      {
        name: "Docker",
        icon: "🐳",
        color: "text-blue-600 dark:text-blue-400",
        rating: 3,
      },
    ],
  };

  // Project data
  const projects = [
    {
      title: "Kings Club Games",
      description:
        "Comprehensive software solution for KingsClub, enabling users to play various games and win money, with administrative tools for managing games and users.",
      image:
        "https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Kings+Club",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Tailwind CSS",
        "AWS S3",
      ],
      liveUrl: "https://kingsclub.games/",
      hasLiveSite: true,
    },
    {
      title: "Hadabon (Web and Mobile Application)",
      description:
        "An application that allows users to capture photos to identify skin problems, track improvement, book doctor appointments, and purchase beauty products.",
      image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Hadabon",
      tags: ["Node.js", "Express.js", "MongoDB", "API Integration"],
      liveUrl: "https://www.hadabon.jp/",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.aquaage.hadabon",
      hasPlayStore: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A fully-featured online store with product catalog, shopping cart, user authentication, payment integration, and admin dashboard for inventory management.",
      image:
        "https://via.placeholder.com/600x400/EC4899/FFFFFF?text=E-Commerce",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Redux",
        "Payment Gateway",
      ],
      githubUrl: "https://github.com/surajgautam27/ecommerce-platform",
      hasGithub: true,
    },
  ];

  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${
              star <= rating
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Helper function to render a section title
  const renderSectionTitle = (title: string) => (
    <div className="flex items-center justify-center mb-8">
      <div className="h-0.5 bg-gray-200 dark:bg-gray-700 w-16 md:w-24"></div>
      <h3 className="text-xl md:text-2xl font-bold mx-4 py-2 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-md">
        {title}
      </h3>
      <div className="h-0.5 bg-gray-200 dark:bg-gray-700 w-16 md:w-24"></div>
    </div>
  );

  // Helper function to render a skill card
  const renderSkillCard = (
    skill: (typeof skills.backend)[0],
    index: number
  ) => (
    <div
      key={index}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 dark:border-gray-700"
    >
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-750 p-4 flex justify-center items-center h-24">
        <span
          className={`text-4xl ${skill.color} group-hover:scale-110 transform transition-transform duration-300`}
        >
          {skill.icon}
        </span>
      </div>
      <div className="px-3 py-3 text-center">
        <h3 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
          {skill.name}
        </h3>
        {renderStars(skill.rating)}
      </div>
    </div>
  );

  // Helper function to render a project card
  const renderProjectCard = (project: (typeof projects)[0], index: number) => (
    <div
      key={index}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden dark:border dark:border-gray-700 flex flex-col h-full"
    >
      <div className="h-48 md:h-56 overflow-hidden">
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
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.hasLiveSite && (
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
          {project.hasPlayStore && (
            <a
              href={project.playStoreUrl}
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
          )}
          {project.hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
            >
              GitHub
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
  );

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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text">
          Skills & Technologies
        </h2>

        {/* Backend Skills */}
        <div className="mb-16">
          {renderSectionTitle("Backend & Databases")}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.backend.map((skill, index) =>
              renderSkillCard(skill, index)
            )}
          </div>
        </div>

        {/* Framework Skills */}
        <div className="mb-16">
          {renderSectionTitle("Frameworks & Libraries")}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.frameworks.map((skill, index) =>
              renderSkillCard(skill, index)
            )}
          </div>
        </div>

        {/* Frontend Skills */}
        <div className="mb-16">
          {renderSectionTitle("Frontend Technologies")}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.frontend.map((skill, index) =>
              renderSkillCard(skill, index)
            )}
          </div>
        </div>

        {/* Others Skills */}
        <div>
          {renderSectionTitle("DevOps & Tools")}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.others.map((skill, index) => renderSkillCard(skill, index))}
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => renderProjectCard(project, index))}
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
