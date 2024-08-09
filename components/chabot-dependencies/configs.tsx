import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'CurioBot';

// Define a type based on the structure of the messages you are creating
interface ChatBotMessage {
  loading: boolean;
  widget?: string;
  delay?: number;
  payload?: any;
  message: string;
  type: string;
  id: number;
}

interface CustomStyles {
  botMessageBox: {
    backgroundColor: string;
    borderRadius?: string;
    boxShadow?: string;
  };
  chatButton: {
    backgroundColor: string;
    borderRadius?: string;
    color?: string;
  };
}

interface Config {
  initialMessages: ChatBotMessage[];
  botName: string;
  customStyles: CustomStyles;
}

const config: Config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`,{})],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#14B8A5',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    chatButton: {
      backgroundColor: '#14B8A5',
      borderRadius: '5px',
      color: '#fff',
    },
  },
};

export default config;
