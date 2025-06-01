import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { Project } from '../types';
import VideoModal from './VideoModal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <motion.article
        whileHover={{ y: -8 }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-neutral-100"
      >
        <div className="relative overflow-hidden group">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white font-medium text-sm bg-primary-500 hover:bg-primary-600 px-3 py-1 rounded-full transition-colors"
            >
              <span>Jugar</span>
              <ExternalLink size={14} />
            </a>
            {project.trailerUrl && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-1 text-white font-medium text-sm bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full transition-colors"
              >
                <span>Ver Trailer</span>
                <Play size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="flex gap-2 mb-3">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-block text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-heading font-semibold text-xl text-primary-800 mb-2">
            {project.title}
          </h3>
          
          <p className="text-neutral-600 mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <a 
            href={project.projectLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary-600 hover:text-primary-500 transition-colors"
          >
            <span>Ver Más</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.article>

      {project.trailerUrl && (
        <VideoModal
          videoUrl={project.trailerUrl}
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;