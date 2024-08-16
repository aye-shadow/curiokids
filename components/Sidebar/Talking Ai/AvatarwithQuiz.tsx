'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Avatar3D from './Avatar3D';

interface Quiz {
  question: string;
  options: string[];
}

const AvatarWithQuiz = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      alert('Please enter a message.');
      return;
    }

    setLoading(true);
    console.log('Sending message:', message);

    try {
      // Send message to OpenAI Assistant API
      const aiResponse = await axios.post('/api/assistant', { message });

      const aiReply = aiResponse.data.reply;
      setResponse(aiReply);

      if (aiReply.toLowerCase().includes('quiz')) {
        setQuiz({
          question: 'What is the capital of France?',
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        });
      } else {
        setQuiz(null);
      }

      // Convert AI response to speech and get the audio data URL
      const speechResponse = await axios.post('/api/elevenlabs', { text: aiReply });

      // Play the audio using the data URL
      const audio = new Audio(speechResponse.data.audioUrl);
      audio.play();

      setMessage(''); // Clear the input field after sending
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Sorry, there was an issue processing your request.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuizAnswer = (answer: string) => {
    console.log(`Selected answer: ${answer}`);
    setQuiz(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="avatar-card bg-white p-6 md:p-8 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out">
        <div className="avatar-content text-center">
          <Avatar3D />
          <div className="mt-6 md:mt-8">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full p-3 md:p-4 text-lg border-2 border-gray-300 rounded-lg shadow-inner transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 hover:shadow-lg"
              disabled={loading}
            />
            <button
              onClick={handleSendMessage}
              className="mt-4 md:mt-6 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
          <div className="mt-4 md:mt-8 text-gray-800 text-lg">
            <p>{response}</p>
          </div>
        </div>
      </div>
      {quiz && (
        <div className="quiz-card bg-white p-6 md:p-8 rounded-2xl shadow-xl mt-8 md:mt-12 transition-transform duration-300 ease-in-out">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{quiz.question}</h3>
          <div className="space-y-3 md:space-y-4">
            {quiz.options.map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 md:space-x-4 cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <input
                  type="radio"
                  value={option}
                  onChange={() => handleQuizAnswer(option)}
                  className="form-radio h-5 w-5 md:h-6 md:w-6 text-blue-600"
                />
                <span className="text-lg md:text-xl">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarWithQuiz;
