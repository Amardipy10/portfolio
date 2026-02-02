import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaPython, FaDatabase, FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiTypescript, SiNextdotjs, SiPostman
} from 'react-icons/si';

const skillsData = [
  { name: 'React', icon: <FaReact className="text-cyan-400" />, color: '#61DAFB' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, color: '#F7DF1E' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, color: '#339933' },
  { name: 'Express', icon: <SiExpress className="text-gray-600" />, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, color: '#4479A1' },
  { name: 'Python', icon: <FaPython className="text-blue-400" />, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, color: '#06B6D4' },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, color: '#1572B6' },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub className="text-gray-700" />, color: '#181717' },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" />, color: '#FF6C37' },
  { name: 'Figma', icon: <FaFigma className="text-purple-400" />, color: '#F24E1E' }
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      whileHover={{
        y: -15,
        scale: 1.05,
        rotateY: 10,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      <motion.div
        className="relative p-6 rounded-2xl flex flex-col items-center gap-4 backdrop-blur-sm border transition-all duration-500 cursor-pointer overflow-hidden bg-white border-gray-200/50 shadow-lg hover:shadow-xl"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
          }}
        />

        {/* Icon container with floating animation */}
        <motion.div
          className="relative z-10 text-5xl"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        >
          {skill.icon}
          {/* Glow behind icon */}
          <motion.div
            className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
            style={{ backgroundColor: skill.color }}
          />
        </motion.div>

        {/* Skill name */}
        <motion.span
          className="relative z-10 font-medium text-sm text-gray-700 group-hover:text-gray-900 transition-colors"
        >
          {skill.name}
        </motion.span>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`
          }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
