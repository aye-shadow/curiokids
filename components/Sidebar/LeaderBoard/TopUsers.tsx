import React from 'react';

const TopUsers = () => {
  // Mock data
  const users = [
    { name: 'Alice', score: 1200 },
    { name: 'Bob', score: 1100 },
    { name: 'Charlie', score: 1050 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border-x-[1.5px] border-b-[3px] border-t-[1px]">
      <h2 className="text-xl font-bold  mb-4">Top Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="flex justify-between p-2 rounded-lg hover:bg-highlight">
            <span>{user.name}</span>
            <span>{user.score} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
