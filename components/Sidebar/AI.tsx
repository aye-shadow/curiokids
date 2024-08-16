'use client';
import React, { useState, FormEvent } from 'react';
import { PaperclipIcon } from 'lucide-react';
import { Button } from '../ui/button'; // Adjust the import based on your structure

interface Message {
  sender: "user" | "bot";
  text: string;
  fileUrl?: string;
}

const AI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (input.trim() === "" && !file) return;

    const userMessage: Message = { sender: "user", text: input };
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      userMessage.fileUrl = fileUrl;
    }
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput("");
    setFile(null);

    try {
      const botResponse = await getOpenAIResponse(input);

      const botMessage: Message = { sender: "bot", text: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      const errorMessage: Message = { sender: "bot", text: "Oops! Something went wrong. Let's try again!" };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const getOpenAIResponse = async (userInput: string): Promise<string> => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: userInput }],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch OpenAI response");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

  return (
    <div className="min-h-screen bg-[#E6F7E9] flex flex-col justify-between p-4 md:p-6 lg:p-8">
      <h1 className="text-center text-3xl font-bold mb-6 text-[#2C6E49] animate-pulse">🌟 Your Friendly AI Buddy 🌟</h1>
      <div className="flex-1 overflow-y-auto p-6 bg-[#B5EAD7] rounded-lg shadow-lg space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl w-full md:w-3/4 lg:w-3/5 ${
              message.sender === "user"
                ? "bg-[#81C784] text-white self-end animate-bounce-limited"
                : "bg-[#AED581] text-[#2C6E49] self-start animate-bounce-limited"
            }`}
          >
            <p className="text-lg font-semibold">{message.text}</p>
            {message.fileUrl && (
              <a
                href={message.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E88E5] underline mt-2 block"
              >
                View your file
              </a>
            )}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center mt-6 border-t
         border-gray-300 pt-4 space-y-4 md:space-y-0 md:space-x-4"
      >
        <label className="flex items-center space-x-2 cursor-pointer">
          <PaperclipIcon className="w-8 h-8 text-[#2C6E49]" />
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
          className="flex-1 p-4 text-lg border-2 border-[#2C6E49] rounded-full bg-white"
        />
        <Button
          type="submit"
          className="bg-[#81C784] hover:bg-[#66BB6A] text-white p-4 rounded-full w-full md:w-auto transition-transform transform hover:scale-105"
        >
          🚀 Send
        </Button>
      </form>
    </div>
  );
};

export default AI;
