import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Calendar, Layers, Activity, ShieldAlert, Cpu, ArrowRight, AlertTriangle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Image & Close */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-900 via-dark-900/50 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-950/80 text-zinc-300 hover:text-white hover:bg-dark-900 border border-zinc-700/60 backdrop-blur-sm transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-lime-accent text-dark-950 shadow-glow-lime">
                  {project.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-zinc-200 bg-dark-950/80 px-2.5 py-0.5 rounded-full border border-zinc-700">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
                <span className="text-xs font-mono text-zinc-300 bg-dark-850 px-2.5 py-0.5 rounded-full border border-zinc-700">
                  {project.status}
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight font-urbanist drop-shadow-md">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-zinc-700 dark:text-zinc-300">
            {/* Tagline & Problem Statement */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-lime-deep dark:text-lime-accent font-bold mb-1">
                Problem Statement & Motivation
              </h3>
              <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                {project.problemStatement}
              </p>
            </div>

            {/* Solution Overview */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-2">
                Engineering Solution
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>

            {/* Flagship VoiceTrust Specific Breakdown */}
            {project.voiceTrustSpecs && (
              <div className="space-y-6 pt-2">
                {/* 7-Step Workflow */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-lime-deep dark:text-lime-accent font-bold mb-3">
                    Multi-Stage Defensive Pipeline
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.voiceTrustSpecs.workflow.map((w) => (
                      <div
                        key={w.stepNumber}
                        className="p-3.5 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800"
                      >
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-lime-deep dark:text-lime-accent mb-1">
                          <span>Stage 0{w.stepNumber}:</span>
                          <span className="text-zinc-900 dark:text-white font-urbanist">{w.name}</span>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                          {w.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Signals */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-3">
                    Multi-Signal Analysis Matrix
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.voiceTrustSpecs.signals.map((sig, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800">
                        <div className="font-bold text-xs text-zinc-900 dark:text-white mb-1">
                          {sig.title}
                        </div>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mb-2">
                          {sig.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {sig.metrics.map((m, mi) => (
                            <span key={mi} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-dark-900 text-zinc-700 dark:text-zinc-300">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notice */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    <strong>Project Status Disclaimer:</strong> VoiceTrust is an architectural solution design and research concept developed for Smart India Hackathon 2026 (Problem Statement ID 26104). Proposed capabilities are actively undergoing prototyping and academic review rather than finalized production deployment.
                  </span>
                </div>
              </div>
            )}

            {/* YIP Kerala Editable Parameters */}
            {project.yipSpecs && (
              <div className="space-y-4 pt-2">
                <div className="p-3.5 rounded-xl bg-lime-accent/10 border border-lime-accent/30 text-xs text-zinc-800 dark:text-zinc-200 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-lime-deep dark:text-lime-accent shrink-0 mt-0.5" />
                  <span>
                    <strong>YIP Kerala Candidate Card:</strong> Fields below are structured as editable placeholders ready for your final project team submission specifications (hardware bill of materials, software firmware, and measurable impact metrics).
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800">
                    <h5 className="font-mono text-xs text-lime-deep dark:text-lime-accent font-bold mb-2">
                      Hardware Prototyping Components
                    </h5>
                    <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                      {project.yipSpecs.hardwareComponents.map((hw, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent shrink-0" />
                          <span>{hw}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800">
                    <h5 className="font-mono text-xs text-lime-deep dark:text-lime-accent font-bold mb-2">
                      Software & Firmware Stack
                    </h5>
                    <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                      {project.yipSpecs.softwareComponents.map((sw, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent shrink-0" />
                          <span>{sw}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-dark-850 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-zinc-50 dark:bg-dark-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">
              ID: {project.id}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-dark-850 transition-colors"
              >
                Close
              </button>

              <Link
                to={`/project/${project.id}`}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-lime-accent text-dark-950 hover:bg-lime-glow transition-all shadow-glow-lime"
              >
                <span>Open Dedicated Project Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
