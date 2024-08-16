import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ message: 'Text is required' }, { status: 400 });
    }

    const response = await axios.post(
      'https://api.elevenlabs.io/v1/text-to-speech',
      {
        text,
        voice: 'your-selected-voice-id', // Replace with your desired voice ID
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': process.env.ELEVENLABS_API_KEY,
        },
      }
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error communicating with Eleven Labs:', error);
    return NextResponse.json({ message: 'Error communicating with Eleven Labs' }, { status: 500 });
  }
}
