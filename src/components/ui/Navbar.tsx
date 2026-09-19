"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white dark:bg-[#0a0a0a]">
      <div className="container flex h-20 max-w-6xl mx-auto items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Anuj Shukla<span className="text-blue-600">.</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-600 dark:text-zinc-400"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] px-6 pb-6 pt-2">
          <nav className="flex flex-col space-y-4 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="transition-colors text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
