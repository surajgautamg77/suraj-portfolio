import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-800"
      }`}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
