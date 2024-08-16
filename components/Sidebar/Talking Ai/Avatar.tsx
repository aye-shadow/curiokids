"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Avatar3D = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    // Call OpenAI API for conversation
    const aiResponse = await axios.post('/api/openai', { message });
    setResponse(aiResponse.data.reply);

    // Call Eleven Labs API to convert AI response to speech
    await axios.post('/api/elevenlabs', { text: aiResponse.data.reply });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="avatar-card bg-white p-6 rounded-xl shadow-lg transform hover:rotate-2 hover:-rotate-1 hover:scale-105 transition-transform duration-500 ease-out perspective-1000">
        <div className="avatar-content text-center">
          {/* Avatar Image */}
          <img
            src="/avatar.png"
            alt="AI Avatar"
            className="w-24 h-24 mx-auto rounded-full shadow-2xl transform transition-transform duration-500 hover:rotate-6 hover:scale-110"
          />
          <div className="mt-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 mt-3 text-lg border rounded-lg shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
            >
              Send
            </button>
          </div>
          <div className="mt-4 text-gray-800 text-lg">
            <p>{response}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar3D;
