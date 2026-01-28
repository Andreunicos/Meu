
import React from 'react';
import { UNREAL_GAME_URL } from '../constants';
import { Ghost, Camera, Skull, Ghost as GhostIcon, Eye, Download } from 'lucide-react';

const UnrealSection: React.FC = () => {
  const images = [
    "https://img.itch.zone/aW1hZ2UvMzM1NzA2MC8yMDA1MDcxOS5qcGc=/original/lxZwqK.jpg",
    "https://img.itch.zone/aW1hZ2UvMzM1NzA2MC8yMDA1MDYzMy5wbmc=/original/FHodBa.png",
    "https://img.itch.zone/aW1hZ2UvMzM1NzA2MC8yMDA1MDM2Ny5qcGc=/original/PPSYxW.jpg",
    "https://img.itch.zone/aW1nLzIwMDQyNzQ2LmpwZw==/original/k9jrV1.jpg"
  ];

  return (
    <section id="unreal" className="relative py-32 px-6 bg-[#080808] overflow-hidden">
      {/* Smooth Transition Top Gradient from Roblox */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#030303] to-transparent z-20 pointer-events-none"></div>
      
      {/* Atmospheric Background Effects */}
      <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none opacity-40"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-red-900/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
          
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-xs font-bold tracking-[0.2em] uppercase">
                <Ghost className="w-4 h-4" />
                Destaque Unreal Engine Horror
             </div>
             
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white">
                <span className="text-red-600">House</span> of <br /> 
                <span className="text-purple-500 italic">Photh</span>
             </h2>
             
             <div className="space-y-4">
                <p className="text-xl text-gray-300 font-medium leading-relaxed">
                   📸 "Não ouça as mariposas."
                </p>
                <p className="text-gray-400 leading-relaxed">
                   House of Photh é um jogo de terror psicológico em primeira pessoa desenvolvido para a "Themed Horror Game Jam #20". Siga Oliver, um fotógrafo, em um pesadelo onde ele revive um conto distorcido de sua própria autoria.
                </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-white/5">
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-purple-400">
                      <Camera className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase">Narrativa Visual</span>
                   </div>
                   <p className="text-xs text-textMuted leading-relaxed">Exploração focada na fotografia para revelar segredos ocultos no cenário.</p>
                </div>
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-red-500">
                      <Skull className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase">Psicofobia</span>
                   </div>
                   <p className="text-xs text-textMuted leading-relaxed">Ambientes que se moldam conforme o estado mental do protagonista.</p>
                </div>
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-gray-400">
                      <Eye className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase">Fidelidade Unreal</span>
                   </div>
                   <p className="text-xs text-textMuted leading-relaxed">Iluminação dinâmica e atmosfera densa proporcionada pelo motor gráfico.</p>
                </div>
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-primary">
                      <GhostIcon className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase">Game Jam #20</span>
                   </div>
                   <p className="text-xs text-textMuted leading-relaxed">Projeto premiado e desenvolvido em tempo recorde com foco em atmosfera.</p>
                </div>
             </div>

             <div className="flex flex-wrap gap-4 pt-4">
                <a 
                   href={UNREAL_GAME_URL} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-red-600 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                   Jogar no Itch.io
                   <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </a>
             </div>
          </div>

          {/* Image Showcase Side */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 lg:sticky lg:top-32">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-2xl border border-white/5 aspect-square shadow-2xl transition-all duration-500 ${idx % 2 !== 0 ? 'mt-8' : '-mt-8'} hover:border-red-500/30`}
              >
                <img 
                  src={img} 
                  alt={`Gameplay House of Photh ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                        <span className="text-[10px] text-white font-mono uppercase tracking-widest">Horror Fragment {idx + 1}</span>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnrealSection;
