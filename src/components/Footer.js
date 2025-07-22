import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 dark:text-gray-400">
          ©️ {new Date().getFullYear()} Amardip Yadav. Built with React.js and lots of ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;