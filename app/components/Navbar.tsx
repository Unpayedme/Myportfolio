"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/portfolio';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-red-900/30 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:text-red-500 transition-colors">
          SEFUESCA<span className="text-red-500">.</span>DEV
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-5 py-2 text-sm font-medium border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-full">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-red-900/50 p-6 flex flex-col space-y-4 backdrop-blur-xl animate-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}