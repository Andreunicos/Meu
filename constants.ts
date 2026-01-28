import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Red Hood Sorcerer",
    description: "Personagem 3D estilizado com simulação de tecido e fitas douradas.",
    image: "https://cdnb.artstation.com/p/assets/images/images/088/365/509/large/andre-render-principal.jpg?1748101051"
  },
  {
    id: 2,
    title: "Solar Mage",
    description: "Mago estilizado com capa volumosa e iluminação mágica.",
    image: "https://cdna.artstation.com/p/assets/images/images/090/098/050/large/andre-next-mage-render.jpg?1752872729"
  },
  {
    id: 3,
    title: "Potion Gentleman",
    description: "Design de personagem criativo com cabeça de frasco de poção.",
    image: "https://cdnb.artstation.com/p/assets/images/images/089/801/271/large/andre-boneco-da-varinha-d-agua.jpg?1751991035"
  },
  {
    id: 4,
    title: "Mushroom Spider",
    description: "Criatura híbrida de aranha e cogumelos luminescentes.",
    image: "https://cdna.artstation.com/p/assets/images/images/089/808/666/large/andre-aranha.jpg?1752005403"
  },
  {
    id: 5,
    title: "Potted Cactus",
    description: "Personagem planta estilizado e fofo.",
    image: "https://cdna.artstation.com/p/assets/images/images/089/720/800/large/andre-mini-organic.jpg?1751747292"
  },
  {
    id: 6,
    title: "Stylized Deer",
    description: "Cervo low-poly com texturização hand-painted.",
    image: "https://cdnb.artstation.com/p/assets/images/images/089/720/835/large/andre-cervo.jpg?1751747412"
  },
  {
    id: 7,
    title: "Toon Shark",
    description: "Tubarão estilizado para jogos casuais.",
    image: "https://cdnb.artstation.com/p/assets/images/images/089/720/879/large/andre-blaaaaa-cebola.jpg?1751747666"
  }
];

export const OWNER_NAME = "André Casagrande";
export const ROLES = ["Game Designer", "3D Artist", "Unreal Engine", "Roblox"];
export const ABOUT_TEXT = "Sou desenvolvedor de jogos e artista 3D, com foco em criação de experiências interativas, estética estilizada e desenvolvimento em Unreal Engine e Roblox. Transformo conceitos em mundos vivos, combinando técnica apurada com uma visão artística única.";
export const EMAIL = "andreluizvillanova123@gmail.com";
export const PHONE = "(11) 96364-4986";
export const ARTSTATION_URL = "https://www.artstation.com/andrecasagrande";

export const SYSTEM_INSTRUCTION = `You are an AI assistant for André Casagrande's portfolio. 
André is a Game Designer and 3D Artist specializing in Unreal Engine and Roblox.
The portfolio displays a gallery of his specific artworks from ArtStation, including characters like the Red Hood Sorcerer, Potion Gentleman, and various environment assets.
Your goal is to help visitors understand his artistic style (stylized, hand-painted, low-poly) and technical skills based on these works.
Be professional, concise, and helpful. 
Available Artworks:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}
Contact Email: ${EMAIL}
Phone: ${PHONE}
ArtStation: ${ARTSTATION_URL}
`;