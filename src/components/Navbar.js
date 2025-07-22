import React from 'react';
import { Moon, Sun } from './icons';

const Navbar = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${darkMode ? 'bg-gray-900/70 border-gray-700' : 'bg-white/70 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Amardip.dev
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'text-blue-500' : 'text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-blue-500' : 'bg-gray-100 hover:bg-gray-200 focus:ring-offset-gray-50 focus:ring-blue-500'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;