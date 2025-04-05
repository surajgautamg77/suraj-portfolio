import React from "react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  // Education data
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Harcourt Butler Technical University",
      location: "Kanpur, Uttar Pradesh",
      year: "2018 - 2022",
      score: "7.15 CGPA",
    },
  ];

  // Work experience data
  const workExperience = [
    {
      position: "Software Developer",
      company: "PharynxAI Innovations",
      location: "Noida, Uttar Pradesh, India",
      period: "May 2024 - Present",
      type: "Full-time · On-site",
      description:
        "Working on AI products and solutions using modern technologies. Developing intelligent systems for data analysis and processing.",
      responsibilities: [
        "Developing AI-powered applications using NestJS, Python, and TypeScript",
        "Building and fine-tuning RAG (Retrieval Augmented Generation) systems",
        "Implementing NLP solutions and Large Language Models (LLMs) for various use cases",
        "Creating web scraping solutions for data collection and analysis",
        "Developing resume parsing systems and document analyzers",
        "Building chatbot SaaS applications with advanced AI capabilities",
      ],
      skills: [
        "NestJS",
        "Python",
        "TypeScript",
        "AI Development",
        "Web Scraping",
        "RAG",
        "LLM",
        "NLP",
      ],
      projects: [
        "Resume Parser - Automated CV/resume data extraction system",
        "Document Analyzer - Intelligent document processing solution",
        "Chatbot SaaS Platform - Customizable AI assistant platform",
      ],
    },
    {
      position: "Software Developer",
      company: "Gortnm Innovations Private Limited",
      location: "Noida, Uttar Pradesh, India",
      period: "Jun 2022 - May 2024",
      type: "Full-time · Remote",
      description:
        "Worked as a full-stack developer in a service-based software company, developing web applications for various clients.",
      responsibilities: [
        "Building full-stack web applications using Node.js, React, and MongoDB",
        "Designing responsive UI/UX with Tailwind CSS",
        "Developing RESTful APIs and backend services",
        "Collaborating with clients to implement requirements and deliver solutions",
        "Testing and debugging applications across different environments",
        "Deploying and maintaining applications on cloud platforms",
      ],
      skills: ["Node.js", "Express.js", "React.js", "MongoDB", "Tailwind CSS"],
      projects: [
        "Kings Club - Gaming platform with admin dashboard",
        "Hadabon - Skincare application with web and mobile interfaces",
        "Physics Wallah - Educational platform enhancements",
      ],
    },
  ];

  // Skills by category
  const skills = {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "MongoDB",
      "PostgreSQL",
    ],
    aiAndData: [
      "RAG Systems",
      "LLMs",
      "NLP",
      "Web Scraping",
      "Data Processing",
    ],
    tools: ["Git", "GitHub", "AWS", "Docker", "VS Code", "Postman"],
  };

  return (
    <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* About Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text gradient-text-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Software developer specializing in web applications and AI solutions
          with over 3 years of professional experience
        </p>
      </div>

      {/* Profile Overview */}
      <section className="mb-16">
        <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-blue hover:shadow-blue-md glass-effect dark:glass-dark border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-blue-lg bg-gradient-primary">
              <img
                src="public\assets\images\prof"
                alt="Suraj Gautam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Suraj Gautam
              </h2>
              <h3 className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-4">
                MERN Stack & AI Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm passionate about building efficient digital solutions that
                solve real-world problems. With expertise in both web
                development and AI technologies, I create applications that are
                not only functional but also intuitive and user-friendly.
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
                    Connect
                  </h4>
                  <div className="flex gap-3 justify-center md:justify-start">
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

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text gradient-text-secondary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {job.position}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {job.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {job.location} · {job.type}
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-medium md:text-right">
                  {job.period}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {job.description}
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Key Responsibilities
                </h4>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Projects
                </h4>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                  {job.projects.map((project, idx) => (
                    <li key={idx}>{project}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Skills Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text gradient-text-accent dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              AI & Data Solutions
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.aiAndData.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text gradient-text-secondary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          Education
        </h2>

        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {edu.institution}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {edu.location}
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  {edu.year}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Score: {edu.score}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Interests Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text gradient-text-accent dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          Interests & Personal Projects
        </h2>

        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Beyond my professional work, I enjoy exploring new technologies and
            working on personal projects. Some of my recent interests include:
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Exploring generative AI applications and LLM fine-tuning</li>
            <li>Contributing to open-source projects</li>
            <li>Building automation tools to improve development workflows</li>
            <li>
              Learning about cloud architecture and serverless applications
            </li>
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <div className="bg-gradient-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 rounded-xl p-8 md:p-12 shadow-blue-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or
            partnerships.
          </p>
          <Link
            to="/contact"
            className="inline-block glass-effect text-blue-700 dark:text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-white/90 transition-colors duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
