import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  console.log("Current blog post ID:", id);

  // In a real app, you would fetch the blog post data based on the id
  const blogPosts = {
    "1": {
      title: "Building Scalable Web Applications with MERN Stack",
      date: "April 10, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "/assets/images/blogs/mern-blog.jpg",
      content: [
        {
          type: "paragraph",
          text: "Building scalable web applications is crucial in today's digital landscape. The MERN stack (MongoDB, Express.js, React.js, and Node.js) provides a powerful combination of technologies for creating robust and scalable applications.",
        },
        {
          type: "heading",
          text: "Why Choose MERN Stack?",
        },
        {
          type: "paragraph",
          text: "The MERN stack offers several advantages for building modern web applications. Its full JavaScript approach allows for seamless development across the entire stack, reducing context switching and improving developer productivity.",
        },
        {
          type: "list",
          items: [
            "Unified JavaScript/TypeScript across frontend and backend",
            "Large ecosystem of packages and tools",
            "Strong community support",
            "Excellent performance and scalability",
            "Flexible and modular architecture",
          ],
        },
        {
          type: "heading",
          text: "Best Practices for Scalability",
        },
        {
          type: "paragraph",
          text: "When building scalable applications with MERN, there are several key practices to follow:",
        },
        {
          type: "list",
          items: [
            "Implement proper database indexing and query optimization",
            "Use caching strategies for frequently accessed data",
            "Implement proper error handling and logging",
            "Follow RESTful API design principles",
            "Use proper authentication and authorization",
          ],
        },
        {
          type: "paragraph",
          text: "By following these practices and leveraging the strengths of the MERN stack, you can build applications that scale effectively with your user base and business needs.",
        },
      ],
    },
    "2": {
      title: "Getting Started with AI Development",
      date: "April 5, 2024",
      readTime: "10 min read",
      category: "Artificial Intelligence",
      image: "/assets/images/blogs/ai-blog.jpg",
      content: [
        {
          type: "paragraph",
          text: "Artificial Intelligence is transforming industries and creating new opportunities for developers. This guide will help you get started with AI development.",
        },
        {
          type: "heading",
          text: "Understanding AI Fundamentals",
        },
        {
          type: "paragraph",
          text: "Before diving into AI development, it's important to understand the fundamental concepts and technologies that power modern AI systems.",
        },
        {
          type: "list",
          items: [
            "Machine Learning basics",
            "Neural Networks and Deep Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Reinforcement Learning",
          ],
        },
        {
          type: "heading",
          text: "Tools and Frameworks",
        },
        {
          type: "paragraph",
          text: "There are several powerful tools and frameworks available for AI development:",
        },
        {
          type: "list",
          items: [
            "TensorFlow and PyTorch for deep learning",
            "Scikit-learn for traditional machine learning",
            "Hugging Face for NLP",
            "OpenCV for computer vision",
            "Gym for reinforcement learning",
          ],
        },
      ],
    },
    "3": {
      title: "Best Practices for API Development",
      date: "March 28, 2024",
      readTime: "6 min read",
      category: "Backend Development",
      image: "/assets/images/blogs/api-blog.jpg",
      content: [
        {
          type: "paragraph",
          text: "APIs are the backbone of modern web applications. Following best practices in API development ensures reliability, security, and maintainability.",
        },
        {
          type: "heading",
          text: "API Design Principles",
        },
        {
          type: "paragraph",
          text: "Good API design is crucial for creating maintainable and user-friendly interfaces. Here are some key principles to follow:",
        },
        {
          type: "list",
          items: [
            "Use consistent naming conventions",
            "Implement proper versioning",
            "Follow RESTful principles",
            "Provide comprehensive documentation",
            "Use proper HTTP methods and status codes",
          ],
        },
        {
          type: "heading",
          text: "Security Considerations",
        },
        {
          type: "paragraph",
          text: "Security should be a top priority when developing APIs. Here are essential security practices:",
        },
        {
          type: "list",
          items: [
            "Implement proper authentication",
            "Use HTTPS for all communications",
            "Validate and sanitize all inputs",
            "Implement rate limiting",
            "Regular security audits",
          ],
        },
      ],
    },
  };

  const post = blogPosts[id as keyof typeof blogPosts];
  console.log("Found post:", post);

  if (!post) {
    console.log("Post not found!");
    return (
      <div className="py-8 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Blog Post Header */}
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blog
        </Link>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {post.category}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.date}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.readTime}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          {post.title}
        </h1>
        <div className="h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="prose dark:prose-invert max-w-none">
        {post.content.map((section, index) => {
          console.log("Rendering section:", section);
          if (section.type === "paragraph") {
            return (
              <p key={index} className="text-gray-600 dark:text-gray-300 mb-6">
                {section.text}
              </p>
            );
          } else if (section.type === "heading") {
            return (
              <h2
                key={index}
                className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 mt-8"
              >
                {section.text}
              </h2>
            );
          } else if (section.type === "list" && section.items) {
            return (
              <ul key={index} className="list-disc pl-6 mb-6">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-600 dark:text-gray-300 mb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogPostPage;
