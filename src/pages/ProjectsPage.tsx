import React from "react";

// Define Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  features?: string[];
  featured: boolean;
}

const ProjectsPage: React.FC = () => {
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

  const projects: Project[] = [
    {
      id: 1,
      title:
        "Pharyinx WhatsApp Platform – Omni-Channel Communication & Campaign Management",
      description:
        "Built a SaaS platform enabling users to register as organizations, create isolated workspaces, and seamlessly integrate their Facebook Business accounts for WhatsApp Business API integration and ad campaign management.",
      image: "/assets/images/projects/pharyinx-whatsapp.jpg",
      technologies: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "Python",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Facebook Graph API",
        "WhatsApp Business API",
        "LLMs",
        "NLP",
      ],
      liveUrl: "#",
      features: [
        "Organization registration with isolated workspaces",
        "Facebook Business account integration via embedded signup flow",
        "Click-to-WhatsApp (CTWA) Facebook Ads creation and management",
        "Bulk WhatsApp messaging campaigns with business-initiated templates",
        "AI-powered chatbots for automated WhatsApp communication",
        "Secure multi-tenant architecture with NestJS and PostgreSQL",
        "Intuitive frontend for workspace and campaign management",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Pharyinx Connect – AI Chatbot SaaS Platform",
      description:
        "Developed Pharyinx Connect, a multi-tenant SaaS platform enabling organizations to register and build customized AI-powered chatbots with data from multiple documents and web-scraped content.",
      image: "/assets/images/projects/pharyinx-connect.jpg",
      technologies: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "Python",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "pgvector",
        "LLMs",
        "NLP",
        "RAG",
      ],
      liveUrl: "#",
      features: [
        "Multi-tenant SaaS platform for organizations to build customized AI chatbots",
        "Dynamic chatbot training with document data and web-scraped content",
        "Customizable chunking algorithms, vector databases, and embedding engines",
        "Intelligent, context-aware responses using LLMs and NLP",
        "RAG architecture for enhanced information retrieval",
        "Backend with NestJS and pgvector for vector storage and similarity search",
        "Responsive frontend with React and Tailwind CSS",
        "Secure, scalable architecture supporting multiple organizations",
      ],
      featured: true,
    },
    {
      id: 3,
      title: "Document Analyzer (SaaS)",
      description:
        "Designed and developed a scalable SaaS-based Document Analyzer platform, allowing organizations to register, create isolated workspaces, and securely manage documents. Implemented intelligent parsing and RAG-powered chat interface for document interaction.",
      image: "/assets/images/projects/document-analyzer.jpg",
      technologies: [
        "NestJS",
        "Python",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Pinecone Vector DB",
        "RAG",
        "OpenAI",
        "AWS",
      ],
      liveUrl: "#",
      features: [
        "Secure organization registration and isolated workspaces",
        "Intelligent document parsing and management",
        "Chat interface using text scraping, chunking, and vector embedding",
        "RAG and Pinecone integration for contextual chat capabilities",
        "Resume analysis with color-coded evaluation system",
        "Responsive UI built with React and Tailwind CSS",
        "Deployed on AWS for scalability and reliability",
      ],
      featured: true,
    },
    {
      id: 4,
      title: "Kings Club Games",
      description:
        "Comprehensive software solution for KingsClub, enabling users to play various games and win money, with administrative tools for managing games and users.",
      image: "/assets/images/projects/kings-club.jpg",
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
      id: 5,
      title: "Hadabon (Web and Mobile Application)",
      description:
        "An application that allows users to capture photos to identify skin problems, track improvement, book doctor appointments, and purchase beauty products.",
      image: "/assets/images/projects/hadabon.jpg",
      technologies: ["Node.js", "Express.js", "MongoDB", "API Integration"],
      liveUrl: "https://www.hadabon.jp/",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.aquaage.hadabon",
      featured: true,
    },
    {
      id: 6,
      title: "Physics Wallah Backend APIs",
      description:
        "Developed backend APIs for Physics Wallah's mobile application, facilitating efficient communication between the frontend and the database.",
      image: "/assets/images/projects/physics-wallah.jpg",
      technologies: ["Node.js", "Express.js", "MongoDB", "Authentication"],
      featured: false,
    },
    {
      id: 7,
      title: "Personal Developer Portfolio",
      description:
        "A responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills with dark/light mode support.",
      image: "/assets/images/projects/portfolio.jpg",
      technologies: ["React.js", "Tailwind CSS", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/surajgautam27/portfolio",
      featured: false,
    },
    {
      id: 8,
      title: "Task Management System",
      description:
        "A full-stack task management application allowing users to create, assign, track, and manage tasks with different priority levels.",
      image: "/assets/images/projects/task-management.jpg",
      technologies: ["MERN Stack", "Redux", "JWT Authentication"],
      githubUrl: "https://github.com/surajgautam27/task-management",
      featured: false,
    },
    {
      id: 9,
      title: "E-commerce Platform",
      description:
        "A MERN stack e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration.",
      image: "/assets/images/projects/ecommerce.jpg",
      technologies: ["MERN Stack", "Redux", "Payment Gateway Integration"],
      githubUrl: "https://github.com/surajgautam27/ecommerce-platform",
      featured: false,
    },
  ];

  return (
    <div className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Projects Header */}
      <div className="mb-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text gradient-text-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          My Projects
        </h1>
        {/* <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of the notable projects I've worked on throughout my
          career. Each project represents a unique challenge and solution.
        </p> */}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="reveal"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-blue hover:shadow-blue-lg transition-all duration-300 h-full hover-lift">
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-60 dark:opacity-40 hover:opacity-40 dark:hover:opacity-20 transition-opacity"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && (
                  <div className="mb-5">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Key Features:
                    </h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover-grow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover-underline hover-grow-sm"
                    >
                      Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-600 dark:text-gray-400 hover-underline hover-grow-sm"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center reveal">
        <div className="bg-gradient-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 rounded-xl p-8 md:p-12 shadow-blue-lg hover-lift">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-block glass-effect text-blue-700 dark:text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-white/90 transition-colors duration-300 transform hover:scale-105 animate-pulse-slow"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
