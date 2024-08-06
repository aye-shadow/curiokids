'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
   BookIcon,
   BugIcon,
   FileTextIcon,
   BotIcon,
   BarChartIcon,
   BellIcon,
   LogOutIcon,
   SettingsIcon,
} from 'lucide-react';

// Import your components for different sections
import Logo from "../Logo"
import Home from './Home';
import Library from './Library';
import Quiz from './Quiz';
import Report from './Report';
import AI from './AI';
import Chart from './Chart';
import Updates from './Update';
import Settings from './Setting';
import { UserButton } from '@clerk/nextjs';

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [activeComponent, setActiveComponent] = useState('Home');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 flex h-full w-14 flex-col
       border-r bg-background sm:w-60">
        <div className="flex h-16 items-center justify-center">
          <Link href="#" className="flex items-center gap-2 px-4" prefetch={false}>
            <Logo />
          </Link>
        </div>
        <nav className="flex flex-1 flex-col items-start gap-2 px-2 py-4 sm:px-4">
          <Button
            onClick={() => setActiveComponent('Home')}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
              activeComponent === 'Home' ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <HomeIcon className="h-5 w-5" />
            <span className="hidden sm:block">Home</span>
          </Button>
          <Button
            onClick={() => setActiveComponent('Library')}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
              activeComponent === 'Library' ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <BookIcon className="h-5 w-5" />
            <span className="hidden sm:block">Library</span>
          </Button>
          <Button
            onClick={() => setActiveComponent('Quiz')}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
              activeComponent === 'Quiz' ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <BugIcon className="h-5 w-5" />
            <span className="hidden sm:block">Quiz</span>
          </Button>
          <Button
            onClick={() => setActiveComponent('Report')}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
              activeComponent === 'Report' ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <FileTextIcon className="h-5 w-5" />
            <span className="hidden sm:block">Report</span>
          </Button>
          <Button
            onClick={() => setActiveComponent('AI')}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
              activeComponent === 'AI' ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <BotIcon className="h-5 w-5" />
            <span className="hidden sm:block">AI</span>
          </Button>
          <Button
            onClick={() => setActiveComponent('Chart')}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
              activeComponent === 'Chart' ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <BarChartIcon className="h-5 w-5" />
            <span className="hidden sm:block">Chart</span>
          </Button>
          <Button
            onClick={() => setActiveComponent('Updates')}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
              activeComponent === 'Updates' ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <BellIcon className="h-5 w-5" />
            <span className="hidden sm:block">Updates</span>
          </Button>
        </nav>
        <div className="mt-auto flex flex-col items-start gap-2 px-2 py-4 sm:px-4">
          <Button
            onClick={() => setActiveComponent('Settings')}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
              activeComponent === 'Settings' ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <SettingsIcon className="h-5 w-5" />
            <span className="hidden sm:block">Settings</span>
          </Button>
          <UserButton />
        </div>
      </aside>
      <div className="flex flex-1 flex-col p-4">
        {activeComponent === 'Home' && <Home />}
        {activeComponent === 'Library' && <Library />}
        {activeComponent === 'Quiz' && <Quiz />}
        {activeComponent === 'Report' && <Report />}
        {activeComponent === 'AI' && <AI />}
        {activeComponent === 'Chart' && <Chart />}
        {activeComponent === 'Updates' && <Updates />}
        {activeComponent === 'Settings' && <Settings />}
      </div>
    </div>
  );
};

export default Sidebar;
