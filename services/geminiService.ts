
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Instância única para manter o histórico da conversa durante a sessão
let activeChat: Chat | null = null;

/**
 * Inicializa a sessão de chat seguindo as diretrizes de API Key e modelo.
 */
const getChatSession = async (): Promise<Chat | null> => {
  if (activeChat) return activeChat;

  try {
    // Inicialização obrigatória usando process.env.API_KEY diretamente em um objeto nomeado
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Criação do chat utilizando o modelo gemini-3-flash-preview para tarefas gerais de texto
    activeChat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9,
        topP: 0.95,
      },
    });
    return activeChat;
  } catch (error) {
    console.error("Falha ao criar sessão de chat:", error);
    return null;
  }
};

/**
 * Envia uma mensagem para o André AI e processa a resposta textual.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = await getChatSession();
    
    if (!chat) {
      return "Ops! Minha conexão neural falhou. Tente novamente em instantes.";
    }

    // Utiliza sendMessage enviando o objeto com a propriedade message
    const response = await chat.sendMessage({ message });
    
    // Acessa a propriedade .text (não é um método) conforme documentação do SDK
    return response.text || "Fiquei sem palavras agora. Pode perguntar de outro jeito?";
  } catch (error: any) {
    console.error("Erro no fluxo de mensagens:", error);
    // Em caso de erro crítico, resetamos a sessão para permitir reconexão
    activeChat = null;
    return "Tive um 'glitch' no meu sistema. Tenta me mandar essa mensagem de novo?";
  }
};
