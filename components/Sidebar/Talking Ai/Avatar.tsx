import React, { useState } from 'react';

const Avatar: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);

  const handleSubmit = async () => {
    // Send the message to the OpenAI Assistant API
    const chatResponse = await fetch('/api/assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ conversationId, prompt: message }),
    });

    const chatData = await chatResponse.json();
    setResponse(chatData.response);

    // Generate a new conversationId if necessary
    if (!conversationId) {
      setConversationId(chatData.conversationId);
    }

    // Send the response to the Eleven Labs API for speech synthesis
    const speechResponse = await fetch('/api/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: chatData.response }),
    });

    const audioBlob = await speechResponse.blob();
    setAudioUrl(URL.createObjectURL(audioBlob));
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <div className="avatar mb-4">
        {/* You can replace this with an actual avatar image */}
        <img src="/avatar.png" alt="Avatar" className="w-24 h-24 rounded-full" />
      </div>
      <div className="message-input mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Ask me anything..."
        />
        <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </div>
      <div className="response">
        <p>{response}</p>
        {audioUrl && <audio src={audioUrl} controls autoPlay />}
      </div>
    </div>
  );
};

export default Avatar;
