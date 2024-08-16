import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as Blob;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', file, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    const transcription = response.data.text;
    return NextResponse.json({ transcription });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to transcribe speech' }, { status: 500 });
  }
}

