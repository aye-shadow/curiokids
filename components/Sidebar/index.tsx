'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  BookIcon,
  BugIcon,
  FileTextIcon,
  BotIcon,
  BarChartIcon,
  BellIcon,
  SettingsIcon,
} from 'lucide-react';

import Logo from "../Logo";
import Home from './Home';
import Library from './Library';
import Quiz from './Quiz';
import Report from './Report';
import AI from './AI';
import Updates from './Update';
import Settings from './Setting';
import { UserButton } from '@clerk/nextjs';
import LeaderBoard from './LeaderBoard';

const Sidebar = ({ isQuizActive, cancelQuiz }: any) => {
  const [activeComponent, setActiveComponent] = useState('Home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <Home />;
      case 'Library':
        return <Library />;
      case 'Quiz':
        return <Quiz />;
      case 'Report':
        return <Report />;
      case 'AI':
        return <AI />;
      case 'Leader Board':
        return <LeaderBoard />;
      case 'Updates':
        return <Updates />;
      case 'Settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  const handleNavigationClick = (name: string) => {
    if (isQuizActive) {
      cancelQuiz();
      alert("Your quiz has been canceled because you tried to navigate away.");
    } else {
      setActiveComponent(name);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#FAFAF9]">
      <aside className="fixed inset-y-0 left-0 z-10 
        flex h-full w-16 flex-col border-r 
        text-[#44403C] sm:w-64 transition-all bg-[#EFFFE8]">
        <div className="flex h-16 items-center justify-center sm:justify-start sm:px-4">
          <Link href="#" className="flex items-center gap-2 px-4" prefetch={false}>
            <Logo />
          </Link>
        </div>
        <nav className="flex flex-1 flex-col items-start gap-2 sm:gap-3 px-2 py-4 sm:px-4 text-base 
        font-semibold">
          {[
            { name: 'Home', icon: <HomeIcon className="h-6 w-6" /> },
            { name: 'Leader Board', icon: <BarChartIcon className="h-6 w-6" /> },
            { name: 'Quiz', icon: <BugIcon className="h-6 w-6" /> },
            { name: 'Library', icon: <BookIcon className="h-6 w-6" /> },
            { name: 'AI', icon: <BotIcon className="h-6 w-6" /> },
            { name: 'Report', icon: <FileTextIcon className="h-6 w-6" /> },
            { name: 'Notifications', icon: <BellIcon className="h-6 w-6" /> }
          ].map(({ name, icon }) => (
            <Button
              key={name}
              onClick={() => handleNavigationClick(name)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm border-[#44403C] border-x-[1.5px] border-b-[3px] border-t-[1px]
                transition-colors bg-[#FAFAF9] text-[#2e2e2e] hover:bg-[#14B8A5] hover:text-white ${
                activeComponent === name ? "bg-[#14B8A5] text-[#FAFAF9] shadow-lg" : ""
              } ${isQuizActive ? 'cursor-not-allowed' : ''}`}
              disabled={isQuizActive}
            >
              {icon}
              <span className="hidden sm:block">{name}</span>
            </Button>
          ))}
        </nav>
        <div className="mt-auto flex flex-col items-start gap-2 sm:gap-3 px-2 py-4 sm:px-4">
          <Button
            onClick={() => handleNavigationClick('Settings')}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm border-[#44403C] border-x-[1.5px] border-b-[4px] border-t-[1px]
              transition-colors bg-white text-[#2e2e2e] hover:bg-[#14B8A5] hover:text-white ${
              activeComponent === 'Settings' ? "bg-[#14B8A5] text-white shadow-lg" : ""
            } ${isQuizActive ? 'cursor-not-allowed' : ''}`}
            disabled={isQuizActive}
          >
            <SettingsIcon className="h-6 w-6" />
            <span className="hidden sm:block">Settings</span>
          </Button>
          <UserButton showName userProfileMode='modal' />
        </div>
      </aside>

      <main className={`ml-16 sm:ml-64 p-4 flex-grow ${isQuizActive ? '' : 'max-w-screen-xl mx-auto'}`}>
        <div className="max-w-screen-xl mx-auto">
          {renderComponent()}
        </div>
      </main>
    </div>
  );
};

export default Sidebar;

