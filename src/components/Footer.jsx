import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
          <h3 className="text-white font-bold text-xl mb-4 tracking-wide"> SSB<span className="text-amber-400">.</span></h3>
            <p className="text-gray-400 text-sm">
              Computer Science Student at University of Alberta, passionate about building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-amber-500/10 hover:ring-1 hover:ring-amber-400 transition-all group"
                aria-label="GitHub"
              >
                <Github className="text-gray-400 group-hover:text-white transition-colors" size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-amber-500/10 hover:ring-1 hover:ring-amber-400 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-gray-400 group-hover:text-white transition-colors" size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-amber-500/10 hover:ring-1 hover:ring-amber-400 transition-all group"
                aria-label="Email"
              >
                <Mail className="text-gray-400 group-hover:text-white transition-colors" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-900 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} {personalInfo.name}. Made with
            <Heart className="text-amber-400" size={16} fill="currentColor" />
            by a passionate developer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
