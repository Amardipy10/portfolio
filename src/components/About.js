import React from 'react';
import { User, Trophy, GraduationCap } from './icons';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Passionate Developer & Problem Solver</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a Computer Engineering student at Army Institute of Technology, Pune, with a strong foundation in full-stack development. My journey in tech is driven by curiosity and a desire to create meaningful digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With expertise in React.js, Node.js, and modern web technologies, I've successfully built AI-powered tools and full-stack applications. I'm particularly passionate about frontend development and creating intuitive user interfaces.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-gray-700/50">
                <div className="text-3xl font-bold text-blue-500">300+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-gray-700/50">
                <div className="text-3xl font-bold text-purple-500">8.39</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CGPA</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full"><User className="text-blue-500" size={24} /></div>
              <div>
                <h4 className="font-semibold text-lg">Leadership & Mentoring</h4>
                <p className="text-gray-500 dark:text-gray-400">Joint Secretary, PR & Social Media Cell</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900/50 rounded-full"><Trophy className="text-green-500" size={24} /></div>
              <div>
                <h4 className="font-semibold text-lg">Competitive Programming</h4>
                <p className="text-gray-500 dark:text-gray-400">6-star rating on HackerRank</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-purple-100 dark:bg-purple-900/50 rounded-full"><GraduationCap className="text-purple-500" size={24} /></div>
              <div>
                <h4 className="font-semibold text-lg">Academic Excellence</h4>
                <p className="text-gray-500 dark:text-gray-400">Class 12 Academic Topper (94.8%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;