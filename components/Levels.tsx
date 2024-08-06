'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Level = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [goals, setGoals] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const goalsQuery = searchParams.get('goals');
    if (goalsQuery) {
      setGoals(goalsQuery);
    } else {
      router.push('/');
    }
  }, [searchParams, router]);

  const levels = [
    "I'm just starting",
    'I know the basics',
    'I know a lot!',
    "I'm Expert"
  ];

  const handleContinue = () => {
    router.push('/dashboard');
  };

  if (!goals) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Whats Your Level</h1>
      <p className="mb-6 text-gray-600 text-center">Choose your current level. We will suggest the best lesson for you.</p>
      <div className="space-y-4 w-full max-w-md">
        {levels.map((level) => (
          <button
            key={level}
            className={`w-full p-4 rounded-lg transition-colors duration-200 ${selectedLevel === level ? 'bg-green-500 text-white' : 'bg-green-200 text-gray-800'}`}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>
      <button
        className="mt-6 p-4 w-full max-w-md bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        onClick={handleContinue}
        disabled={!selectedLevel}
      >
        Continue
      </button>
    </div>
  );
};

export default Level;
