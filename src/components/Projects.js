import devdocgenImg from './devdocgen.png';
import carbontrackerImg from './carbontracker.png';

import React from 'react';
import { Github, ExternalLink, Star } from './icons';

const projects = [
  {
    id: 1,
    title: 'AI DevDocGen',
    description: 'AI-powered README generation tool that creates clean, structured documentation in under 15 seconds using Gemini API.',
    tech: ['React.js', 'Node.js', 'Google Gemini API', 'JavaScript'],
    features: ['Generate README.md files for 10+ different projects', 'Professional documentation in under 15 seconds', 'Clean and structured output format'],
    github: 'https://github.com/Amardipy10/AI-DevDocGen',
    live: 'https://ai-dev-doc-gen.vercel.app/',
    image: devdocgenImg
  },
  {
    id: 2,
    title: 'Carbon Footprint Tracker',
    description: 'Full-stack web application that calculates carbon emissions based on lifestyle inputs with dynamic visualizations.',
    tech: ['React.js', 'Node.js', 'MySQL', 'JavaScript'],
    features: ['Calculate personal carbon emissions', 'Secure MySQL data storage', 'Dynamic visualizations for eco-awareness'],
    github: 'https://github.com/Amardipy10/CarbonFootprintCalculator',
    live: 'https://carbon-footprint-calculator-five.vercel.app/',
    image: carbontrackerImg
  }
];

const ProjectCard = ({ project }) => (
  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col bg-gray-50 dark:bg-gray-800/50">
    <img src={project.image} alt={project.title} className="w-full h-56 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x250/e2e8f0/e2e8f0?text=Image'; }}/>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full">{tech}</span>
        ))}
      </div>
      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-4">
        {project.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Star size={14} className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
          <Github size={18} className="mr-2" /> GitHub
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
          <ExternalLink size={18} className="mr-2" /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;