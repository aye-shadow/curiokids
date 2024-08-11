'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail } from 'lucide-react';

interface FormData {
  email: string;
  feedbackType: string;
  title: string;
  steps: string;
  priority: string;
}

const Report: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    feedbackType: 'Bug Report',
    title: '',
    steps: '',
    priority: 'Low',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center">
        <img
          src="/path/to/icon.png" // Replace with the correct path to your icon
          alt="icon"
          className="w-6 h-6 mr-2"
        />
        Feedback Form
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Use this form to suggest improvements and report any bugs you encounter.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Your email <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              id="email"
              type="email"
              required
              className="w-full p-2 outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="feedbackType">
            Feedback Type <span className="text-red-500">*</span>
          </label>
          <select
            id="feedbackType"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.feedbackType}
            onChange={handleChange}
          >
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>General Feedback</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title: <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="steps">
            Steps to reproduce: <span className="text-red-500">*</span>
          </label>
          <textarea
            id="steps"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Please be as detailed as possible."
            value={formData.steps}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="priority">
            Priority Level <span className="text-red-500">*</span>
          </label>
          <select
            id="priority"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </div>
        <div className="mb-4 flex items-center">
          <input id="terms" type="checkbox" required className="mr-2" />
          <label htmlFor="terms" className="text-gray-700">
            I agree to the terms and conditions/privacy policy. <span className="text-red-500">*</span>
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-[#10B981] text-white font-bold py-2 px-4 rounded-md hover:bg-[#0E9E74] transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Report;
