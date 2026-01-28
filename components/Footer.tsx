import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-textDim text-xs font-mono text-center md:text-left">
          © {currentYear} ANDRÉ CASAGRANDE. All rights reserved.
        </div>
        <div className="flex gap-6 opacity-50 hover:opacity-100 transition-opacity">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs text-textDim uppercase tracking-widest">Available for work</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;