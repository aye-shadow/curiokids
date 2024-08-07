'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from './ui/button';
import { Smile, Book, Star, Award } from 'lucide-react'; // Import the icons from lucide-react

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
    { label: "I am just starting", icon: Smile },
    { label: 'I know the basics', icon: Book },
    { label: 'I know a lot!', icon: Star },
    { label: "I am an Expert", icon: Award },
  ];

  const handleContinue = () => {
    router.push('/dashboard');
  };

  if (!goals) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">What&apos;s Your Level</h1>
      <p className="mb-6 text-gray-600 text-center">Choose your current level. We will suggest the best lesson for you.</p>
      <div className="space-y-4 w-full max-w-md">
        {levels.map(({ label, icon: Icon }) => (
          <Button
            variant={'userFlow'}
            key={label}
            className={`flex items-center justify-center w-full h-[60px] rounded-lg transition-colors duration-200 ${selectedLevel === label ? 'bg-[#14B8A5] text-white' : 'bg-[#EFFFE8] text-gray-800'}`}
            onClick={() => setSelectedLevel(label)}
          >
            <Icon className="mr-3" />
            {label}
          </Button>
        ))}
      </div>
      <Button
       variant={'continue'}
        className="mt-6 p-4 w-full max-w-md rounded-lg border text-xl font-semibold font-mono border-b-2
          border-t-[1px] border-[#44403C] transition-colors duration-200"
        onClick={handleContinue}
        disabled={!selectedLevel}
      >
        Continue
      </Button>
    </div>
  );
};

export default Level;
