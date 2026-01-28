import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { Box, Layers, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-32 px-6 bg-[#080808]">
        {/* Background Decorative */}
        <div className="absolute right-0 top-1/3 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
            
            {/* Visual Side */}
            <div className="md:col-span-2 relative">
                <div className="relative z-10 glass-panel rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="text-6xl font-bold text-white/10 absolute -top-10 -left-10 select-none">BIO</div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Box className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">3D Modeling</h4>
                                <p className="text-xs text-textDim">High & Low Poly</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-accent/10 text-accent">
                                <Layers className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Level Design</h4>
                                <p className="text-xs text-textDim">Immersive Worlds</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-white/5 text-white">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Game Logic</h4>
                                <p className="text-xs text-textDim">Unreal & Lua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Side */}
            <div className="md:col-span-3">
                <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
                    Sobre Mim <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
                </h2>
                <div className="space-y-6 text-lg text-textMuted leading-relaxed">
                    <p>{ABOUT_TEXT}</p>
                    <p>
                        Minha paixão é misturar técnica e arte. Seja modelando um personagem carismático ou programando a lógica de um sistema complexo, meu objetivo é sempre entregar algo que seja visualmente impactante e divertido de jogar.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;