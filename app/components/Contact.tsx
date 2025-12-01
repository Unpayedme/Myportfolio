"use client";

import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 min-h-[80vh] flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center w-full">
         <RevealOnScroll>
          <h2 className="text-red-500 font-mono text-lg mb-4">04. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h3>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
           <a 
             href="mailto:jv.sefuesca@gmail.com" 
             className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-bold rounded hover:bg-red-600 hover:text-white transition-all duration-300"
           >
             <Mail size={22} />
             Say Hello
           </a>
        </RevealOnScroll>
      </div>

      <div className="absolute bottom-10 w-full px-6 flex justify-between items-center text-gray-500 text-sm">
         <div className="hidden md:flex flex-col gap-6 fixed left-10 bottom-0 z-10 after:content-[''] after:w-px after:h-24 after:bg-gray-500 after:mx-auto">
            <a href="https://github.com/unpayedme" className="hover:text-red-500 hover:-translate-y-1 transition-all" target='_blank'><Github size={20} /></a>
            <a href="#" className="hover:text-red-500 hover:-translate-y-1 transition-all"><Linkedin size={20} /></a>
         </div>
         <div className="hidden md:flex flex-col gap-6 fixed right-10 bottom-0 z-10 after:content-[''] after:w-px after:h-24 after:bg-gray-500 after:mx-auto">
            <a href="mailto:jv.sefuesca@gmail.com" className="hover:text-red-500 hover:-translate-y-1 transition-all vertical-writing-rl font-mono tracking-widest text-xs py-4"
            >
              jv.sefuesca@gmail.com
            </a>
         </div>
      </div>
    </section>
  );
};

export default Contact;