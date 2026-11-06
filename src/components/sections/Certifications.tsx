import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-dark-950/70 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-lime-deep dark:bg-lime-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-semibold">
              07 // Verified Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-urbanist">
            Certifications<span className="text-lime-deep dark:text-lime-accent">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            Foundational certifications across Python programming, web development standards, and cybersecurity. Structured with editable IDs and verification links.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-dark-900/90 border border-zinc-200 dark:border-zinc-800/80 hover:border-lime-deep/40 dark:hover:border-lime-accent/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-lime-deep dark:text-lime-accent group-hover:scale-105 transition-transform shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-white dark:bg-dark-850 px-2.5 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-urbanist tracking-tight mb-1 group-hover:text-lime-deep dark:group-hover:text-lime-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-zinc-500 mb-3">
                  Issuer: {cert.issuer}
                </p>

                {cert.credentialId && (
                  <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                    Credential ID: <span className="text-zinc-700 dark:text-zinc-300">{cert.credentialId}</span>
                  </p>
                )}

                {/* Skills verified */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-dark-850 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                {cert.isPlaceholder ? (
                  <span className="text-[10px] font-mono text-zinc-500">
                    ✎ Editable placeholder in portfolioData.ts
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                    ✓ Verified Coursework
                  </span>
                )}

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-lime-deep dark:text-lime-accent hover:underline"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
