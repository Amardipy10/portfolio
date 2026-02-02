import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 px-4 sm:px-6 lg:px-8 border-t bg-white border-gray-200"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="text-gray-500"
          whileHover={{ scale: 1.02 }}
        >
          <span className="inline-flex items-center gap-2">
            ©️ {new Date().getFullYear()}
            <motion.span
              className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              Amardip Yadav
            </motion.span>
            . Built with React.js and lots of
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              ☕
            </motion.span>
          </span>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;