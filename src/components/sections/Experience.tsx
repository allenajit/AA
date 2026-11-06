import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-dark-950/70 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-lime-deep dark:bg-lime-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-semibold">
              04 // Engineering Initiatives & Teamwork
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-urbanist">
            Experience & Initiatives<span className="text-lime-deep dark:text-lime-accent">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            Early-stage engineering experience: hackathon leadership (SIH 2026), youth innovation tracks (YIP Kerala), and hands-on laboratory workshops. Transparently presented without exaggerated claims.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800/80 ml-4 sm:ml-6 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  exp.current
                    ? 'bg-lime-accent border-dark-950 shadow-glow-lime'
                    : 'bg-zinc-200 dark:bg-dark-900 border-zinc-400 dark:border-zinc-700 group-hover:border-lime-accent'
                }`}
              >
                {exp.current && (
                  <span className="absolute -inset-1 rounded-full bg-lime-accent/30 animate-ping pointer-events-none" />
                )}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-dark-900/90 border border-zinc-200 dark:border-zinc-800/80 hover:border-lime-deep/40 dark:hover:border-lime-accent/40 transition-all shadow-sm">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-lime-deep dark:text-lime-accent font-semibold uppercase tracking-wider">
                        {exp.type}
                      </span>
                      {exp.isPlaceholder && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-dark-850 text-zinc-600 dark:text-zinc-400">
                          Placeholder
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white font-urbanist tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-medium">
                      {exp.period}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Organization */}
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-850 dark:text-zinc-200 mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800/60">
                  <Briefcase className="w-4 h-4 text-lime-deep dark:text-lime-accent" />
                  <span>{exp.organization}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Key Contributions & Achievements */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    Key Contributions & Takeaways
                  </h4>
                  {exp.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-lime-deep dark:text-lime-accent shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200 dark:border-zinc-800/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-white dark:bg-dark-850 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
