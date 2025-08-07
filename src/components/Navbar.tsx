import React, { useState, useEffect } from "react";
import { useTheme } from "../theme/ThemeContext";
import {  Menu, X } from "lucide-react";
import LightLogo from "/assets/Elegant Serif Logo Design.png";
import DarkLogo from "/assets/Elegant Serif Logo Design 1.png";

const sections = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Tools", id: "tools" },
  { name: "Experience", id: "experience" },
  { name: "Clients", id: "clients" },
  { name: "Contact", id: "contact" },
];

const Navbar: React.FC = () => {
  const { theme} = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero"); // Default to 'hero' (Home)
  const activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    textDecorationThickness: "2px", // Custom thickness for the underline
  };
  // Update active section based on scroll position or click
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - viewportHeight / 3 &&
            scrollPosition < offsetTop + offsetHeight - viewportHeight / 3
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click to update active section
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="sticky top-0 z-50 bg-light dark:bg-deepDark shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-10">
          <img
            src={theme ? DarkLogo : LightLogo}
            alt="logo"
            className="h-12 w-auto md:h-16 p-2 rounded-full border-2 border-black dark:border-white"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {sections.map(({ name, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-base font-medium hover:text-primary dark:hover:text-light transition-colors text-gray-700 dark:text-gray-300"
              style={activeSection === id ? activeStyle : {}}
              onClick={() => handleSectionClick(id)}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Dark Mode Toggle - Desktop */}
        {/* <button
          onClick={toggleTheme}
          className="hidden md:block ml-4 text-xl text-gray-700 dark:text-gray-300"
        >
          {theme ? <Sun size={22} /> : <Moon size={22} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-light dark:bg-dark shadow-md absolute top-full left-0 right-0 transition-colors duration-300">
          <nav className="flex flex-col px-4 py-2 gap-3">
            {sections.map(({ name, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-base font-medium hover:text-primary dark:hover:text-light transition-colors text-gray-700 dark:text-gray-300 py-2 border-b border-gray-200 dark:border-gray-700"
                style={activeSection === id ? activeStyle : {}}
                onClick={() => handleSectionClick(id)}
              >
                {name}
              </a>
            ))}
          </nav>
          {/* <div className="px-4 py-3 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Theme
            </span>
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300"
            >
              {theme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div> */}
        </div>
      )}
    </header>
  );
};

export default Navbar;
