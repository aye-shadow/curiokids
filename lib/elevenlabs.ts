import axios from 'axios';

const ELEVEN_LABS_API_KEY = process.env.ELEVEN_LABS_API_KEY;
const VOICE_ID = process.env.ELEVEN_LABS_VOICE_ID;

export async function getSpeech(text: string) {
  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      { text },
      {
        headers: {
          'xi-api-key': ELEVEN_LABS_API_KEY,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error in Eleven Labs API:', error.response?.data || error.message);
    throw new Error("Failed to synthesize speech with Eleven Labs");
  }
}
