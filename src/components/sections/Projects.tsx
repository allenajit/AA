import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Eye, ShieldAlert, Cpu, Sparkles, Layers, ArrowRight, Activity, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ProjectModal } from '../projects/ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(1);

  const categories = ['all', 'Flagship AI Security', 'Innovation / YIP Kerala', 'Engineering & Software', 'Hardware & IoT'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const flagshipProject = projects.find((p) => p.id === 'voicetrust');

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-zinc-50 dark:bg-dark-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-8 bg-lime-deep dark:bg-lime-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-semibold">
                03 // Selected Engineering Initiatives
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-urbanist">
              Featured Projects<span className="text-lime-deep dark:text-lime-accent">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
              From flagship AI voice security for Smart India Hackathon 2026 to grassroots societal innovations for YIP Kerala and practical software labs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-lime-accent text-dark-950 shadow-glow-lime'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Initiatives' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* FLAGSHIP HERO SHOWCASE: VoiceTrust (When "all" or "Flagship AI Security" is selected) */}
        {(selectedCategory === 'all' || selectedCategory === 'Flagship AI Security') && flagshipProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 rounded-3xl bg-white dark:bg-dark-900 border-2 border-lime-deep/40 dark:border-lime-accent/40 shadow-xl dark:shadow-glow-lime/10 overflow-hidden relative"
          >
            {/* Top Accent Bar */}
            <div className="bg-gradient-to-r from-lime-accent/30 via-lime-accent to-emerald-400 h-1.5 w-full" />

            <div className="p-6 sm:p-8 md:p-10">
              {/* Flagship Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-lime-accent text-dark-950 shadow-glow-lime">
                    ★ FLAGSHIP INITIATIVE
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-dark-850 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                    Smart India Hackathon 2026 • PS 26104
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800">
                    Proposed Solution Architecture
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProject(flagshipProject)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-dark-850 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
                    <span>Quick Modal Inspect</span>
                  </button>

                  <Link
                    to={`/project/${flagshipProject.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-lime-accent text-dark-950 hover:bg-lime-glow transition-all shadow-glow-lime"
                  >
                    <span>Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="max-w-4xl mb-6">
                <h3 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-urbanist tracking-tight mb-2">
                  {flagshipProject.title}
                </h3>
                <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium">
                  {flagshipProject.tagline}
                </p>
              </div>

              {/* Core Philosophy Notice: Beyond Basic Spam */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800 mb-8 flex items-start gap-3.5">
                <ShieldAlert className="w-5 h-5 text-lime-deep dark:text-lime-accent shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <strong className="text-zinc-950 dark:text-white font-semibold">Going Beyond Basic Spam-Call Detection:</strong>{' '}
                  Traditional call filters rely only on static phone number blocklists. VoiceTrust inspects the live voice stream itself, assessing acoustic spectral authenticity, caller biometric identity, and conversational manipulation tactics (such as demands for OTPs, passwords, and urgent funds) to stop deepfake impersonation scams before fraud occurs.
                </div>
              </div>

              {/* Interactive 7-Step Workflow Pipeline */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-lime-deep dark:text-lime-accent font-bold">
                    Core 7-Stage Defensive Workflow Pipeline
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Click any step to inspect details
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {flagshipProject.voiceTrustSpecs?.workflow.map((step) => {
                    const isSelected = activeWorkflowStep === step.stepNumber;
                    return (
                      <button
                        key={step.stepNumber}
                        onClick={() => setActiveWorkflowStep(step.stepNumber)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-lime-accent/15 border-lime-deep dark:border-lime-accent text-zinc-950 dark:text-white shadow-glow-lime/20'
                            : 'bg-zinc-50 dark:bg-dark-850 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono mb-1 font-bold">
                          <span>0{step.stepNumber}</span>
                          {step.stepNumber < 7 && <span className="text-zinc-400 hidden lg:inline">→</span>}
                        </div>
                        <div className="text-xs font-bold font-urbanist line-clamp-1">
                          {step.name}
                        </div>
                        <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">
                          {step.shortDesc}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Workflow Step Detail Callout */}
                {flagshipProject.voiceTrustSpecs?.workflow && (
                  <div className="mt-3 p-3.5 rounded-xl bg-zinc-100 dark:bg-dark-800 border border-zinc-200 dark:border-zinc-700/80 flex items-start gap-3 text-xs text-zinc-700 dark:text-zinc-300">
                    <Info className="w-4 h-4 text-lime-deep dark:text-lime-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-zinc-900 dark:text-white">
                        Stage {activeWorkflowStep}: {flagshipProject.voiceTrustSpecs.workflow[activeWorkflowStep - 1]?.name} —{' '}
                      </strong>
                      {flagshipProject.voiceTrustSpecs.workflow[activeWorkflowStep - 1]?.detail}
                    </div>
                  </div>
                )}
              </div>

              {/* Multi-Signal Breakdown & Risk Engine Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {flagshipProject.voiceTrustSpecs?.riskTiers.map((tier) => (
                  <div
                    key={tier.tier}
                    className={`p-4 rounded-xl border ${
                      tier.tier === 'LOW'
                        ? 'border-emerald-500/40 bg-emerald-500/5'
                        : tier.tier === 'MEDIUM'
                        ? 'border-amber-500/40 bg-amber-500/5'
                        : 'border-rose-500/40 bg-rose-500/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-xs font-mono font-black ${
                          tier.tier === 'LOW'
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : tier.tier === 'MEDIUM'
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-rose-600 dark:text-rose-400'
                        }`}
                      >
                        {tier.tier} RISK [{tier.scoreRange}]
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">Tier Assessment</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white mb-1">
                      {tier.status}
                    </p>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-normal">
                      {tier.actionRequired}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Tag Row */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 mr-2">Core Focus Stack:</span>
                {flagshipProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-dark-850 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* PROJECTS GRID (YIP Kerala, Python Toolkit, Sensor Lab, Web App) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects
              .filter((p) => selectedCategory !== 'all' || p.id !== 'voicetrust')
              .map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group relative rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800/90 hover:border-lime-deep/50 dark:hover:border-lime-accent/50 transition-all duration-300 flex flex-col overflow-hidden shadow-light-card dark:shadow-glow-card hover:shadow-xl dark:hover:shadow-glow-lime/10"
                >
                  {/* Visual Preview Banner */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-dark-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-900 via-transparent to-transparent opacity-90" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/90 dark:bg-dark-950/90 text-lime-deep dark:text-lime-accent border border-lime-deep/30 dark:border-lime-accent/30 backdrop-blur-md">
                        {project.badge || project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/80 dark:bg-dark-950/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>

                    {/* Quick Preview Hover Trigger */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark-950/40 backdrop-blur-[2px] cursor-pointer"
                      aria-label={`View deep dive for ${project.title}`}
                    >
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-dark-900/95 text-white border border-zinc-700 shadow-xl">
                        <Eye className="w-3.5 h-3.5 text-lime-accent" />
                        <span>Inspect Architecture</span>
                      </span>
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {project.yipSpecs?.isEditableNotice && (
                        <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                          <span>⚙ Ready for Final Submission Details</span>
                        </div>
                      )}

                      <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white font-urbanist tracking-tight mb-2 group-hover:text-lime-deep dark:group-hover:text-lime-accent transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* YIP Kerala Editable Parameters Preview */}
                      {project.yipSpecs && (
                        <div className="mb-4 p-3 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800/80 text-xs space-y-1.5">
                          <div className="flex items-start gap-1.5 text-zinc-700 dark:text-zinc-300">
                            <span className="font-mono text-lime-deep dark:text-lime-accent font-bold">HW:</span>
                            <span className="text-[11px] text-zinc-600 dark:text-zinc-400">Microcontroller & Sensor telemetry array</span>
                          </div>
                          <div className="flex items-start gap-1.5 text-zinc-700 dark:text-zinc-300">
                            <span className="font-mono text-lime-deep dark:text-lime-accent font-bold">SW:</span>
                            <span className="text-[11px] text-zinc-600 dark:text-zinc-400">Python logging, alert triggers, firmware</span>
                          </div>
                        </div>
                      )}

                      {/* Engineering Specs Key Takeaways */}
                      {project.engineeringSpecs && (
                        <div className="mb-4 p-3 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800/80 text-xs">
                          <span className="font-mono text-zinc-500 text-[10px] uppercase block mb-1">
                            Domain Focus: {project.engineeringSpecs.domain}
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 text-[11px]">
                            {project.engineeringSpecs.keyDeliverables[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      {/* Technologies Tag List */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-dark-850 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Card Action Footer */}
                      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
                          <span>Quick Inspect</span>
                        </button>

                        <Link
                          to={`/project/${project.id}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-lime-deep dark:text-lime-accent hover:underline"
                        >
                          <span>Full Detail Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Deep-dive Project Architecture Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
