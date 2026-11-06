import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../../data/portfolioData';
import { DynamicIcon } from '../common/DynamicIcon';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === selectedCategory);

  const getStageBadgeClass = (stage: string) => {
    switch (stage) {
      case 'Proficient':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'Currently Learning':
        return 'bg-lime-accent/15 text-lime-deep dark:text-lime-accent border-lime-accent/40';
      case 'Actively Exploring':
        return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30';
      default:
        return 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700';
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-dark-950/70 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-8 bg-lime-deep dark:bg-lime-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-semibold">
                02 // Learning Journey & Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-urbanist">
              Skills & Technologies<span className="text-lime-deep dark:text-lime-accent">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
              An honest view of my technical foundations: Python as core programming, HTML/CSS/JS as actively developing web skills, and future frontiers under exploration.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-lime-accent text-dark-950 shadow-glow-lime'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-lime-accent text-dark-950 shadow-glow-lime'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Skills Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-urbanist tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-dark-900 border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {category.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {category.description}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="p-5 rounded-xl bg-zinc-50 dark:bg-dark-900/70 border border-zinc-200 dark:border-zinc-800/80 hover:border-lime-accent/60 dark:hover:border-lime-accent/50 hover:bg-white dark:hover:bg-dark-900 transition-all flex flex-col justify-between group shadow-sm"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:text-lime-deep dark:group-hover:text-lime-accent group-hover:border-lime-accent/40 transition-colors">
                            <DynamicIcon name={skill.icon} className="w-5 h-5" />
                          </div>
                          <span
                            className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${getStageBadgeClass(
                              skill.stage
                            )}`}
                          >
                            {skill.stage}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-lime-deep dark:group-hover:text-lime-accent transition-colors font-urbanist">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
