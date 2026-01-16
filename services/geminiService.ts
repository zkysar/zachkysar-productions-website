import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateInquiryDraft = async (userInput: string): Promise<string> => {
  if (!apiKey) {
    return "API Key not configured. Please contact directly via email.";
  }

  try {
    const modelId = "gemini-3-flash-preview";
    const prompt = `
      You are a professional assistant for a high-end photographer/videographer named "Lumina Visuals".
      The user has provided a rough idea of what they need: "${userInput}".
      
      Please rewrite this into a polished, professional inquiry email that the user can send to me.
      Include placeholders like [Date], [Venue], or [Budget] if the user didn't provide them.
      Keep the tone excited but professional.
      Format it as a clean message body without subject lines or "Dear..." headers, just the core message.
      Keep it under 150 words.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "Could not generate a draft. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate draft.");
  }
};