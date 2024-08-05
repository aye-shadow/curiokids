'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ChooseGoals = () => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const router = useRouter();

  const goals = [
    'Learn from Scratch',
    'Practice my speaking',
    'English Expertise',
    'Improve my accent',
    'Sleep Learning'
  ];

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleContinue = () => {
    const goalsQuery = selectedGoals.join(',');
    router.push(`/level?goals=${encodeURIComponent(goalsQuery)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Choose your goals</h1>
      <p className="mb-6 text-gray-600 text-center">What are your mind goals? We will help you achieve them!</p>
      <div className="space-y-4 w-full max-w-md">
        {goals.map((goal) => (
          <button
            key={goal}
            className={`w-full p-4 rounded-lg transition-colors duration-200 ${selectedGoals.includes(goal) ? 'bg-green-500 text-white' : 'bg-green-200 text-gray-800'}`}
            onClick={() => toggleGoal(goal)}
          >
            {goal}
          </button>
        ))}
      </div>
      <button
        className="mt-6 p-4 w-full max-w-md bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default ChooseGoals;
