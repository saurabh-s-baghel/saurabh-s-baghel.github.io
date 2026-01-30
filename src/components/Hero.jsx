import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-900/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-red-800/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="inline-block">
            <p className="text-red-500 font-semibold text-lg mb-2">Hello, I'm</p>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
            {personalInfo.name}
          </h1>

          {/* Role & University */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
              {personalInfo.role}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              {personalInfo.university}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-6 text-lg"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Resume"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
