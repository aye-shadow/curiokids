'use client';

import React, { useState } from 'react';
import axios from 'axios';

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
    console.log('Sending message:', message); // Debugging log

    try {
      const aiResponse = await axios.post('/api/assistant/message', {
        message,
      });

      console.log('Response received:', aiResponse.data); // Debugging log
      const aiReply = aiResponse.data.reply;
      setResponse(aiReply);

      // Example: Mock quiz logic for demo purposes
      if (aiReply.toLowerCase().includes('quiz')) {
        setQuiz({
          question: 'What is the capital of France?',
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        });
      } else {
        setQuiz(null);
      }

      // Optionally handle conversion to speech
      await axios.post('/api/elevenlabs', { text: aiReply });

      setMessage(''); // Clear the input field after sending
    } catch (error) {
      console.error('Error sending message:', error); // Error log
      setResponse('Sorry, there was an issue processing your request.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuizAnswer = (answer: string) => {
    console.log(`Selected answer: ${answer}`);
    setQuiz(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="avatar-card bg-white p-6 rounded-xl shadow-lg transform hover:rotate-2 hover:scale-105 transition-transform duration-500 ease-out perspective-1000">
        <div className="avatar-content text-center">
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
              disabled={loading}
            />
            <button
              onClick={handleSendMessage}
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
          <div className="mt-4 text-gray-800 text-lg">
            <p>{response}</p>
          </div>
        </div>
      </div>
      {quiz && (
        <div className="quiz-card bg-white p-6 rounded-xl shadow-lg transform hover:rotate-2 hover:scale-105 transition-transform duration-500 ease-out perspective-1000 mt-8">
          <h3 className="text-xl font-bold mb-4">{quiz.question}</h3>
          <div className="space-y-4">
            {quiz.options.map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="radio"
                  value={option}
                  onChange={() => handleQuizAnswer(option)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarWithQuiz;


