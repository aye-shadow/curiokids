/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WhxdImkHbcV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"
import Logo from "./Logo"
import ViewAll from "./Buttons/ViewAll"
import Arrow from "./Buttons/Arrow"

export default function Footer() {
  return (
    <>
      
     
      <div className="h-8 " />
      <footer className="bg-muted py-12 border-t border-muted-foreground/20">
        <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Logo />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid gap-2">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                Courses
              </Link>
              <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  <TwitterIcon className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  <FacebookIcon className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  <InstagramIcon className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-7xl mt-12 border-t border-muted-foreground/20 pt-4 text-center text-sm text-muted-foreground">
          &copy; 2024 CurioKids. All rights reserved.
        </div>
      </footer>
    </>
  )
}

function ArrowRightIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function FacebookIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}





function TwitterIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}