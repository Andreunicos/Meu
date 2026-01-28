import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

export const initializeChat = async () => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found. Chat functionality will be limited.");
    return null;
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat session", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Desculpe, o sistema de chat não está disponível no momento (API Key ausente ou erro de conexão).";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "Não foi possível gerar uma resposta.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Desculpe, ocorreu um erro ao processar sua mensagem.";
  }
};