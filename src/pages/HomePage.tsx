import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  // Add useEffect for scroll animations
  React.useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
    // Initial check on load
    reveal();

    // Cleanup
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  // Group skills by category with ratings
  const skills = [
    // Backend & Databases
    {
      name: "Node.js",
      icon: "⬢",
      color: "text-blue-600 dark:text-green-400",
      rating: 5,
      category: "backend",
    },
    {
      name: "Python",
      icon: "🐍",
      color: "text-blue-700 dark:text-blue-400",
      rating: 4,
      category: "backend",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "text-blue-800 dark:text-blue-400",
      rating: 4,
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "text-blue-600 dark:text-green-400",
      rating: 5,
      category: "backend",
    },
    {
      name: "Gen AI",
      icon: "🧠",
      color: "text-indigo-500 dark:text-purple-400",
      rating: 3,
      category: "backend",
    },
    // Frameworks & Libraries
    {
      name: "Express.js",
      icon: "𝓔",
      color: "text-gray-700 dark:text-gray-300",
      rating: 5,
      category: "framework",
    },
    {
      name: "NestJS",
      icon: "🪺",
      color: "text-blue-600 dark:text-red-400",
      rating: 4,
      category: "framework",
    },
    {
      name: "FastAPI",
      icon: "⚡",
      color: "text-cyan-500 dark:text-teal-400",
      rating: 3,
      category: "framework",
    },
    {
      name: "React.js",
      icon: "⚛️",
      color: "text-blue-500 dark:text-blue-400",
      rating: 4,
      category: "framework",
    },
    {
      name: "PM2",
      icon: "⚙️",
      color: "text-blue-600 dark:text-blue-400",
      rating: 4,
      category: "framework",
    },
    // Frontend Technologies
    {
      name: "JavaScript",
      icon: "𝙅𝙎",
      color: "text-blue-600 dark:text-yellow-400",
      rating: 5,
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: "𝗧𝗦",
      color: "text-blue-700 dark:text-blue-400",
      rating: 4,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "🌊",
      color: "text-cyan-500 dark:text-cyan-400",
      rating: 4,
      category: "frontend",
    },
    {
      name: "HTML5",
      icon: "🔱",
      color: "text-blue-600 dark:text-orange-400",
      rating: 5,
      category: "frontend",
    },
    {
      name: "CSS3",
      icon: "🎨",
      color: "text-blue-500 dark:text-blue-400",
      rating: 4,
      category: "frontend",
    },
    // DevOps & Tools
    {
      name: "Git",
      icon: "🌿",
      color: "text-blue-600 dark:text-red-400",
      rating: 4,
      category: "devops",
    },
    {
      name: "GitHub",
      icon: "🐱",
      color: "text-gray-800 dark:text-gray-300",
      rating: 4,
      category: "devops",
    },
    {
      name: "AWS",
      icon: "☁️",
      color: "text-blue-600 dark:text-orange-400",
      rating: 3,
      category: "devops",
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "text-blue-700 dark:text-blue-400",
      rating: 3,
      category: "devops",
    },
  ];

  // Project data
  const projects = [
    {
      title: "Kings Club Games",
      description:
        "Comprehensive software solution for KingsClub, enabling users to play various games and win money, with administrative tools for managing games and users.",
      image: "/images/projects/kings-club.jpg",
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
      theme: "bg-gradient-primary",
    },
    {
      title: "Hadabon (Web and Mobile Application)",
      description:
        "An application that allows users to capture photos to identify skin problems, track improvement, book doctor appointments, and purchase beauty products.",
      image: "/images/projects/hadabon.jpg",
      tags: ["Node.js", "Express.js", "MongoDB", "API Integration"],
      liveUrl: "https://www.hadabon.jp/",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.aquaage.hadabon",
      hasPlayStore: true,
      theme: "bg-gradient-primary",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A fully-featured online store with product catalog, shopping cart, user authentication, payment integration, and admin dashboard for inventory management.",
      image: "/images/projects/ecommerce.jpg",
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
      theme: "bg-gradient-primary",
    },
  ];

  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex mt-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-xs ${
              star <= rating
                ? "text-blue-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Helper function to render a skill card
  const renderSkillCard = (skill: (typeof skills)[0], index: number) => {
    const gradientBg =
      skill.category === "backend"
        ? "from-blue-50 to-blue-100"
        : skill.category === "framework"
        ? "from-gray-50 to-blue-50"
        : skill.category === "frontend"
        ? "from-blue-50 to-gray-100"
        : "from-gray-100 to-gray-200";

    // Calculate animation delay based on index for staggered effect
    const delayClass = `delay-${Math.min(index % 8, 7) * 100}`;

    return (
      <div
        key={index}
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-blue hover:shadow-blue-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex items-center p-3 hover-lift animate-fade-in ${delayClass}`}
      >
        <div
          className={`bg-gradient-to-br  ${gradientBg} dark:from-gray-800 dark:to-gray-750 p-2 rounded-lg mr-3 flex-shrink-0 dark:bg-gray-700`}
        >
          <span
            className={`text-2xl ${skill.color} transform  transition-transform duration-300`}
          >
            {skill.icon}
          </span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
            {skill.name}
          </h3>
          {renderStars(skill.rating)}
        </div>
      </div>
    );
  };

  // Helper function to render a project card
  const renderProjectCard = (project: (typeof projects)[0], index: number) => {
    // Calculate animation delay based on index
    const delayClass = `delay-${Math.min(index * 200, 600)}`;

    return (
      <div
        key={index}
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-blue-md hover:shadow-blue-lg transition-all duration-300 overflow-hidden dark:border dark:border-gray-700 flex flex-col h-full border border-gray-200 hover-lift animate-fade-in ${delayClass}`}
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
                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover-grow"
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
                className={`inline-flex items-center text-white  btn-primary hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center`}
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
                className={`inline-flex items-center text-white  btn-primary hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center`}
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
                className={`inline-flex items-center text-white  btn-primary hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center`}
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
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="py-16 md:py-28 px-4 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight animate-slide-in-left">
            <span className="text-gray-800 dark:text-gray-100">Hi, I'm </span>
            <span className="text-transparent bg-clip-text gradient-text-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
              Suraj Gautam
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 leading-relaxed animate-slide-in-left delay-200">
            MERN Stack Developer specialized in building reliable web
            applications with clean, efficient code.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-slide-in-left delay-400">
            <Link
              to="/contact"
              className="inline-block w-40 md:w-48 text-center bg-gradient-primary hover:opacity-90 dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 dark:hover:opacity-90 text-white font-medium py-3 md:py-4 px-8 md:px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-blue-md hover:shadow-blue-lg"
            >
              Hire Me
            </Link>
            <a
              href="#projects"
              className="inline-block w-40 md:w-48 text-center border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-900 hover:text-white py-3 md:py-4 px-8 md:px-10 rounded-lg transition-colors duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-slide-in-right delay-300">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-primary dark:bg-gradient-to-br dark:from-blue-500 dark:to-cyan-500 relative overflow-hidden shadow-blue-lg border-4 border-white dark:border-gray-800 animate-float">
            {/* Replace with your actual profile image */}
            <img
              src="/images/profile.jpg"
              alt="Suraj Gautam"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Me Short Section */}
      <section className="py-10 md:py-12 px-4 md:px-8 max-w-6xl mx-auto reveal">
        <div className="bg-white dark:bg-gray-800 p-5 md:p-8 rounded-xl shadow-blue hover:shadow-blue-md glass-effect dark:glass-dark border border-gray-200 dark:border-gray-700 hover-lift">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5 text-center text-transparent bg-clip-text gradient-text-secondary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
            About Me
          </h2>
          <div className="text-gray-600 dark:text-gray-300 space-y-3 leading-relaxed">
            <p className="text-sm md:text-base">
              MERN stack and AI developer with 3+ years experience building web
              applications and intelligent systems at{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium highlight-on-hover">
                PharynxAI Innovations
              </span>{" "}
              and
              <span className="text-blue-600 dark:text-blue-400 font-medium highlight-on-hover">
                {" "}
                Gortnm Innovations
              </span>
              .
            </p>
            <div className="py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg border border-blue-100 dark:border-gray-700 highlight-on-hover">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400">
                    PharynxAI Innovations{" "}
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      | May 2024 - Present
                    </span>
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">
                    AI Developer - Resume parsers, document analyzers, chatbots
                    (NestJS, Python, RAG)
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg border border-blue-100 dark:border-gray-700 highlight-on-hover">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400">
                    Gortnm Innovations{" "}
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      | Jun 2022 - May 2024
                    </span>
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Full Stack Developer - Web apps for Kings Club, Physics
                    Wallah (Node.js, React)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link
              to="/about"
              className="inline-block accent-blue hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover-underline"
            >
              View my complete profile →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text gradient-text-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skills.map((skill, index) => renderSkillCard(skill, index))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section
        id="projects"
        className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto reveal"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-transparent bg-clip-text gradient-text-accent dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => renderProjectCard(project, index))}
        </div>
        <div className="text-center mt-10 md:mt-12">
          <Link
            to="/projects"
            className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-900 hover:text-white py-3 px-8 rounded-lg transition-colors duration-300 hover-grow"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-6xl mx-auto text-center reveal">
        <div className="bg-gradient-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 rounded-xl p-8 md:p-12 shadow-blue-lg hover-lift">
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
            className="inline-block glass-effect text-blue-700 dark:text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-white/90 transition-colors duration-300 transform hover:scale-105 animate-pulse-slow"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
