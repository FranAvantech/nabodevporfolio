import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { awardsData } from '../data/awardsData';

const Awards: React.FC = () => {
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
    <section id="awards" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-800 mb-6">
              Premios y Reconocimientos
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Destacados de game jams, competencias y reconocimientos de la industria por mi trabajo.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {awardsData.map((award, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                {award.imageUrl && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={award.imageUrl} 
                      alt={award.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                )}
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Award size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-primary-800">
                        {award.title}
                      </h3>
                      <p className="text-primary-500 text-sm font-medium">
                        {award.organization} • {award.year}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-4">
                    {award.description}
                  </p>
                  
                  {award.projectTitle && (
                    <div className="mt-2 pt-2 border-t border-neutral-200">
                      <p className="text-neutral-500 text-sm">
                        <span className="font-medium">Proyecto:</span> {award.projectTitle}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;