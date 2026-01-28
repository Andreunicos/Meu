
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Smooth scroll handling
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Roblox', href: '#roblox' },
    { name: 'Unreal', href: '#unreal' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Desktop Floating Nav */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className={`pointer-events-auto transition-all duration-500 ease-out ${
          scrolled ? 'py-3 px-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl shadow-primary/5' : 'py-4 px-8 bg-transparent'
        }`}>
          <div className="flex items-center gap-8 md:gap-12">
            <a 
                href="#" 
                onClick={(e) => handleNavClick(e, '#')}
                className="text-white font-bold text-xl tracking-tighter hover:text-primary transition-colors"
            >
                AC<span className="text-primary">.</span>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-300 hover:text-white hover:tracking-widest transition-all duration-300 uppercase tracking-wide relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button 
              className="md:hidden text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute top-6 right-6">
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-4xl font-light text-white hover:text-primary hover:scale-110 transition-all duration-300"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
