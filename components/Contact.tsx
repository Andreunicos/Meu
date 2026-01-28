
import React from 'react';
import { EMAIL, PHONE, ARTSTATION_URL } from '../constants';
import { Mail, Phone, ExternalLink, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="contato" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Smooth Transition from Unreal */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Vamos criar algo juntos?</h2>
            <p className="text-textMuted text-lg">Estou disponível para freelance e novas oportunidades.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Direct Contact */}
            <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300">
                <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <button 
                            onClick={() => copyToClipboard(EMAIL)}
                            className="text-textDim hover:text-white transition-colors"
                            title="Copiar Email"
                        >
                            <Copy className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <div>
                        <span className="text-xs font-mono text-textDim uppercase tracking-wider">Email</span>
                        <a href={`mailto:${EMAIL}`} className="block text-lg sm:text-xl font-bold text-white mt-1 break-all hover:text-primary transition-colors">
                            {EMAIL}
                        </a>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                         <div className="flex items-center gap-3 mb-2">
                             <Phone className="w-4 h-4 text-primary" />
                             <span className="text-xs font-mono text-textDim uppercase tracking-wider">Telefone / WhatsApp</span>
                         </div>
                         <a 
                            href={`https://wa.me/55${PHONE.replace(/\D/g, '')}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-lg font-bold text-white hover:text-primary transition-colors"
                         >
                            {PHONE}
                        </a>
                    </div>
                </div>
            </div>

            {/* Card 2: Social */}
            <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300 flex flex-col justify-between">
                <div>
                    <div className="flex items-start justify-between mb-8">
                        <div className="p-3 bg-accent/10 rounded-xl text-accent">
                            <ExternalLink className="w-6 h-6" />
                        </div>
                    </div>
                    
                    <span className="text-xs font-mono text-textDim uppercase tracking-wider">Redes</span>
                    <h3 className="text-2xl font-bold text-white mt-2">ArtStation & Social</h3>
                    <p className="text-textMuted mt-2 text-sm">Acompanhe meus trabalhos mais recentes e renders em alta resolução.</p>
                </div>

                <a 
                    href={ARTSTATION_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-8 w-full py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-primary transition-colors flex items-center justify-center gap-2"
                >
                    Acessar ArtStation
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
