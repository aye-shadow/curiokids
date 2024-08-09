'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pencil, BookOpen, Volume2, Mic, Moon } from 'lucide-react';
import { Button } from './ui/button'; // Import the Button component from shadcn-ui

const ChooseGoals = () => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const router = useRouter();

  const goals = [
    { label: 'Learn from Scratch', icon: Pencil },
    { label: 'Practice my speaking', icon: Mic },
    { label: 'English Expertise', icon: BookOpen },
    { label: 'Improve my accent', icon: Volume2 },
    { label: 'Sleep Learning', icon: Moon },
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Choose your goals</h1>
      <p className="mb-6 text-gray-600 text-center">What are your mind goals? We will help you achieve them!</p>
      <div className="space-y-4 w-full max-w-md">
        {goals.map(({ label, icon: Icon }) => (
          <Button 
          variant={'userFlow'}
            key={label}
            className={`flex items-center justify-center w-full  text-center text-[#44403C]
               p-4 rounded-lg transition-colors duration-200 h-[60px] text-lg font-bold
              ${selectedGoals.includes(label) ? 'bg-[#14B8A5] text-white' : 'bg-[#ebffe2] text-gray-800'}`}
            onClick={() => toggleGoal(label)}
          >
            <Icon className="mr-3" />
            {label}
          </Button>
        ))}
      </div>
      <Button
      variant={'continue'}
        className="mt-6 p-4 w-full max-w-md rounded-lg border text-2xl font-semibold font-mono
         border-b-[2px] bg-white
          border-t-[1.5px]  border-[#44403C] transition-colors duration-200"
        onClick={handleContinue}
        disabled={!goals}

      >
        Continue
      </Button>
    </div>
  );
};

export default ChooseGoals;
