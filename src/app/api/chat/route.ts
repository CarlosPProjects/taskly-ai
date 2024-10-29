import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system: "You are a time optimization assistant. Provide brief, actionable tips to improve productivity in work, projects, and studies. Keep responses under 50 words.",
    messages,
    temperature: 0.7,
    maxTokens: 200,
  });

  return result.toDataStreamResponse();
}