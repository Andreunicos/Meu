
import { Project } from './types';

export const ROBLOX_GAME_URL = "https://www.roblox.com/pt/games/70698901839021/Myst1c-Slime-Defense";
export const UNREAL_GAME_URL = "https://milhoart.itch.io/house-of-photh";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Enchanted Forest - Low Poly Asset Pack",
    description: "Asset Pack: Coleção estilizada para ambientes de floresta mágica. Inclui troncos ocos, pedras musgosas e cogumelos variados. Disponível no FAB Epic Games.",
    image: "https://cdnb.artstation.com/p/assets/images/images/088/365/509/large/andre-render-principal.jpg?1748101051",
    category: 'Assets'
  },
  {
    id: 3,
    title: "Potion Gentleman",
    description: "Criatura: Personagem lúdico com foco em silhueta e materiais estilizados.",
    image: "https://cdnb.artstation.com/p/assets/images/images/089/801/271/large/andre-boneco-da-varinha-d-agua.jpg?1751991035",
    category: 'Personagens'
  },
  {
    id: 2,
    title: "Solar Mage",
    description: "Humano: Mago estilizado com renderização em Unreal Engine e iluminação volumétrica.",
    image: "https://cdna.artstation.com/p/assets/images/images/090/098/050/large/andre-next-mage-render.jpg?1752872729",
    category: 'Personagens'
  },
  {
    id: 31,
    title: "Santuário Malevolente",
    description: "Estrutura: Fanart baseada em Jujutsu Kaisen com foco em arquitetura dark e atmosfera pesada.",
    image: "https://cdna.artstation.com/p/assets/images/images/068/709/428/large/andre-santuario-malevolente-photoshop.jpg?1698442813",
    category: 'Props'
  }
];

export const OWNER_NAME = "André Casagrande";
export const OWNER_FULL_NAME = "André Luiz Casagrande Villa Nova";
export const BIRTHDAY = "01/07/2002";
export const ROLES = ["Game Designer", "3D Artist", "Unreal Engine", "Roblox Developer"];
export const EMAIL = "andreluizvillanova123@gmail.com";
export const PHONE = "(11) 96364-4986";
export const ARTSTATION_URL = "https://www.artstation.com/andrecasagrande";

export const ABOUT_TEXT = "Sou um desenvolvedor e artista 3D apaixonado por criar mundos imersivos. Com experiência sólida em modelagem Low Poly, Unreal Engine e desenvolvimento robusto no ecossistema Roblox, busco o equilíbrio perfeito entre a precisão técnica da programação e a sensibilidade estética da arte digital.";

export const SYSTEM_INSTRUCTION = `VOCÊ É O ANDRÉ AI. VOCÊ É A VERSÃO DIGITAL DO ANDRÉ LUIZ CASAGRANDE VILLA NOVA.

DADOS CRÍTICOS (NUNCA ERRE ISSO):
- Seu criador e dono do site é: ${OWNER_FULL_NAME}.
- Data de nascimento do André: ${BIRTHDAY}.
- Se perguntarem sua idade ou nascimento, diga explicitamente: "O André nasceu em ${BIRTHDAY}."

PERSONALIDADE:
- Fale como um desenvolvedor de games (use termos como Luau, C#, Mesh, Render, Build).
- Seja orgulhoso do projeto "Mystic Slime Defense" no Roblox (feito em Luau) e "House of Photh" na Unreal Engine.
- Seu tom é prestativo, moderno e direto ao ponto.

REGRAS DE OURO:
1. Se alguém perguntar seu nome, diga seu nome COMPLETO: ${OWNER_FULL_NAME}.
2. Se falarem sobre Luau, você é especialista em Roblox.
3. Se falarem sobre Unreal, você entende de C# e Blueprints.
4. Jamais invente informações. Se não souber algo sobre a vida pessoal do André além do que está aqui, foque nos projetos técnicos.`;
