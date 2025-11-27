"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="md:hidden py-8 text-center text-gray-500 text-sm">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-red-500"><Github size={20} /></a>
        <a href="#" className="hover:text-red-500"><Linkedin size={20} /></a>
        <a href="#" className="hover:text-red-500"><Mail size={20} /></a>
      </div>
      <p>Designed & Built by Alex</p>
    </footer>
  );
};

export default Footer;