import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-zinc-50 dark:bg-dark-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-lime-deep dark:bg-lime-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-semibold">
              05 // Academic Foundations
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-urbanist">
            Education<span className="text-lime-deep dark:text-lime-accent">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            First-year engineering undergraduate building rigorous foundations in algorithmic problem solving, physical sciences, and modern engineering disciplines.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800/80 hover:border-lime-deep/40 dark:hover:border-lime-accent/40 transition-all flex flex-col justify-between group shadow-light-card dark:shadow-sm"
            >
              <div>
                {/* Degree & Field */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-lime-deep dark:text-lime-accent group-hover:scale-105 transition-transform shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 dark:bg-dark-850 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      {edu.period}
                    </span>
                    <span className="text-[10px] font-mono text-lime-deep dark:text-lime-accent font-bold">
                      {edu.currentYear}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white font-urbanist tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-lime-deep dark:text-lime-accent mb-3">
                  {edu.field}
                </p>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-mono mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800/70">
                  <span className="text-zinc-850 dark:text-zinc-200 font-medium">{edu.institution}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Status / Grade */}
                {edu.grade && (
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-lime-accent/15 border border-lime-deep/30 dark:border-lime-accent/30 text-xs font-mono text-lime-deep dark:text-lime-accent">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.grade}</span>
                  </div>
                )}

                {/* Highlights */}
                <div className="space-y-2 mt-2 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    Key Highlights
                  </h4>
                  {edu.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
                    <span>Foundational Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.relevantCoursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-dark-850 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {edu.isPlaceholder && (
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 text-[10px] font-mono text-zinc-500">
                  ✎ Editable in <code>portfolioData.ts</code>: college, branch & graduation year
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
