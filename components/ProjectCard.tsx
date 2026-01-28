import React from 'react';
import { Project } from '../types';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative w-full h-full cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container - Strict Aspect Ratio for Alignment */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#1a1a1a] border border-white/5">
        
        {/* Solid background instead of pulse to prevent blinking */}
        <div className="absolute inset-0 bg-[#121212] z-0" /> 
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="relative z-10 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Dark Gradient Overlay (Always visible slightly for text readability, darker on hover) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Content - Static position, no moving up/down to keep it stable */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-30">
            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-200 transition-colors">
                {project.description}
            </p>
        </div>

        {/* Action Icon */}
        <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="bg-black/50 backdrop-blur-md p-2 rounded-full text-primary border border-primary/20 hover:bg-primary hover:text-black transition-colors">
                <Eye className="w-5 h-5" />
             </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;