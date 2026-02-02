import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Award } from './icons';

const achievements = [
  {
    text: 'Gold Medalist - SOF International Computer Science Olympiad',
    emoji: '🥇'
  },
  {
    text: '6-star in C++ and Python on HackerRank',
    emoji: '⭐'
  },
  {
    text: '5-star in Problem Solving on HackerRank',
    emoji: '🏆'
  },
  {
    text: 'Academic Topper - CBSE Class 12 (94.8%)',
    emoji: '🎓'
  },
  {
    text: 'Mentored 50+ students in DSA and Competitive Programming',
    emoji: '👨‍🏫'
  }
];

const Achievements = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const achievementInterval = setInterval(() => {
      setCurrentAchievement(prev => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(achievementInterval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        ref={containerRef}
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full" />
        </motion.div>

        {/* Achievement showcase */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-10 rounded-3xl text-center bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 backdrop-blur-sm shadow-xl">
            {/* Trophy icon with glow */}
            <motion.div
              className="relative inline-block mb-6"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Award className="text-yellow-500 mx-auto" size={64} />
              <motion.div
                className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Achievement text with animation */}
            <div className="min-h-[5rem] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAchievement}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl md:text-2xl font-medium text-gray-800"
                >
                  <span className="mr-3 text-3xl">{achievements[currentAchievement].emoji}</span>
                  {achievements[currentAchievement].text}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {achievements.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentAchievement(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${index === currentAchievement
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to achievement ${index + 1}`}
                >
                  {index === currentAchievement && (
                    <motion.div
                      className="absolute inset-0 bg-yellow-500 rounded-full"
                      layoutId="activeDot"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Decorative particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-500/30 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;