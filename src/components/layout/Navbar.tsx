import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full py-4 px-4 md:px-8 flex flex-wrap justify-between items-center backdrop-blur-sm bg-white/80 dark:bg-gray-900/90 sticky top-0 z-50 shadow-sm dark:shadow-gray-800/20 transition-colors duration-300">
      <Link
        to="/"
        className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 gradient-text"
      >
        Suraj Gautam
      </Link>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop navigation */}
      <div
        className={`${
          menuOpen ? "flex mt-4" : "hidden"
        } md:flex w-full md:w-auto flex-col md:flex-row md:gap-8 font-medium`}
      >
        <Link
          to="/"
          className="py-2 px-4 md:px-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 border-b md:border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="py-2 px-4 md:px-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 border-b md:border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="py-2 px-4 md:px-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 border-b md:border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/blog"
          className="py-2 px-4 md:px-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 border-b md:border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
          onClick={() => setMenuOpen(false)}
        >
          Blog
        </Link>
        <Link
          to="/gallery"
          className="py-2 px-4 md:px-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 border-b md:border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="py-2 px-4 md:px-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 border-b md:border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
