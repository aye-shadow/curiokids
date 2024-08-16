'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import { PaperclipIcon } from 'lucide-react';
import { Button } from '../ui/button'; // Adjust the import based on your structure

interface Message {
  sender: "user" | "bot";
  text: string;
  fileUrl?: string;
}

const englishCourseOutline = [
  { section: "Introduction to English", content: "In this section, we will cover the basics of English grammar, including sentence structure and parts of speech." },
  { section: "Vocabulary Building", content: "Learn new words and phrases to expand your vocabulary. This section includes common words, idioms, and their usage." },
  { section: "Grammar Fundamentals", content: "A detailed look at English grammar rules including tenses, articles, and prepositions." },
  { section: "Reading Comprehension", content: "Improve your ability to understand and analyze written texts through various reading exercises." },
  { section: "Writing Skills", content: "Focus on developing writing skills, including essay writing, business correspondence, and creative writing." },
  { section: "Listening and Speaking", content: "Enhance your listening and speaking skills with practical exercises and dialogues." },
  { section: "Advanced Grammar", content: "Dive into more complex grammar topics such as conditionals, passive voice, and advanced sentence structures." },
  { section: "Test Preparation", content: "Prepare for English proficiency tests with practice questions and tips for success." },
  { section: "Course Review", content: "Review all the topics covered in the course and assess your learning progress." }
];

// Helper functions should be defined before use
const saveProgress = (index: number) => {
  localStorage.setItem("currentSectionIndex", index.toString());
};

const loadProgress = (): number => {
  const savedIndex = localStorage.getItem("currentSectionIndex");
  return savedIndex ? parseInt(savedIndex, 10) : 0;
};

const AI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(loadProgress());
  const [nextMessageIndex, setNextMessageIndex] = useState<number>(0);

  useEffect(() => {
    const savedSectionIndex = loadProgress();
    setCurrentSectionIndex(savedSectionIndex);
    initializeConversation();
  }, []);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === "user") {
      if (nextMessageIndex < messages.length - 1) {
        const delay = 1000; // Delay before sending the next bot message
        setTimeout(() => {
          const nextMessage = getNextBotMessage();
          if (nextMessage) {
            setMessages(prevMessages => [...prevMessages, nextMessage]);
            setNextMessageIndex(prevIndex => prevIndex + 1);
          }
        }, delay);
      }
    }
  }, [messages]);

  const initializeConversation = () => {
    const welcomeMessage: Message = {
      sender: "bot",
      text: `Hello! 🎉 Welcome to the English course. I'm here to guide you through your learning journey. Let's start with an overview of the course syllabus.`
    };

    const syllabusMessage: Message = {
      sender: "bot",
      text: `Here's a brief overview of what we'll cover:\n\n${englishCourseOutline.map((section, index) => `Section ${index + 1}: ${section.section}`).join('\n')}`
    };

    const firstLessonMessage: Message = {
      sender: "bot",
      text: `Let's dive into the first lesson: ${englishCourseOutline[currentSectionIndex].section}. ${englishCourseOutline[currentSectionIndex].content}`
    };

    setMessages([welcomeMessage, syllabusMessage, firstLessonMessage]);
    setNextMessageIndex(3); // Start revealing from the fourth message
  };

  const getNextBotMessage = (): Message | null => {
    if (nextMessageIndex >= englishCourseOutline.length) return null;

    const sectionContent = englishCourseOutline[currentSectionIndex]?.content;
    const botMessage: Message = {
      sender: "bot",
      text: `Next lesson: ${englishCourseOutline[currentSectionIndex].section}. ${sectionContent}`
    };

    return botMessage;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (input.trim() === "" && !file) return;

    const userMessage: Message = { sender: "user", text: input };
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      userMessage.fileUrl = fileUrl;
    }

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    setInput("");
    setFile(null);

    // Progress to next lesson if applicable
    if (nextMessageIndex < englishCourseOutline.length) {
      setNextMessageIndex(prevIndex => prevIndex + 1);
    }

    try {
      const botResponse = await getOpenAIResponse(input, currentSectionIndex);

      const botMessage: Message = { sender: "bot", text: botResponse };
      const updatedMessages = [...newMessages, botMessage];
      setMessages(updatedMessages);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      const errorMessage: Message = { sender: "bot", text: "Oops! Something went wrong. Let's try again!" };
      const updatedMessages = [...newMessages, errorMessage];
      setMessages(updatedMessages);
    }
  };

  const getOpenAIResponse = async (userInput: string, sectionIndex: number): Promise<string> => {
    const prompt = `Based on the English course content and the student's current progress (Section ${sectionIndex + 1}: ${englishCourseOutline[sectionIndex]?.section}), please respond to the following: ${userInput}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch OpenAI response");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

  const handleNextSection = () => {
    if (currentSectionIndex < englishCourseOutline.length - 1) {
      setCurrentSectionIndex((prevIndex) => prevIndex + 1);
      saveProgress(currentSectionIndex + 1);
      setNextMessageIndex(0); // Reset message index for the new section
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prevIndex) => prevIndex - 1);
      saveProgress(currentSectionIndex - 1);
      setNextMessageIndex(0); // Reset message index for the new section
    }
  };

  return (
    <div className="min-h-screen bg-[#E6F7E9] flex flex-col justify-between p-4 md:p-6 lg:p-8">
      <h1 className="text-center text-3xl font-bold mb-6 text-[#2C6E49] animate-pulse">
        🌟 Your Friendly AI English Teacher 🌟
      </h1>
      <div className="flex-1 overflow-y-auto p-6 bg-[#B5EAD7] rounded-lg shadow-lg space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl w-full md:w-3/4 lg:w-3/5 ${
              message.sender === "user"
                ? "bg-[#81C784] text-white self-end"
                : "bg-[#AED581] text-[#2C6E49] self-start"
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
        className="flex flex-col md:flex-row items-center mt-6 border-t border-gray-300 pt-4 space-y-4 md:space-y-0 md:space-x-4"
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
      <div className="flex justify-between mt-4">
        <Button
          type="button"
          onClick={handlePreviousSection}
          className="bg-[#66BB6A] hover:bg-[#4CAF50] text-white p-4 rounded-full"
        >
          Previous Section
        </Button>
        <Button
          type="button"
          onClick={handleNextSection}
          className="bg-[#66BB6A] hover:bg-[#4CAF50] text-white p-4 rounded-full"
        >
          Next Section
        </Button>
      </div>
      <p className="text-center mt-4 text-lg text-[#2C6E49]">
        Current Section: {englishCourseOutline[currentSectionIndex]?.section}
      </p>
      <p className="text-center mt-2 text-lg text-[#2C6E49]">
        {englishCourseOutline[currentSectionIndex]?.content}
      </p>
    </div>
  );
};

export default AI;
