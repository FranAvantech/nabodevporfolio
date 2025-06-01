import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Link as LinkIcon } from 'lucide-react';
import { makingOfData } from '../data/makingOfData';
import { projectsData } from '../data/projectsData';

const MakingOf: React.FC = () => {
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
    <section id="making-of" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-800 mb-6">
              Detrás de Escenas
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Un vistazo al proceso creativo y técnico detrás de mis juegos, mostrando el desarrollo y la evolución de cada proyecto.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {makingOfData.map((item) => {
              const project = projectsData.find(p => p.id === item.projectId);
              
              return (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-neutral-100"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.mediaUrl} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    {project && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-block bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>
                    
                    <h3 className="font-heading font-semibold text-xl text-primary-800 mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4">
                      {item.description}
                    </p>

                    {project && (
                      <a 
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-500 transition-colors"
                      >
                        <LinkIcon size={16} />
                        <span>Ver Proyecto Completo</span>
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MakingOf;