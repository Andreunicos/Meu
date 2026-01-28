import React, { useState, useEffect } from 'react';
import { PROJECTS, ARTSTATION_URL } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import { ArrowUpRight, X, Maximize2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="galeria" className="relative py-24 px-4 sm:px-8 bg-[#050505]">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/10 pb-8">
        <div>
           <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">Portfólio Selecionado</span>
           <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Galeria de Arte</h2>
        </div>
        
        <a 
          href={ARTSTATION_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-white/70 hover:text-primary transition-colors pb-1"
        >
          <span className="uppercase tracking-widest text-sm font-bold">ArtStation</span>
          <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Perfectly Aligned Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <ProjectCard 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      {/* Full Screen Modal / Lightbox */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 z-[110] p-2 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Modal Content */}
          <div 
            className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl shadow-black/50 animate-in zoom-in-95 duration-300"
              />
              {/* Optional: Fullscreen indicator on image hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                 <Maximize2 className="w-12 h-12 text-white/50 drop-shadow-lg" />
              </div>
            </div>

            <div className="mt-6 text-center max-w-2xl animate-in slide-in-from-bottom-4 duration-500 delay-100">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-gray-400 text-lg font-light">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;