import devdocgenImg from './devdocgen.png';
import carbontrackerImg from './carbontracker.png';
import gigflowImg from './gigflow.png';
import klothyxImg from './klothyx.png';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Star } from './icons';

const projects = [
  {
    id: 1,
    title: 'Klothyx – Modern Fashion Wear',
    description: 'A modern fashion-focused web application showcasing trendy clothing collections with a clean UI and smooth user experience.',
    tech: ['React.js', 'Node.js', 'JavaScript', 'CSS / Tailwind', 'Stripe'],
    features: [
      'Stylish and responsive fashion UI',
      'Product listing with modern layouts',
      'Smooth navigation and user-friendly design',
      'Mobile-first and fully responsive'
    ],
    github: 'https://github.com/Amardipy10/Klothyx-Style-Wear',
    live: 'https://klothyx-style-wear-git-main-amardipyadavs-projects.vercel.app/',
    image: klothyxImg,
    color: '#ec4899'
  },
  {
    id: 2,
    title: 'GigFlow',
    description: 'A full-stack freelance marketplace where clients can post gigs and freelancers can submit bids, featuring secure authentication and atomic hiring logic.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    features: [
      'JWT-based authentication using HttpOnly cookies',
      'Create and browse gigs with search functionality',
      'Submit and manage bids on gigs',
      'Atomic hiring process with MongoDB transactions',
      'Role-based authorization for clients and freelancers',
      'Post-hire real-time messaging using Socket.io'
    ],
    github: 'https://github.com/Amardipy10/Gig-Flow',
    live: 'https://gig-flow-eta.vercel.app/',
    image: gigflowImg,
    color: '#8b5cf6'
  },
  {
    id: 3,
    title: 'Carbon Footprint Tracker',
    description: 'Full-stack web application that calculates carbon emissions based on lifestyle inputs with dynamic visualizations.',
    tech: ['React.js', 'Node.js', 'MySQL', 'JavaScript'],
    features: ['Calculate personal carbon emissions', 'Secure MySQL data storage', 'Dynamic visualizations for eco-awareness'],
    github: 'https://github.com/Amardipy10/CarbonFootprintCalculator',
    live: 'https://carbon-footprint-calculator-five.vercel.app/',
    image: carbontrackerImg,
    color: '#10b981'
  },
  {
    id: 4,
    title: 'AI DevDocGen',
    description: 'AI-powered README generation tool that creates clean, structured documentation in under 15 seconds using Gemini API.',
    tech: ['React.js', 'Node.js', 'Google Gemini API', 'JavaScript'],
    features: ['Generate README.md files for 10+ different projects', 'Professional documentation in under 15 seconds', 'Clean and structured output format'],
    github: 'https://github.com/Amardipy10/AI-DevDocGen',
    live: 'https://ai-dev-doc-gen.vercel.app/',
    image: devdocgenImg,
    color: '#3b82f6'
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      className="group relative"
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-xl flex flex-col bg-white border border-gray-200/50"
        whileHover={{
          y: -10,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Glowing border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${project.color}30, transparent, ${project.color}30)`,
            filter: 'blur(1px)'
          }}
        />

        {/* Image with zoom effect */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/400x250/e2e8f0/e2e8f0?text=Image';
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick links on hover */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-800 font-medium text-sm hover:bg-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} /> Code
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-white font-medium text-sm rounded-lg transition-colors"
              style={{ backgroundColor: project.color }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} /> Live
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <motion.h3
            className="text-xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.color}, #8b5cf6)`
            }}
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-600 mb-4 flex-grow line-clamp-2">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs font-semibold rounded-full border"
                style={{
                  backgroundColor: `${project.color}10`,
                  borderColor: `${project.color}30`,
                  color: project.color
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-500">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Features with stagger */}
          <ul className="text-sm text-gray-600 space-y-2">
            {project.features.slice(0, 3).map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star size={14} className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for building great products.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;