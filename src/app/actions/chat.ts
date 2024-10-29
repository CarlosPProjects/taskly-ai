"use server";

import OpenAI from "openai";
const openai = new OpenAI();
export const generatePrompt = async () => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "Write a haiku about programming."
          }
        ]
      }
    ]
  });
  return response.choices[0].message;
};