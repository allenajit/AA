import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Terminal, Shield, Cpu, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { InteractiveGeometricHero } from '../common/InteractiveGeometricHero';

interface HeroProps {
  onOpenResume: () => void;
}

const interests = [
  "Engineering Innovation",
  "Software Development",
  "Artificial Intelligence",
  "Cybersecurity & Anti-Fraud",
  "Voice Biometrics (SIH 2026)"
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInterestIndex((prev) => (prev + 1) % interests.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-light dark:bg-grid-dark transition-colors duration-300"
    >
      {/* 3D Geometric Interactive Canvas Layer */}
      <InteractiveGeometricHero />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-lime-accent/10 dark:bg-lime-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-zinc-400/10 dark:bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Top Badges: Status & Focus */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-dark-900 border border-zinc-300 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
            <span className="text-lime-deep dark:text-lime-accent font-semibold">{personalInfo.academicStage}</span>
            <span className="text-zinc-400 dark:text-zinc-600">•</span>
            <span>{personalInfo.location}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100/80 dark:bg-dark-900/60 border border-zinc-300 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
            <span>SIH 2026 Candidate • VoiceTrust PS 26104</span>
          </div>
        </motion.div>

        {/* Name — Massive Typography-Based Focal Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-lime-deep dark:text-lime-accent font-bold mb-2">
            Engineering Undergrad & Technology Explorer
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-zinc-950 dark:text-white font-urbanist leading-[0.98] uppercase">
            {personalInfo.name}
            <span className="text-lime-deep dark:text-lime-accent">.</span>
          </h1>
        </motion.div>

        {/* Animated Headline & Dynamic Interest Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mb-5"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-850 dark:text-zinc-100 tracking-tight leading-snug">
            {personalInfo.headline}
          </h2>

          <div className="flex items-center gap-2 mt-3 text-base sm:text-lg font-mono text-zinc-600 dark:text-zinc-400 h-8">
            <span className="text-lime-deep dark:text-lime-accent">→</span>
            <span>Focus:</span>
            <div className="relative overflow-hidden inline-block h-7">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentInterestIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block text-zinc-900 dark:text-white font-bold font-urbanist"
                >
                  {interests[currentInterestIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Concise Authentic Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mb-10"
        >
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
            {personalInfo.tagline}
          </p>
        </motion.div>

        {/* Prominent Action Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-14"
        >
          {/* Explore My Work CTA */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-lime-accent text-dark-950 hover:bg-lime-glow transition-all shadow-glow-lime hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          {/* About Me CTA */}
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-zinc-100 dark:bg-dark-900 hover:bg-zinc-200 dark:hover:bg-dark-850 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-800 hover:border-lime-accent transition-all shadow-sm"
          >
            <span>About Me</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Let's Connect CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-zinc-100 dark:bg-dark-900 hover:bg-zinc-200 dark:hover:bg-dark-850 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-800 hover:border-lime-accent transition-all shadow-sm"
          >
            <span>Let's Connect</span>
          </a>

          {/* Social Links & Resume Button */}
          <div className="flex items-center gap-2 ml-auto sm:ml-0 pt-2 sm:pt-0">
            {personalInfo.socialLinks.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${s.platform} (${s.username}) — Editable Placeholder`}
                className="p-3 rounded-full bg-zinc-100 dark:bg-dark-900 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-lime-accent transition-all"
                aria-label={s.platform}
              >
                {s.platform === 'GitHub' && <Github className="w-4 h-4" />}
                {s.platform === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                {s.platform === 'Email' && <Mail className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-900"
        >
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white font-urbanist tracking-tight">
                {stat.value}
                <span className="text-lime-deep dark:text-lime-accent">{stat.suffix}</span>
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">
                {stat.description}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
