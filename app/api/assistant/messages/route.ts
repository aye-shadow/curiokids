import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;
      const assistantId = process.env.ASSISTANT_ID;

      const response = await axios.post(
        `https://api.openai.com/v1/assistants/${assistantId}/messages`,
        {
          content: message,
          role: 'user',
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      res.status(200).json({ reply: response.data.reply });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Error sending message' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
