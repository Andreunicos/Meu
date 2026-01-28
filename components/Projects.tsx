
import React, { useState, useEffect, useMemo } from 'react';
import { ARTSTATION_URL } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import { fetchArtStationProjects } from '../services/artstationService';
import { ArrowUpRight, X, LayoutGrid, Users, Box, Sparkles, Package, Loader2, RefreshCw } from 'lucide-react';

type CategoryFilter = 'Tudo' | 'Personagens' | 'Props' | 'Assets';

const Projects: React.FC = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Tudo');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchArtStationProjects();
      setAllProjects(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'Tudo' 
      ? allProjects 
      : allProjects.filter(p => p.category === activeCategory);
  }, [activeCategory, allProjects]);

  const categories = [
    { id: 'Tudo', label: 'Tudo', icon: LayoutGrid },
    { id: 'Assets', label: 'Kits / Asset Packs', icon: Package },
    { id: 'Personagens', label: 'Humanos / Criaturas / Animais', icon: Users },
    { id: 'Props', label: 'Estruturas / Props', icon: Box },
  ];

  return (
    <section id="galeria" className="relative py-24 px-4 sm:px-8 bg-[#050505] min-h-screen">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/10 pb-12 relative z-10">
        <div className="animate-fade-up">
           <div className="flex items-center gap-2 mb-3">
             <Sparkles className="w-5 h-5 text-primary animate-pulse" />
             <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase block">Portfólio de Arte 3D</span>
           </div>
           <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Galeria 3D</h2>
        </div>
        
        <div className="flex flex-col items-end gap-2">
            {!isLoading && (
                <div className="flex items-center gap-2 text-[10px] text-primary/50 font-mono uppercase tracking-widest mb-2">
                    <RefreshCw className="w-3 h-3 animate-spin-slow" />
                    Sincronizado com ArtStation
                </div>
            )}
            <a 
              href={ARTSTATION_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-white/40 hover:text-primary transition-all duration-300 pb-2 animate-fade-up"
            >
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold">Ver Perfil ArtStation</span>
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>

      {/* Tabs / Filters */}
      <div className="max-w-7xl mx-auto mb-16 overflow-x-auto no-scrollbar animate-fade-up">
        <div className="flex gap-4 min-w-max pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryFilter)}
              className={`flex items-center gap-3 px-10 py-5 rounded-2xl border transition-all duration-500 ${
                activeCategory === cat.id 
                ? 'bg-primary border-primary text-black font-bold shadow-[0_0_40px_rgba(0,255,213,0.3)] scale-105 z-20' 
                : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white'
              }`}
            >
              <cat.icon className={`w-5 h-5 ${activeCategory === cat.id ? 'animate-bounce' : 'group-hover:rotate-12 transition-transform'}`} />
              <span className="text-xs tracking-[0.2em] uppercase font-bold">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid / Loading State */}
      <div className="max-w-7xl mx-auto relative z-10">
        {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-6">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <p className="text-white/30 font-mono text-sm uppercase tracking-[0.4em] animate-pulse">Carregando Projetos...</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={`${project.id}-${activeCategory}`} 
                    className="animate-reveal opacity-0"
                    style={{ 
                      animationDelay: `${(index % 9) * 80}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <ProjectCard 
                      project={project} 
                      onClick={() => setSelectedProject(project)}
                    />
                  </div>
                ))}
            </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-12 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <button 
            className="absolute top-8 right-8 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all transform hover:rotate-90 border border-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain shadow-2xl animate-zoom-fade"
                />
            </div>

            <div className="mt-12 text-center max-w-3xl animate-fade-up">
                <span className="text-primary text-[10px] font-mono uppercase tracking-[0.6em] mb-4 block">
                  {selectedProject.category === 'Personagens' ? 'Humanos / Criaturas / Animais' : selectedProject.category === 'Assets' ? 'Kits / Asset Packs' : 'Estruturas / Props'}
                </span>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">{selectedProject.title}</h3>
                <div className="w-16 h-px bg-primary/40 mx-auto mb-6"></div>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed px-4">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
