"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import useIsMobile from "@/hooks/use-mobile";

export default function AppHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  return (
    <header className="border-b border-border">
      {!isMobile ? (
        // Desktop Header
        <div className="hidden md:flex container mx-auto px-4 py-6 items-center justify-between">
          <h1 className="text-3xl font-serif font-bold">StyleMe</h1>
          <nav className="flex items-center gap-6 *:not-last:hover:text-primary *:not-last:transition-colors">
            <Link href="#how-it-works" className="">
              How It Works
            </Link>
            <Link href="/login" className="">
              Login
            </Link>
            <Button asChild>
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </nav>
        </div>
      ) : (
        // Mobile Header
        <div className="relative">
          <div className="flex items-center justify-between w-full px-4 py-6">
            <h1 className="text-3xl font-serif font-bold">StyleMe</h1>
            {!isMobileOpen ? (
              <Menu onClick={() => setIsMobileOpen(true)} />
            ) : (
              <X onClick={() => setIsMobileOpen(false)} />
            )}
          </div>
          {isMobileOpen && (
            <div
              className="absolute z-50 w-full bg-black/40 h-screen overflow-y-hidden shadow-md"
              onClick={(e) => {
                if (
                  e.target !== mobileNavRef.current &&
                  !mobileNavRef.current?.contains(e.target as Node)
                ) {
                  setIsMobileOpen(false);
                }
              }}
            >
              <nav
                ref={mobileNavRef}
                className="bg-background w-full max-h-fit flex flex-col pt-8 pb-12 items-center gap-6 *:not-last:hover:text-primary *:not-last:transition-colors"
              >
                <Link href="#how-it-works">How It Works</Link>
                <Link href="/login">Login</Link>
                <Button asChild>
                  <Link href="/signup">Sign Up Free</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
