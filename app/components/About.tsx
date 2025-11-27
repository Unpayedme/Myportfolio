"use client";

import React from 'react';
import { User } from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-black/30">
            <div className="max-w-6xl mx-auto">
                <RevealOnScroll>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-red-900 flex-1 opacity-50"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center"><span className="text-red-500">01.</span> About Me</h2>
                        <div className="h-px bg-red-900 flex-1 opacity-50"></div>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll delay={100}>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                Hello! My name is John Vincent Sefuesca, and I enjoy creating things that live on the internet. My interest in web development started back in 2023 when I tried editing custom Tumblr themes, and hacking together HTML & CSS felt exciting.
                            </p>
                            <p>
                                Fast-forward to today, I am a freshman still learning and improving my skills. I work on personal projects and school work to build my foundation in web development.
                            </p>
                            <p>
                                My main focus these days is learning how to build accessible and inclusive digital products while growing my knowledge in modern web technologies.
                            </p>


                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <div className="relative group mx-auto md:mx-0 max-w-sm">
                            <div className="absolute inset-0 border-2 border-red-500 rounded translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                            <div className="relative bg-gray-900 rounded overflow-hidden aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="absolute inset-0 bg-red-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                    <img src="myimage.jpg" alt="my avatar" />
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default About;