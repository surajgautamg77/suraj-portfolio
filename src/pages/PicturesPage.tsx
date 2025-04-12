import React from "react";

const PicturesPage: React.FC = () => {
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
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const pictures = [
    {
      id: 1,
      title: "Code in Action",
      description: "A glimpse into my development environment",
      image: "/assets/images/pictures/code.jpg",
      category: "Development",
    },
    {
      id: 2,
      title: "Team Collaboration",
      description: "Working with the team on exciting projects",
      image: "/assets/images/pictures/team.jpg",
      category: "Team",
    },
    {
      id: 3,
      title: "Conference Speaker",
      description: "Sharing knowledge at tech conferences",
      image: "/assets/images/pictures/conference.jpg",
      category: "Events",
    },
    {
      id: 4,
      title: "Project Showcase",
      description: "Demonstrating project features",
      image: "/assets/images/pictures/project.jpg",
      category: "Projects",
    },
    {
      id: 5,
      title: "Workshop Session",
      description: "Conducting hands-on workshops",
      image: "/assets/images/pictures/workshop.jpg",
      category: "Education",
    },
    {
      id: 6,
      title: "Tech Meetup",
      description: "Networking with fellow developers",
      image: "/assets/images/pictures/meetup.jpg",
      category: "Community",
    },
  ];

  return (
    <div className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Pictures Header */}
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text gradient-text-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          Gallery
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A visual journey through my professional experiences and achievements.
        </p>
      </div>

      {/* Pictures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pictures.map((picture) => (
          <div
            key={picture.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-blue hover:shadow-blue-md transition-all duration-300 hover-lift reveal group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={picture.image}
                alt={picture.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full">
                    {picture.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {picture.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {picture.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicturesPage;
