import { createChatBotMessage } from 'react-chatbot-kit';

type ChatbotConfig = {
  initialMessages: any[];
  [key: string]: any; // To allow any additional configuration properties
};

const config: ChatbotConfig = {
  initialMessages: [createChatBotMessage('Hello world',{})],
};

export default config;
