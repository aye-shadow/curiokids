'use client'
import React from 'react'
import { useState, FormEvent } from "react";
import { PaperclipIcon } from 'lucide-react'; // Assuming you're using Heroicons or a similar library
import { Button } from '../ui/button';

// Define the message type
interface Message {
  sender: "user" | "bot";
  text: string;
  fileUrl?: string;
}

const AI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (input.trim() === "" && !file) return;

    // Add the user's message to the conversation
    const userMessage: Message = { sender: "user", text: input };
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      userMessage.fileUrl = fileUrl;
    }
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Reset input and file state
    setInput("");
    setFile(null);

    // Call the API to get the bot's response
    const botResponse = await getBotResponse(input);

    // Add the bot's response to the conversation
    const botMessage: Message = { sender: "bot", text: botResponse };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  // Mock API function to get bot response
  const getBotResponse = async (userInput: string): Promise<string> => {
    const response = await fetch("/api/bot-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: userInput }),
    });

    const data = await response.json();
    return data.response;
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] flex flex-col justify-between p-4 md:p-6 lg:p-8">
      <h1 className="text-center text-2xl font-bold mb-4 text-[#44403C]">Your AI Assistant</h1>
      <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-lg w-full md:w-3/4 lg:w-3/5 ${
              message.sender === "user"
                ? "bg-[#14B8A5] text-white self-end"
                : "bg-[#EFFFE8] text-[#44403C] self-start"
            }`}
          >
            <p>{message.text}</p>
            {message.fileUrl && (
              <a
                href={message.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 block"
              >
                View uploaded file
              </a>
            )}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center mt-4 border-t border-gray-300 pt-4 space-y-4 md:space-y-0 md:space-x-4"
      >
        <label className="flex items-center space-x-2 cursor-pointer">
          <PaperclipIcon className="w-6 h-6 text-[#44403C]" />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 border-2 border-[#44403C] rounded-md"
        />
        <Button
          type="submit"
          className="bg-[#14B8A5] text-white p-3 rounded-md w-full md:w-auto"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default AI;

