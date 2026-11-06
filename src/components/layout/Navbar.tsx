import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

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

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['hero', ...navLinks.map((l) => l.href.substring(1))];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-dark-950/85 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 dark:bg-dark-900 border border-zinc-300 dark:border-zinc-700/80 group-hover:border-lime-accent/70 transition-colors shadow-sm">
              <span className="font-black text-base tracking-tighter text-zinc-900 dark:text-white font-urbanist">
                {personalInfo.initials}
                <span className="text-lime-deep dark:text-lime-accent">.</span>
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-lime-accent opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-extrabold text-sm tracking-tight text-zinc-900 dark:text-white group-hover:text-lime-deep dark:group-hover:text-lime-accent transition-colors font-urbanist">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                Engineering Student
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-zinc-100/90 dark:bg-dark-900/60 border border-zinc-200 dark:border-zinc-800/90 rounded-full px-3 py-1.5 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1 text-xs font-semibold tracking-wide transition-all rounded-full ${
                    isActive
                      ? 'text-dark-950 font-bold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-lime-accent rounded-full -z-10 shadow-glow-lime"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Area: Theme Toggle, Resume & Let's Connect */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dark / Light Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-dark-900 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 hover:border-lime-accent transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-lime-accent hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-800 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-full bg-zinc-100 dark:bg-dark-850 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700/80 hover:border-lime-accent transition-all shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>

            {/* Let's Connect CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold rounded-full bg-lime-accent text-dark-950 hover:bg-lime-glow transition-all shadow-glow-lime hover:scale-[1.02]"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-dark-900 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-lime-accent" /> : <Moon className="w-4 h-4 text-zinc-800" />}
            </button>
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-xs font-bold rounded-full bg-zinc-100 dark:bg-dark-850 text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-dark-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/98 dark:bg-dark-950/98 backdrop-blur-2xl overflow-hidden px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 px-2 py-1 text-xs text-lime-deep dark:text-lime-accent font-mono mb-2">
                <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
                <span>Status: First-Year Engineering Student</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold py-2 px-3 rounded-lg text-zinc-800 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-dark-900 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-zinc-500">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-dark-850 text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                >
                  <FileText className="w-4 h-4 text-lime-deep dark:text-lime-accent" />
                  <span>View Engineering Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-lime-accent text-dark-950 hover:bg-lime-glow shadow-glow-lime"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
