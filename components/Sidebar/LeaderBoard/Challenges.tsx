import React from 'react';

const Challenges = () => {
  // Mock data
  const challenges = [
    { title: 'Grammar Challenge', participants: 150 },
    { title: 'Paragraph Keywords', participants: 120 },
    { title: 'Keywords Matching', participants: 90 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border-x-[1.5px] border-b-[3px] border-t-[1px]">
      <h2 className="text-xl font-bold  mb-4">Challenges</h2>
      <ul>
        {challenges.map((challenge, index) => (
          <li key={index} className="flex justify-between p-2 rounded-lg hover:bg-highlight">
            <span>{challenge.title}</span>
            <span>{challenge.participants} participants</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;
