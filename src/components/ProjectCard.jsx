import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:grid-flow-col-dense' : ''}`}>
        {/* Project Info */}
        <motion.div 
          className={`space-y-6 ${!isEven ? 'md:order-2 md:text-right' : 'order-2 md:order-1'}`}
        >
          <span className="text-secondary text-sm font-bold tracking-widest uppercase">
            Featured Project
          </span>
          
          <motion.h3 
            whileHover={{ color: '#3B82F6' }}
            className="text-3xl font-bold text-white group-hover:text-secondary transition-colors cursor-default"
          >
            {project.title}
          </motion.h3>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={`glass-card p-6 rounded-xl text-gray-300 text-sm leading-relaxed border border-white/10 shadow-lg relative z-10 ${
              !isEven ? ' bg-[#1a1442]/90' : ''
            }`}
          >
            {project.description}
          </motion.div>
          
          <ul className={`flex flex-wrap gap-4 text-xs font-mono text-gray-400 ${
            !isEven ? 'md:justify-end' : ''
          }`}>
            {project.techStack.map((tech, techIndex) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (techIndex * 0.1) }}
                whileHover={{ scale: 1.1, color: '#A855F7' }}
                className="cursor-default"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
          
          <div className={`flex gap-4 ${!isEven ? 'md:justify-end' : ''}`}>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white transition-colors"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white transition-colors"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt text-xl"></i>
            </motion.a>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div 
          className={`relative ${!isEven ? 'md:order-1' : 'order-1 md:order-2'}`}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute inset-0 bg-primary/20 blur-2xl rounded-xl -z-10 group-hover:bg-primary/30 transition-all duration-500"
          />
          
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl border border-white/10 bg-surface-dark shadow-2xl"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              alt={`${project.title} Screenshot`}
              className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
              src={project.image}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;