// app/api/text-to-speech/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { text } = await request.json();

  try {
    const response = await axios.post('https://api.openai.com/v1/audio/generate', { text }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const audioUrl = response.data.audioUrl;
    return NextResponse.json({ audioUrl });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to convert text to speech' }, { status: 500 });
  }
}
