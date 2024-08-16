"use client"

import React, { useState } from 'react';

const Quiz = ({ question, options, onAnswer }: any) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
  };

  return (
    <div className="quiz-card bg-white p-6 rounded-xl shadow-lg transform hover:rotate-2 hover:scale-105 transition-transform duration-500 ease-out perspective-1000 mt-8">
      <h3 className="text-xl font-bold mb-4">{question}</h3>
      <div className="space-y-4">
        {options.map((option: any, index: any) => (
          <label
            key={index}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="text-lg">{option}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
      >
        Submit
      </button>
    </div>
  );
};

export default Quiz;
