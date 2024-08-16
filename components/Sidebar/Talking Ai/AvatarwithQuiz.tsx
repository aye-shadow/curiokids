'use client';

import React, { useState, useRef } from 'react';
import axios from 'axios';
import Avatar3D from './Avatar3D'; // Assume this is your 3D avatar component

const AvatarWithQuiz = () => {
  const [message, setMessage] = useState('');
  const [responseAudioUrl, setResponseAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRecording = async () => {
    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    
    mediaRecorderRef.current.ondataavailable = async (event) => {
      if (event.data.size > 0) {
        const formData = new FormData();
        formData.append('file', event.data, 'audio.mp3');
        
        try {
          const response = await axios.post('/api/speech-to-text', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          
          setMessage(response.data.transcription);
          setRecording(false);
        } catch (error) {
          console.error('Error:', error);
          setRecording(false);
        }
      }
    };
    
    mediaRecorderRef.current.start();
  };

  const stopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current?.stop();
  };

  const handleSendMessage = async () => {
    if (!message.trim()) {
      alert('Please enter a message.');
      return;
    }

    setLoading(true);
    try {
      // Send message to OpenAI Assistant API
      const aiResponse = await axios.post('/api/assistant', { message });

      const aiReply = aiResponse.data.reply;

      // Convert AI response to speech
      const speechResponse = await axios.post('/api/text-to-speech', { text: aiReply });
      setResponseAudioUrl(speechResponse.data.audioUrl);
      
      setMessage(''); // Clear the input field after sending
    } catch (error) {
      console.error('Error sending message:', error);
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
            <button
              onClick={recording ? stopRecording : startRecording}
              className="mt-4 md:mt-6 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
              disabled={loading}
            >
              {recording ? 'Stop Recording' : 'Start Recording'}
            </button>
          </div>
          {responseAudioUrl && (
            <div className="mt-8">
              <audio controls src={responseAudioUrl} ref={audioRef} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvatarWithQuiz;


