import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-dark-950 py-16 px-4 sm:px-6 lg:px-8 text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-zinc-200 dark:border-zinc-900">
          {/* Identity & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-dark-900 border border-zinc-300 dark:border-zinc-800 flex items-center justify-center font-urbanist font-black text-sm text-zinc-900 dark:text-white shadow-sm">
                {personalInfo.initials}
                <span className="text-lime-deep dark:text-lime-accent">.</span>
              </div>
              <div>
                <span className="text-lg font-black text-zinc-950 dark:text-white font-urbanist block">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {personalInfo.role}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              {personalInfo.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
              <span>{personalInfo.availability.text}</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-4">
              Section Directory
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-lime-deep dark:hover:text-lime-accent transition-colors py-1 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Top Action (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-2.5">
              {personalInfo.socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-lime-accent transition-all"
                  aria-label={s.platform}
                >
                  {s.platform === 'GitHub' && <Github className="w-4 h-4" />}
                  {s.platform === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                  {s.platform === 'Email' && <Mail className="w-4 h-4" />}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full text-center px-4 py-2 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-dark-850 hover:bg-zinc-200 dark:hover:bg-dark-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200 transition-colors"
              >
                Inspect Curriculum Vitae
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Built with Vite, React, TypeScript, and Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">
              Dark Luxury Design System • Urbanist
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-dark-900 hover:bg-zinc-200 dark:hover:bg-dark-800 text-zinc-800 dark:text-zinc-300 transition-colors border border-zinc-200 dark:border-zinc-800"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
