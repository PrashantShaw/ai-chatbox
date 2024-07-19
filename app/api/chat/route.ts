import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();
    const GOOGLE_AI_MODEL_ID = 'models/gemini-1.5-pro-latest'

    const result = await streamText({
        model: google(GOOGLE_AI_MODEL_ID),
        messages,
    });

    return result.toAIStreamResponse();
}