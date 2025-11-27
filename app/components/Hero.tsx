"use client";

import React from 'react';
import { User, Linkedin, Github, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { TypingEffect } from './ui/TypingEffect';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Avatar */}
        <div className="md:w-1/2 flex justify-center order-1 md:order-1 relative">
           <div className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full scale-110"></div>
           <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-red-500/30 p-2 shadow-[0_0_50px_rgba(220,38,38,0.2)] animate-pulse hover:animate-none hover:border-red-500 transition-colors duration-500">
             <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-red-900/40"></div>
                <div className="absolute inset-0 flex items-center justify-center text-red-500/20 group-hover:text-red-500/40 transition-colors">
                  <img src="myimage.jpg" alt="my avatar" />
                </div>
             </div>
           </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-2">
           <RevealOnScroll>
               <p className="text-xl text-red-500 font-semibold mb-2">
                 <TypingEffect text="Hi, I'm John Vincent Sefuesca" />
               </p>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                       FULLSTACK <br /> DEVELOPER
                   </span>
               </h1>
           </RevealOnScroll>
           <RevealOnScroll delay={200}>
               <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                   Transforming ideas into digital reality. I specialize in building robust web applications with modern technologies and clean, efficient code.
               </p>
           </RevealOnScroll>
           {/* ... Buttons and Social Links ... */}
           {/* (You can copy the rest of the Hero jsx here) */}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
         <ChevronDown size={32} />
      </div>
    </section>
  );
}