
import React from 'react';
import { Project } from '../types';
import { Plus, Maximize } from 'lucide-react';

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
      <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 transition-all duration-700 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_rgba(0,255,213,0.1)] group-hover:-translate-y-3">
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,213,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="relative z-10 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Project Info */}
        <div className="absolute bottom-0 left-0 w-full p-8 z-30 transition-all duration-500">
            <span className="text-primary/80 text-[10px] font-mono uppercase tracking-[0.3em] mb-2 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {project.category === 'Personagens' ? 'Character Art' : 'Asset / Prop'}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm font-light line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                {project.description}
            </p>
        </div>

        {/* Hover Icon */}
        <div className="absolute top-6 right-6 z-40 opacity-0 group-hover:opacity-100 transition-all duration-500">
             <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/10 transform scale-50 group-hover:scale-100 transition-transform">
                <Maximize className="w-5 h-5 text-primary" />
             </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
