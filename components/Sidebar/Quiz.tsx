'use client'
import { useState, useEffect, useCallback } from 'react';
import quizData from '../../public/quizData.json';
import { Button } from '../ui/button';

interface Question {
  type: 'mcq' | 'fitb';
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [quizCanceled, setQuizCanceled] = useState(false);

  const requestFullscreen = useCallback(() => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if ((document.documentElement as any).webkitRequestFullscreen) {
      (document.documentElement as any).webkitRequestFullscreen();
    } else if ((document.documentElement as any).msRequestFullscreen) {
      (document.documentElement as any).msRequestFullscreen();
    }
  }, []);

  const startQuiz = () => {
    // Reset the state variables
    setCurrentQuestionIndex(0);
    setAnswers({});
    setQuizStarted(true);
    setQuizCanceled(false);

    // Enter fullscreen mode
    requestFullscreen();
  };

  const handleAnswer = (questionIndex: number, answer: string) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleNextQuestion = () => {
    if (answers[currentQuestionIndex]) {
      if (currentQuestionIndex < quizData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        finishQuiz();
      }
    } else {
      alert('Please select an option before proceeding to the next question.');
    }
  };

  const finishQuiz = () => {
    // Exit fullscreen mode
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
    setQuizStarted(false);
    alert('Check the notification box for the quiz answer.');
  };

  const cancelQuiz = () => {
    // Exit fullscreen mode
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
    setQuizStarted(false);
    setQuizCanceled(true);
  };

  const handleFullscreenChange = useCallback(() => {
    if (quizStarted && !document.fullscreenElement) {
      // If quiz is started and fullscreen is exited, cancel the quiz
      cancelQuiz();
    }
  }, [quizStarted]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className="container mx-auto p-4">
      {!quizStarted ? (
        <div className="text-center">
          <h1 className="scroll-m-20 text-5xl font-semibold tracking-tight">Your Monthly Quiz</h1>
          <p className="text-xl mt-5">Welcome to the quiz. Press the button below to start.</p>
          <Button
          
            onClick={startQuiz}
            className="p-4 mt-4 rounded bg-[#14B8A5] border border-black border-x-[1.5px] border-b-[3px] border-t-[1px] "
          >
            Start Your Quiz
          </Button>
          {quizCanceled && (
            <div className="text-red-500 mt-4">
              Your quiz has been canceled because you exited fullscreen mode.
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Question {currentQuestionIndex + 1}</h2>
          <p  className="text-xl text-muted-foreground">{currentQuestion.question}</p>
          <div className="mt-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestionIndex, option)}
                className={`text-[#2e2e2e] border border-[#44403C] border-x-[1.5px] border-b-[5px] border-t-[1px] p-2 w-full mt-2 ${
                  answers[currentQuestionIndex] === option ? 'bg-[#14B8A5]  text-white-white ' : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className="bg-green-500 text-white p-4 mt-4 rounded order border-[#44403C] border-x-[1.5px] border-b-[5px] border-t-[2px]"
            disabled={!answers[currentQuestionIndex]}
          >
            {currentQuestionIndex < quizData.questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;