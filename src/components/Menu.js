'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[var(--main-bg)]/90 backdrop-blur-md border-b border-neutral-200/40 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Farmik.svg"
            alt="Farmik Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-[var(--text-primary)] font-medium">
          <Link href="/" className="hover:text-[var(--button-primary)] transition">Home</Link>
          <Link href="/about" className="hover:text-[var(--button-primary)] transition">About</Link>
          
          <Link href="/product" className="hover:text-[var(--button-primary)] transition">Products</Link>
          <Link href="/contact" className="hover:text-[var(--button-primary)] transition">Contact</Link>
        </nav>

        {/* Active Shop Button */}
        <div className="hidden md:block">
          <button
            onClick={() => window.open('https://www.amazon.in/stores/Farmik/page/EDF35CDD-E696-4629-B466-5D5FCA5A9914?lp_asin=B0GD16XQSC&ref_=ast_bln', '_blank')}
            className="bg-[var(--button-primary)] hover:bg-[var(--button-hover)] text-[var(--button-text)] px-8 py-2 rounded-full font-semibold transition-all duration-250 cursor-pointer shadow-sm hover:shadow"
          >
            Shop
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden mt-0 space-y-4 text-[var(--text-primary)] font-semibold bg-[var(--main-bg)]/95 backdrop-blur-md p-6 shadow-xl border-b border-neutral-200/50 animate-fade-in">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-[var(--button-primary)]">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-[var(--button-primary)]">About</Link>
          
          <Link href="/product" onClick={() => setIsOpen(false)} className="block hover:text-[var(--button-primary)]">Products</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[var(--button-primary)]">Contact</Link>

          {/* Active Shop Button */}
          <button
            onClick={() => {
              setIsOpen(false);
              window.open('https://www.amazon.in/stores/Farmik/page/EDF35CDD-E696-4629-B466-5D5FCA5A9914?lp_asin=B0GD16XQSC&ref_=ast_bln', '_blank');
            }}
            className="w-full mt-2 bg-[var(--button-primary)] hover:bg-[var(--button-hover)] text-white px-6 py-2 rounded-full font-semibold transition-all duration-250 cursor-pointer shadow-sm"
          >
            Shop
          </button>
        </div>
      )}
    </header>
  );
}
