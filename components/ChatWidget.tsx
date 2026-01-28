
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot, Zap, Code, Gamepad2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'E aí! Sou o assistente do André. Posso te contar sobre os projetos de 3D, Roblox ou Unreal Engine. O que quer saber?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { label: "Skills 3D", text: "Quais são suas principais habilidades em modelagem 3D?", icon: <Code className="w-3 h-3" /> },
    { label: "Slime Defense", text: "Me conte mais sobre o jogo Mystic Slime Defense do Roblox.", icon: <Gamepad2 className="w-3 h-3" /> },
    { label: "House of Photh", text: "O que é o jogo House of Photh da Unreal Engine?", icon: <Zap className="w-3 h-3" /> },
    { label: "Contato", text: "Como posso entrar em contato com o André para um freela?", icon: <User className="w-3 h-3" /> }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleSend = async (textToSend: string = input) => {
    const messageText = textToSend.trim();
    if (!messageText || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: messageText }]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messageText);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Janela de Chat */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[420px] h-[600px] bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-fade-up ring-1 ring-primary/20">
          
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-[#111] to-[#0a0a0a] border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30 rotate-3">
                        <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse"></span>
                </div>
                <div>
                    <h3 className="text-white font-bold text-sm tracking-tight">André AI</h3>
                    <p className="text-[10px] text-primary/60 font-mono uppercase tracking-widest">Sistemas Ativos</p>
                </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-white transition-colors hover:bg-white/5 rounded-xl"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Área de Mensagens */}
          <div className="flex-1 p-5 overflow-y-auto space-y-6 no-scrollbar bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,213,0.03),transparent)]">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fade-up`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border ${
                  msg.role === 'user' ? 'bg-white/5 border-white/10' : 'bg-primary/10 border-primary/20'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-gray-400" /> : <Bot className="w-4 h-4 text-primary" />}
                </div>
                
                <div 
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-black font-bold rounded-tr-none' 
                      : 'bg-[#151515] text-gray-200 rounded-tl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 animate-pulse">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-[#151515] rounded-2xl rounded-tl-none px-4 py-3 flex gap-2 items-center border border-white/5">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Sugestões Rápidas (Chips) */}
          {!isLoading && (
            <div className="px-5 pb-4 flex flex-wrap gap-2 animate-fade-up">
                {suggestions.map((sug, i) => (
                    <button 
                        key={i}
                        onClick={() => handleSend(sug.text)}
                        className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-3 py-2 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 text-gray-400 hover:text-primary transition-all duration-300"
                    >
                        {sug.icon}
                        {sug.label}
                    </button>
                ))}
            </div>
          )}

          {/* Input */}
          <div className="p-5 bg-[#080808] border-t border-white/10">
            <div className="relative flex items-center gap-2">
              <div className="flex-1 relative group">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Pergunte sobre skills, jogos ou 3D..."
                    className="w-full bg-white/5 text-white placeholder-gray-600 rounded-2xl pl-4 pr-12 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 border border-white/5 group-hover:border-white/20 transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-hover:text-primary/50 transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
              </div>
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="p-4 bg-primary text-black rounded-2xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:grayscale transition-all shadow-[0_0_20px_rgba(0,255,213,0.3)]"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1.5 opacity-30 hover:opacity-100 transition-opacity">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400">Gemini Neural Link v2.0</span>
            </div>
          </div>
        </div>
      )}

      {/* Botão de Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-16 h-16 rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden ${
          isOpen ? 'bg-white/10 text-white border border-white/20' : 'bg-primary text-black hover:scale-110'
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
        {isOpen ? (
          <X className="w-8 h-8 relative z-10" />
        ) : (
          <div className="relative z-10">
             <MessageCircle className="w-8 h-8" />
             <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white flex items-center justify-center text-[9px] font-black">AI</span>
             </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
