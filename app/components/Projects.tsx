"use client";

import React, { useState } from 'react';
import { Code, Github, ExternalLink, GraduationCap } from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { PROJECTS, SCHOOL_PROJECTS } from '@/data/portfolio';

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section id="projects" className="py-24 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        
        {/* ===========================
            FEATURED PROJECTS SECTION 
           =========================== */}
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-16 justify-end">
            <div className="h-px bg-red-900 w-full max-w-xs opacity-50"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-right">
              <span className="text-red-500">03.</span> Featured Projects
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS.slice(0, showAllProjects ? PROJECTS.length : 3).map((project, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group relative bg-gray-900 border border-gray-800 hover:border-red-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)] hover:-translate-y-2 h-full flex flex-col">
                
                {/* Abstract UI Thumbnail */}
                <div className="h-48 overflow-hidden relative bg-gray-800/50">
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/50 z-10"></div>
                   
                   {/* Mock Window */}
                   <div className="absolute bottom-0 left-6 right-6 top-8 bg-gray-900 rounded-t-lg border-t border-l border-r border-gray-700 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 z-20">
                      <div className="h-6 border-b border-gray-800 bg-gray-800/50 flex items-center px-3 gap-1.5">
                         <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                         <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                         <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="p-4 flex items-center justify-center h-full text-gray-700">
                         <Code size={40} className="group-hover:text-red-500 transition-colors duration-300" />
                      </div>
                   </div>

                   {/* Glow Effect */}
                   <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-gray-900/50 backdrop-blur-sm z-30 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">{project.title}</h3>
                    <div className="flex gap-4">
                      <a href={project.link} className="text-gray-400 hover:text-red-400 transition-colors"><Github size={20} /></a>
                      <a href={project.link} className="text-gray-400 hover:text-red-400 transition-colors"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-red-400 bg-red-900/10 px-3 py-1 rounded-full border border-red-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-20">
          <RevealOnScroll>
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded font-medium transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.2)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
            >
              {showAllProjects ? 'Show Less' : 'View All Projects'}
            </button>
          </RevealOnScroll>
        </div>

        {/* ===========================
            SCHOOL PROJECTS SECTION 
           =========================== */}
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <span className="text-red-500"><GraduationCap size={32} /></span> School Projects
            </h3>
            <div className="h-px bg-red-900 w-full max-w-xs opacity-50"></div>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {SCHOOL_PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group relative bg-gray-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 hover:bg-gray-900/60 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">{project.title}</h3>
                    <a href={project.link} className="text-gray-400 hover:text-red-400 transition-colors"><Github size={20} /></a>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-gray-400 border border-gray-700 px-3 py-1 rounded-full group-hover:border-red-500/30 group-hover:text-red-400 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}