import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Curio Kids",
  description: "Personalised English Learning Platform",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( 
    <div>
      <Navbar />
        {children}
    
    </div>
  )
}

