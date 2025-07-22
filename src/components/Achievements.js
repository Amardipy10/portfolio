import React, { useState, useEffect } from 'react';
import { Award } from './icons';

const achievements = [
  'Gold Medalist - SOF International Computer Science Olympiad',
  '6-star in C++ and Python on HackerRank',
  '5-star in Problem Solving on HackerRank',
  'Academic Topper - CBSE Class 12 (94.8%)',
  'Mentored 50+ students in DSA and Competitive Programming'
];

const Achievements = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);

  useEffect(() => {
    const achievementInterval = setInterval(() => {
      setCurrentAchievement(prev => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(achievementInterval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="relative">
          <div className="p-8 rounded-xl text-center bg-gray-50 dark:bg-gray-800/50">
            <Award className="mx-auto text-yellow-500 mb-4" size={48} />
            <p className="text-lg font-medium min-h-[3rem] flex items-center justify-center transition-opacity duration-500">
              {achievements[currentAchievement]}
            </p>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAchievement(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentAchievement ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'}`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;