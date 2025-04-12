import React from "react";
import { Link } from "react-router-dom";

const BlogPage: React.FC = () => {
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

  const blogPosts = [
    {
      id: "1",
      title: "Building Scalable Web Applications with MERN Stack",
      excerpt:
        "Learn how to build robust and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
      image: "/assets/images/blogs/mern-blog.jpg",
      date: "April 10, 2024",
      readTime: "8 min read",
      category: "Web Development",
    },
    {
      id: "2",
      title: "Getting Started with AI Development",
      excerpt:
        "A comprehensive guide to getting started with Artificial Intelligence development, covering fundamental concepts and tools.",
      image: "/assets/images/blogs/ai-blog.jpg",
      date: "April 5, 2024",
      readTime: "10 min read",
      category: "Artificial Intelligence",
    },
    {
      id: "3",
      title: "Best Practices for API Development",
      excerpt:
        "Explore essential best practices for developing robust, secure, and maintainable APIs in modern web applications.",
      image: "/assets/images/blogs/api-blog.jpg",
      date: "March 28, 2024",
      readTime: "6 min read",
      category: "Backend Development",
    },
  ];

  return (
    <div className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Blog Header */}
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text gradient-text-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on web development, AI, and
          technology.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-blue hover:shadow-blue-md transition-all duration-300 hover-lift reveal group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
