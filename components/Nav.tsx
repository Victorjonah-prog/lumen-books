"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100">
      <nav className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Logo />

        <ul className="flex items-center gap-10 text-sm font-medium">
          <li>
            <Link 
              href="/" 
              className="text-zinc-600 hover:text-amber-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/books" 
              className="text-zinc-600 hover:text-amber-600 transition-colors duration-200"
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard" 
              className="text-zinc-600 hover:text-amber-600 transition-colors duration-200"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              href="/login" 
              className="text-zinc-600 hover:text-amber-600 transition-colors duration-200"
            >
              Login
            </Link>
          </li>
        </ul>

       
        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-500">
          SB
        </div>
      </nav>
    </header>
  );
}