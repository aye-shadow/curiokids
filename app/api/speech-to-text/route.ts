// app/api/speech-to-text/route.ts
import { NextResponse } from 'next/server';
import FormData from 'form-data';
import axios from 'axios';

export async function POST(request: Request) {
  const formData = new FormData();
  const reader = request.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      reader.read().then(function processText({ done, value }) {
        if (done) {
          controller.close();
          return;
        }
        controller.enqueue(value);
        reader.read().then(processText);
      });
    }
  });

  formData.append('file', stream, 'audio.mp3');
  formData.append('model', 'whisper-1'); // Adjust according to the correct model if needed

  try {
    const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        ...formData.getHeaders(),
      },
    });

    const transcription = response.data.text;
    return NextResponse.json({ transcription });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to transcribe speech' }, { status: 500 });
  }
}
