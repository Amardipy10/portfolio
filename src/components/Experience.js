import React from 'react';
import { Briefcase, GraduationCap } from './icons';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700" style={{ marginLeft: '1.125rem' }}></div>
          <div className="space-y-12">
            {/* Experience Item */}
            <div className="relative pl-10 md:pl-0">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                    <div className="flex items-center md:justify-end mb-2">
                      <Briefcase className="text-blue-500 mr-2 md:mr-0 md:ml-2" size={20} />
                      <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                    </div>
                    <h3 className="text-lg font-bold">Python Developer Intern</h3>
                    <p className="text-blue-500 dark:text-blue-400 mb-2">Intern Army</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Integrated NLP modules in "DailyAssist" chatbot and designed responsive UI.</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-8"></div>
              </div>
              <div className="absolute top-1 left-0 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-50 dark:border-gray-900" style={{ marginLeft: '1.25rem' }}></div>
            </div>
            {/* Education Item */}
            <div className="relative pl-10 md:pl-0">
              <div className="md:flex items-center">
                <div className="hidden md:block md:w-1/2 md:pr-8"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="text-purple-500 mr-2" size={20} />
                      <span className="text-sm text-gray-500 dark:text-gray-400">2023 - 2027</span>
                    </div>
                    <h3 className="text-lg font-bold">B.E. Computer Engineering</h3>
                    <p className="text-purple-500 dark:text-purple-400 mb-2">Army Institute of Technology, Pune</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">CGPA: 8.39 | Focus on Software Development, Data Structures, and Algorithms.</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1 left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-500 rounded-full border-4 border-gray-50 dark:border-gray-900" style={{ marginLeft: '1.25rem' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;