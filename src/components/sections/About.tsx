import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Box, MapPin, Clock, Globe2, ShieldCheck, Cpu, Code2, ShieldAlert, Lightbulb } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-zinc-50 dark:bg-dark-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-lime-deep dark:bg-lime-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-semibold">
              01 // Background & Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-urbanist">
            About Me<span className="text-lime-deep dark:text-lime-accent">.</span>
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            First-year engineering student on an authentic journey from foundational principles to intelligent, real-world solutions.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Narrative text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800">
                <Clock className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
                <span>IST (UTC+5:30)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800">
                <Globe2 className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
                <span>English & Malayalam</span>
              </div>
            </div>
          </div>

          {/* Core Focus Pillars (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-900/90 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden shadow-light-card dark:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-accent/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-lime-deep dark:text-lime-accent" />
                <span>Foundational Pillars</span>
              </h3>

              <div className="space-y-4">
                {personalInfo.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-lime-accent/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-dark-900 text-lime-deep dark:text-lime-accent shrink-0">
                        {area.icon === 'Cpu' && <Cpu className="w-4 h-4" />}
                        {area.icon === 'Code2' && <Code2 className="w-4 h-4" />}
                        {area.icon === 'ShieldAlert' && <ShieldAlert className="w-4 h-4" />}
                        {area.icon === 'Lightbulb' && <Lightbulb className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                          {area.title}
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-normal">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
