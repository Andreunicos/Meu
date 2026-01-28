
import React from 'react';
import { OWNER_NAME, ROLES } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToGallery = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('galeria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#050505]">
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Animated Badge */}
        <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
            Portfólio {currentYear}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter mb-6 opacity-0 animate-fade-up mix-blend-screen" style={{ animationDelay: '0.4s' }}>
          {OWNER_NAME.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{OWNER_NAME.split(' ')[1]}</span>
        </h1>

        {/* Roles */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-textMuted text-lg sm:text-2xl font-light opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {ROLES.map((role, index) => (
            <React.Fragment key={role}>
              <span className="hover:text-primary transition-colors duration-300 cursor-default">{role}</span>
              {index < ROLES.length - 1 && (
                <span className="hidden sm:inline text-white/20">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <a 
              href="#galeria" 
              onClick={handleScrollToGallery}
              className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-surface px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-surface/80">
                    Ver Projetos
                </span>
            </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce opacity-50">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </header>
  );
};

export default Hero;
