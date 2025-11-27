"use client";

import React from 'react';
import { Cpu } from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { SKILLS } from '@/data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
         <RevealOnScroll>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold"><span className="text-red-500">02.</span> Technical Skills</h2>
            <div className="h-px bg-red-900 w-full max-w-xs opacity-50"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <RevealOnScroll key={skill} delay={index * 50}>
              <div className="group p-6 bg-white/5 border border-white/5 hover:border-red-500/50 hover:bg-red-900/10 rounded-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <Cpu size={24} className="text-red-500 group-hover:text-red-400" />
                  <div className="h-2 w-2 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white">{skill}</h3>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;