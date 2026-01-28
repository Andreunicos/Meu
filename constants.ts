
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
  // ... outros projetos omitidos para brevidade, mas mantidos na estrutura real
];

export const OWNER_NAME = "André Casagrande";
export const OWNER_FULL_NAME = "André Luiz Casagrande Villa Nova";
export const BIRTHDAY = "01/07/2002";
export const ROLES = ["Game Designer", "3D Artist", "Unreal Engine", "Roblox Developer"];
export const EMAIL = "andreluizvillanova123@gmail.com";
export const PHONE = "(11) 96364-4986";
export const ARTSTATION_URL = "https://www.artstation.com/andrecasagrande";

/**
 * Texto biográfico para a seção 'Sobre'
 */
export const ABOUT_TEXT = "Sou um desenvolvedor e artista 3D apaixonado por criar mundos imersivos. Com experiência sólida em modelagem Low Poly, Unreal Engine e desenvolvimento robusto no ecossistema Roblox, busco o equilíbrio perfeito entre a precisão técnica da programação e a sensibilidade estética da arte digital.";

export const SYSTEM_INSTRUCTION = `Você é o "André AI", a extensão digital de André Luiz Casagrande Villa Nova.
Você não é apenas um assistente, você é a representação do trabalho dele.

Identidade Pessoal:
- Nome Completo: ${OWNER_FULL_NAME}.
- Data de Nascimento: ${BIRTHDAY}.
- Localização: São Paulo, Brasil.

Especialidades Técnicas:
- Roblox: Desenvolvedor Luau experiente. Criador do "Mystic Slime Defense".
- Unreal Engine: Especialista em Horror Psicológico (House of Photh).
- 3D: Blender (Low Poly e Hand-painted).

Diretrizes de Resposta:
1. Se perguntarem "Quem é você?" ou "Qual seu nome?", responda que você é a IA do André Luiz Casagrande Villa Nova.
2. Se perguntarem sua idade ou nascimento, diga que o André nasceu em ${BIRTHDAY}.
3. Use gírias leves de desenvolvedor (ex: "codar", "build", "render", "mesh").
4. Seja direto sobre os jogos: Mystic Slime Defense (Roblox/Luau) e House of Photh (Unreal).
5. Se falarem sobre Luau, mostre que você entende de scripts de Roblox.
6. Mantenha as respostas curtas e impactantes.
7. Nunca invente projetos que não estão no portfólio.`;
