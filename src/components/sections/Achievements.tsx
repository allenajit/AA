import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Sparkles } from 'lucide-react';
import { achievementsData } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'hackathon':
        return <Trophy className="w-5 h-5 text-lime-deep dark:text-lime-accent" />;
      case 'innovation track':
        return <Sparkles className="w-5 h-5 text-lime-deep dark:text-lime-accent" />;
      case 'academic distinction':
        return <Award className="w-5 h-5 text-lime-deep dark:text-lime-accent" />;
      default:
        return <Medal className="w-5 h-5 text-lime-deep dark:text-lime-accent" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-zinc-50 dark:bg-dark-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-lime-deep dark:bg-lime-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-semibold">
              06 // Honors & Hackathons
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-urbanist">
            Achievements<span className="text-lime-deep dark:text-lime-accent">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            Selected hackathon proposals (SIH 2026), state innovation candidacies (YIP Kerala), and academic milestones. Structured with editable placeholders for upcoming distinctions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800/80 hover:border-lime-deep/40 dark:hover:border-lime-accent/50 transition-all flex flex-col justify-between group shadow-light-card dark:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-lime-accent/50 transition-colors">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-lime-accent/15 text-lime-deep dark:text-lime-accent border border-lime-deep/30 dark:border-lime-accent/30">
                      {item.statusBadge}
                    </span>
                    <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-dark-850 px-2.5 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800">
                      {item.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white font-urbanist tracking-tight mb-1 group-hover:text-lime-deep dark:group-hover:text-lime-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-zinc-500 mb-3">
                  {item.organization}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.isPlaceholder && (
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 text-[10px] font-mono text-zinc-500">
                  ✎ Editable in <code>portfolioData.ts</code>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
