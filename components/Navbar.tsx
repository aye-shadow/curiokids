import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { House } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { userId } = auth();
  return (
    <div className="bg-red-500 rounded-b-xl">
      <div className="flex justify-between py-4 px-6">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-x-14">
          <Link className="flex items-center" href="/">
            <House className="mr-2" /> Home
          </Link>

          <Link href="/client">
            Learn
          </Link>

          <Link href="/about">
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}


            


       {/* { <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right"> 
            <div className="flex flex-col gap-4 p-6">
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <House className="h-6 w-6" />
                Home
              </Link>
              <Link href="/client" className="flex w-full items-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                Learn
              </Link>
              <Link href="/about" className="flex w-full items-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                About
              </Link>
              {!userId ? (
                <>
                  <Link href="/sign-in" className="flex w-full items-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                    Login
                  </Link>
                  <Link href="/sign-up" className="flex w-full items-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/profile" className="flex w-full items-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                    Profile
                  </Link>
                  <div className="flex items-center">
                    <UserButton />
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>*/}


        {/* Desktop User Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {!userId ? (
            <>
              <Link href="/sign-in">
                Login
              </Link>
              <Link href="/sign-up">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                Profile
              </Link>
              <div className="flex items-center">
                <UserButton />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

function MenuIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export default Navbar;
