import React, { useState, useEffect } from "react";

const ContactPage: React.FC = () => {
  // Add useEffect for scroll animations
  useEffect(() => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Contact Header */}
      <div className="mb-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text gradient-text-primary dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
          Get In Touch
        </h1>
        {/* <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out to
          me directly or fill out the form below.
        </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <div className="reveal">
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover-lift">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors focus-within:shadow-blue-sm"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors focus-within:shadow-blue-sm"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors focus-within:shadow-blue-sm resize-none"
                  placeholder="Tell me about your project, question, or say hello..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-blue hover-lift"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 reveal" style={{ animationDelay: "150ms" }}>
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover-lift">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <span className="text-xl">📧</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Email
                  </h3>
                  <a
                    href="mailto:surajgautamg77@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-underline hover-grow-sm"
                  >
                    surajgautamg77@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <span className="text-xl">📱</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 9119198714
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <span className="text-xl">📍</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Jaunpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-blue hover:shadow-blue-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover-lift">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Connect With Me
            </h2>
            <div className="space-y-4">
              <a
                href="https://github.com/surajgautam27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors hover-grow"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                  <span className="text-xl">GH</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    GitHub
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    github.com/surajgautam27
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/suraj-gautam-897284184/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors hover-grow"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <span className="text-xl">LI</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    LinkedIn
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    linkedin.com/in/suraj-gautam-897284184/
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Status */}
      <div
        className="mt-12 text-center reveal"
        style={{ animationDelay: "300ms" }}
      >
        <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
          <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Currently available for new projects
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
