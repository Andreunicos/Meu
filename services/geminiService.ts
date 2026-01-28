
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let activeChat: Chat | null = null;

const getChatSession = async (): Promise<Chat | null> => {
  if (activeChat) return activeChat;

  const key = process.env.API_KEY;
  
  if (!key || key === "" || key === "undefined") {
    console.error("ERRO CRÍTICO: API_KEY não configurada no ambiente. Verifique o painel do Vercel.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: key });
    activeChat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4, // Menor temperatura para evitar que a IA invente dados errados
        topP: 0.9,
      },
    });
    return activeChat;
  } catch (error) {
    console.error("Erro ao inicializar sessão Gemini:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = await getChatSession();
    
    if (!chat) {
      return "Desculpe, André. Minha conexão neural está offline. Verifique se a API_KEY foi adicionada corretamente nas configurações do Vercel e se você fez um novo Deploy.";
    }

    const response = await chat.sendMessage({ message });
    return response.text || "Recebi uma resposta vazia. Pode tentar perguntar de novo?";
  } catch (error: any) {
    console.error("Erro ao enviar mensagem:", error);
    activeChat = null; // Reseta para tentar reconectar na próxima
    return "Tive um erro de processamento. Pode repetir a pergunta?";
  }
};
