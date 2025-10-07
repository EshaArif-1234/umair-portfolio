import React, { useState, useEffect } from "react";
import { useTheme } from "../theme/ThemeContext";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
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
  // Removed unused activeStyle since we're using a different approach for active state
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
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-deepDark/95 backdrop-blur-md shadow-md transition-all duration-300 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo and Name */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group"
          onClick={() => handleSectionClick('hero')}
        >
          <motion.img
            src={theme ? DarkLogo : LightLogo}
            alt="Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 p-1.5 sm:p-2 rounded-full border-2 border-black/80 dark:border-white/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
            whileHover={{ rotate: 5 }}
          />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Umair
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {sections.map(({ name, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2.5 text-sm lg:text-base font-medium transition-all duration-200 rounded-lg ${
                activeSection === id 
                  ? 'text-primary dark:text-white bg-primary/10 dark:bg-white/10' 
                  : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick(id);
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {name}
              {activeSection === id && (
                <motion.span 
                  className="block h-0.5 bg-primary dark:bg-white mt-1"
                  layoutId="activeNav"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-gray-800 dark:text-gray-200" />
          ) : (
            <Menu size={24} className="text-gray-800 dark:text-gray-200" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? 'open' : 'closed'}
        className="md:hidden fixed inset-0 z-40 overflow-hidden"
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <motion.div
          className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-deepDark shadow-2xl flex flex-col overflow-hidden"
          variants={{
            open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
            closed: { x: '100%', transition: { delay: 0.1 } },
          }}
        >
          <div className="p-5 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <img
                src={theme ? DarkLogo : LightLogo}
                alt="Logo"
                className="h-12 w-12 p-1.5 rounded-full border-2 border-black/80 dark:border-white/80"
              />
              <span className="text-xl font-bold">Umair</span>
            </div>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {sections.map(({ name, id }, index) => (
              <motion.a
                key={id}
                href={`#${id}`}
                className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                  activeSection === id
                    ? 'bg-primary/10 text-primary dark:bg-white/10 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick(id);
                  setMobileMenuOpen(false);
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.1 + (index * 0.05),
                  type: 'spring',
                  stiffness: 300,
                  damping: 25
                }}
              >
                {name}
              </motion.a>
            ))}
          </nav>
          
          <div className="p-4 border-t border-gray-100 dark:border-gray-800">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Umair. All rights reserved.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Navbar;
