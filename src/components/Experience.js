import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap } from './icons';

const experiences = [
  {
    type: 'work',
    year: '2024',
    title: 'Python Developer Intern',
    company: 'Intern Army',
    description: 'Integrated NLP modules in "DailyAssist" chatbot and designed responsive UI.',
    icon: Briefcase,
    color: 'blue'
  },
  {
    type: 'education',
    year: '2023 - 2027',
    title: 'B.E. Computer Engineering',
    company: 'Army Institute of Technology, Pune',
    description: 'CGPA: 8.39 | Focus on Software Development, Data Structures, and Algorithms.',
    icon: GraduationCap,
    color: 'purple'
  }
];

const TimelineItem = ({ item, index, isLeft }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });
  const Icon = item.icon;
  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-500',
      light: 'bg-blue-100',
      glow: 'shadow-blue-500/30'
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-500',
      light: 'bg-purple-100',
      glow: 'shadow-purple-500/30'
    }
  };
  const colors = colorClasses[item.color];

  return (
    <motion.div
      ref={itemRef}
      className={`relative pl-10 md:pl-0 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className={`md:flex items-center ${isLeft ? '' : 'md:flex-row-reverse'}`}>
        {/* Content card */}
        <div className={`${isLeft ? 'md:w-1/2' : 'md:w-1/2'}`}>
          <motion.div
            className="p-6 rounded-2xl bg-white shadow-xl border border-gray-100 relative overflow-hidden group"
            whileHover={{
              y: -5,
              boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.15)`
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient accent */}
            <motion.div
              className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-1 h-full ${colors.bg}`}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              style={{ transformOrigin: 'top' }}
            />

            {/* Year badge */}
            <motion.div
              className={`flex items-center mb-3 ${isLeft ? 'md:justify-end' : ''}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.4 }}
            >
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${colors.light} ${colors.text}`}>
                <Icon size={16} />
                {item.year}
              </span>
            </motion.div>

            {/* Title and company */}
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {item.title}
            </h3>
            <p className={`${colors.text} font-medium mb-3`}>
              {item.company}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Hover glow effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${colors.bg}`} />
          </motion.div>
        </div>

        {/* Empty space for opposite side */}
        <div className={`hidden md:block md:w-1/2`} />
      </div>

      {/* Timeline dot */}
      <motion.div
        className={`absolute top-6 left-0 md:left-1/2 transform -translate-x-1/2 z-10`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring" }}
      >
        <div className={`relative w-5 h-5 ${colors.bg} rounded-full border-4 border-gray-50 shadow-lg ${colors.glow}`}>
          {/* Pulse animation */}
          <motion.div
            className={`absolute inset-0 ${colors.bg} rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div ref={containerRef} className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;