import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-800 mb-6">
              Mis proyectos
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
             Son simples, divertidos y están hechos con cariño✨ ¡Pruébalos y dime qué te parecen! ♥️
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <a 
               href="https://nabo-games.itch.io/" 
              className="inline-flex items-center gap-2 font-heading font-medium text-primary-600 hover:text-primary-500 transition-colors"
            >
              Ver mas proyectos
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;