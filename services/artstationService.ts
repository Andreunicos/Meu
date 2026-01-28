
import { Project } from '../types';
import { PROJECTS as MANUAL_PROJECTS } from '../constants';

const ARTSTATION_USERNAME = 'andrecasagrande';
const PROJECTS_URL = `https://www.artstation.com/users/${ARTSTATION_USERNAME}/projects.json`;
// Usando AllOrigins como proxy para evitar erros de CORS no navegador
const PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(PROJECTS_URL)}`;

export const fetchArtStationProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(PROXY_URL);
    
    if (!response.ok) {
      console.warn('Serviço ArtStation temporariamente indisponível. Carregando dados locais.');
      return MANUAL_PROJECTS;
    }
    
    const data = await response.json();
    const remoteProjects = data.data || [];

    const normalizedProjects: Project[] = remoteProjects.map((p: any) => {
      const title = p.title;
      let category: 'Personagens' | 'Props' | 'Assets' = 'Props';

      const titleLower = title.toLowerCase();
      if (
        titleLower.includes('asset') || 
        titleLower.includes('pack') || 
        titleLower.includes('kit') || 
        titleLower.includes('low poly') ||
        titleLower.includes('forest')
      ) {
        category = 'Assets';
      } else if (
        titleLower.includes('mage') || 
        titleLower.includes('gentleman') || 
        titleLower.includes('spider') || 
        titleLower.includes('deer') || 
        titleLower.includes('shark') || 
        titleLower.includes('creature') ||
        titleLower.includes('personagem') ||
        titleLower.includes('busto') ||
        titleLower.includes('human')
      ) {
        category = 'Personagens';
      }

      return {
        id: p.id,
        title: title,
        description: "Projeto sincronizado do ArtStation.",
        image: p.cover.large_image_url || p.cover.medium_image_url,
        category: category
      };
    });

    // Merge e Deduplicação (Prioridade para os manuais com descrições ricas)
    const finalProjects = [...MANUAL_PROJECTS];

    normalizedProjects.forEach(remote => {
      const exists = finalProjects.find(m => 
        m.id === remote.id || 
        m.title.toLowerCase() === remote.title.toLowerCase()
      );
      
      if (!exists) {
        finalProjects.push(remote);
      }
    });

    return finalProjects;
  } catch (error) {
    // Log silencioso para não assustar o usuário
    console.debug("Info: Usando fallback de projetos locais.");
    return MANUAL_PROJECTS;
  }
};
