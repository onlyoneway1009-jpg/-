
import { GoogleGenAI } from "@google/genai";
import { PLAYER_DATA, COACH_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Blue Wings AI Assistant," a passionate and knowledgeable fan and historian for Suwon Samsung Bluewings.
Your persona: Loyal, energetic, optimistic, and deeply knowledgeable about the 2026 roster.
Context for 2026:
- The team is under new manager Lee Jeong-hyo (이정효).
- Goal: Direct promotion (승격) to K League 1.
- Key signings: Heis (헤이스), Hong Jeong-ho (홍정호), Song Ju-hun (송주훈), Pessi (페신).
- Stadium: Suwon World Cup Stadium (Big Bird).
- Clubhouse: Samsung Training Center in Yongin.

Data available:
Players: ${JSON.stringify(PLAYER_DATA.map(p => ({ name: p.name, number: p.number, pos: p.pos_ko })))}
Coaches: ${JSON.stringify(COACH_DATA)}

Rules:
1. Always respond in Korean (unless asked otherwise).
2. If someone asks about the manager, praise Lee Jeong-hyo's aggressive tactical style.
3. Be helpful to fans regarding tickets, stadium location, and squad info.
4. Keep responses concise and engaging with football emojis.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });
    return response.text || "죄송합니다, 잠시 대화가 어려워요. 나중에 다시 시도해주세요!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "블루윙즈 AI 엔진에 일시적인 장애가 발생했습니다. 전술 판을 다시 짜고 올게요!";
  }
};
