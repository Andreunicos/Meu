export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}