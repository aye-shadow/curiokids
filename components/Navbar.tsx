import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Login from "@/components/Buttons/Login";

const Navbar = () => {
  const { userId } = auth();

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Logo />
      </Link>
      <nav className="hidden lg:flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        {!userId ? (
          <Login />
        ) : (
          <div className="flex items-center">
            <UserButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
