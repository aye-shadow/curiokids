import { NextRequest, NextResponse } from 'next/server';
import { getSpeech } from '@/lib/elevenlabs';

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const audioData = await getSpeech(text);
    
    return new NextResponse(audioData, {
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
  } catch (error) {
    console.error('Error in speech synthesis API:', error);
    return NextResponse.json({ error: 'Failed to synthesize speech' }, { status: 500 });
  }
}
