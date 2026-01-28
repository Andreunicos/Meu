
import React from 'react';
import { ROBLOX_GAME_URL } from '../constants';
import { Gamepad2, ArrowRight, ShieldCheck, Zap, Sword, Star, Heart } from 'lucide-react';

const RobloxSection: React.FC = () => {
  const images = [
    "https://tr.rbxcdn.com/180DAY-4ed52d1ef2044ecf7d9ebf91b1b2da7a/768/432/Image/Webp/noFilter",
    "https://tr.rbxcdn.com/180DAY-1c8f6ea9493d564b931981aa794696ba/768/432/Image/Webp/noFilter",
    "https://tr.rbxcdn.com/180DAY-4287b531816360eea916109f8fa9ec5e/768/432/Image/Png/noFilter",
    "https://tr.rbxcdn.com/180DAY-7cefcb11f0184d6b12cc9a15043a7c46/768/432/Image/Webp/noFilter"
  ];

  return (
    <section id="roblox" className="relative py-32 px-6 bg-[#030303] overflow-hidden">
      {/* Smooth Transition Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-20"></div>
      
      {/* Background Glows in Theme Colors */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[60vw] h-[40vw] bg-yellow-500/10 rounded-full blur-[160px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-green-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase">
                <Gamepad2 className="w-4 h-4" />
                Destaque Roblox Developer
             </div>
             
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                <span className="text-yellow-400">Mystic</span> <br /> 
                <span className="text-green-500 italic">Slime Defense</span>
             </h2>
             
             <div className="space-y-4">
                <p className="text-xl text-white font-medium leading-relaxed">
                   🛡️ Defenda sua base contra hordas de Slimes Místicos!
                </p>
                <p className="text-gray-400 leading-relaxed italic">
                   Construa, evolua e crie estratégias para sobreviver às ondas mais difíceis nesta experiência única desenvolvida no Roblox.
                </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-white/5">
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-yellow-400">
                      <ShieldCheck className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase">Defesas Variadas</span>
                   </div>
                   <p className="text-xs text-textMuted leading-relaxed">Torretas de Fogo, Água, Pedra, Sniper e Morteiro com sistemas de upgrade.</p>
                </div>
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-green-400">
                      <Zap className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase">Sistema de Pets</span>
                   </div>
                   <p className="text-xs text-textMuted leading-relaxed">Incubadora de ovos e pets raros que concedem buffs estratégicos.</p>
                </div>
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-red-500">
                      <Sword className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase">Eventos Globais</span>
                   </div>
                   <p className="text-xs text-textMuted leading-relaxed">Sobreviva à aterrorizante Blood Moon e ao intenso Mega Sol.</p>
                </div>
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-primary">
                      <Star className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase">Recompensas</span>
                   </div>
                   <p className="text-xs text-textMuted leading-relaxed">Sistema diário de Ouro, Cristais, Chaves, Skins e Efeitos exclusivos.</p>
                </div>
             </div>

             <div className="flex flex-wrap gap-4 pt-4">
                <a 
                   href={ROBLOX_GAME_URL} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500 to-green-600 text-black px-10 py-5 rounded-full font-bold text-lg hover:brightness-110 transition-all duration-500 transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
                >
                   Jogar Agora
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <div className="flex items-center gap-3 px-6 text-textDim italic text-sm">
                   <Heart className="w-4 h-4 text-red-500" />
                   Favoritem o jogo para novas updates!
                </div>
             </div>
          </div>

          {/* Image Showcase Side */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 lg:sticky lg:top-32">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-2xl border border-white/5 aspect-video shadow-2xl transition-all duration-500 ${idx === 1 ? 'mt-12' : ''} ${idx === 2 ? '-mt-12' : ''} hover:border-yellow-500/30`}
              >
                <img 
                  src={img} 
                  alt={`Gameplay Mystic Slime Defense ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] text-white font-mono uppercase tracking-widest">In-Game Capture</span>
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

export default RobloxSection;
