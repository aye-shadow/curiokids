import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { text } = await request.json();

  try {
    const response = await axios.post(
      'https://api.elevenlabs.io/v1/speech-synthesis',
      {
        text,
        voice: 'en_us_male',
      },
      {
        headers: {
          'xi-api-key': process.env.ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );

    const audioBase64 = Buffer.from(response.data, 'binary').toString('base64');
    const audioDataUrl = `data:audio/mp3;base64,${audioBase64}`;

    return NextResponse.json({ audioUrl: audioDataUrl });
  } catch (error) {
    console.error('Eleven Labs API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate speech' },
      { status: 500 }
    );
  }
}
