import { NextRequest, NextResponse } from 'next/server';
import openai from '@/lib/openai';

export async function POST(req: NextRequest) {
  const { conversationId, prompt } = await req.json();

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      user: conversationId, // To maintain conversation context
    });

    return NextResponse.json({ response: response.choices[0].message?.content });
  } catch (error) {
    return NextResponse.json({ error: "Failed to get response from OpenAI Assistant" }, { status: 500 });
  }
}

