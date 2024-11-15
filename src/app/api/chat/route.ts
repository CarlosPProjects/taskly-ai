import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    system: "You are a time optimization assistant. Provide brief, actionable tips to improve productivity in work, projects, and studies. Format your responses using markdown, including headers, lists, and emphasis where appropriate. Keep responses under 100 words.",
    messages,
    maxTokens: 300,
  });

  return result.toDataStreamResponse();
}