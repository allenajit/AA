import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  CheckCircle2,
  ShieldAlert,
  AlertTriangle,
  Info,
  Activity,
  Layers,
  Cpu,
  Zap,
  Mic,
  UserCheck,
  MessageSquareWarning,
  Gauge,
  AlertOctagon,
  Waves,
  Binary,
  ArrowUpRight
} from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

interface ProjectDetailPageProps {
  onOpenResume: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ onOpenResume }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-dark-950 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black text-zinc-950 dark:text-white font-urbanist mb-3">
          Project Not Found
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm max-w-md">
          The engineering project you are looking for does not exist or may have been reorganized.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-lime-accent text-dark-950 hover:bg-lime-glow transition-all shadow-glow-lime"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-dark-950 text-zinc-900 dark:text-zinc-100 font-urbanist transition-colors duration-300">
      {/* Sticky Navbar */}
      <Navbar onOpenResume={onOpenResume} />

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Navigation Bar */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-lime-deep dark:text-lime-accent" />
              <span>Back to Portfolio Overview</span>
            </Link>

            <span className="text-xs font-mono text-zinc-500">
              Project Archive // {project.id}
            </span>
          </div>

          {/* Project Hero Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-lime-accent text-dark-950 shadow-glow-lime">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                {project.year}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-950 dark:text-white tracking-tight font-urbanist leading-[1.08] mb-4">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Featured Image Banner */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/8] mb-14 border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          </div>

          {/* SIH 2026 Specific Flagship Overview Box */}
          {project.hackathonInfo && (
            <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-lime-accent/10 dark:bg-lime-accent/5 border border-lime-deep/30 dark:border-lime-accent/30 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-lime-accent animate-ping" />
                <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold">
                  {project.hackathonInfo.name}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white font-urbanist mb-2">
                Problem Statement ID: {project.hackathonInfo.problemStatementId}
              </h3>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                "{project.hackathonInfo.psTitle}"
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                VoiceTrust is engineered specifically for this national initiative to address the critical vulnerability in communication networks where voice cloning enables high-consequence identity theft, emergency wire frauds, and impersonation scams.
              </p>
            </div>
          )}

          {/* Problem Statement & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 shadow-light-card dark:shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold mb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                <span>The Problem & Vulnerability</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 shadow-light-card dark:shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-lime-deep dark:text-lime-accent font-bold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Engineered Solution Strategy</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>
          </div>

          {/* VOICETRUST DEEP DIVE ARCHITECTURE */}
          {project.voiceTrustSpecs && (
            <div className="space-y-14 mb-16">
              {/* 7-Step Workflow Detailed Breakdown */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold">
                    System Architecture
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-urbanist mt-1">
                    End-to-End Workflow Pipeline
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    Voice Input → Acoustic Analysis → Voice-Cloning Detection → Identity Verification → Conversation Analysis → Risk Scoring → Real-Time Warning
                  </p>
                </div>

                <div className="space-y-4">
                  {project.voiceTrustSpecs.workflow.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center font-mono font-black text-lime-deep dark:text-lime-accent text-base shrink-0">
                          0{step.stepNumber}
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white font-urbanist">
                            {step.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 dark:bg-dark-850 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 shrink-0">
                        {step.shortDesc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multi-Signal Analysis Deep Dive */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold">
                    Defense In Depth
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-urbanist mt-1">
                    Multi-Signal Analysis Pillars
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.voiceTrustSpecs.signals.map((sig, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                    >
                      <h4 className="text-lg font-bold text-zinc-950 dark:text-white font-urbanist mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-lime-deep dark:text-lime-accent" />
                        <span>{sig.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                        {sig.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sig.metrics.map((m, mi) => (
                          <span
                            key={mi}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-dark-850 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multi-Tier Risk Scoring HUD */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold">
                    User Safeguards
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-urbanist mt-1">
                    Risk Assessment Engine & Real-Time HUD Alerts
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.voiceTrustSpecs.riskTiers.map((tier) => (
                    <div
                      key={tier.tier}
                      className={`p-6 rounded-2xl border ${tier.tier === 'LOW'
                          ? 'border-emerald-500/40 bg-emerald-500/5'
                          : tier.tier === 'MEDIUM'
                            ? 'border-amber-500/40 bg-amber-500/5'
                            : 'border-rose-500/40 bg-rose-500/5'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-sm font-mono font-black ${tier.tier === 'LOW'
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : tier.tier === 'MEDIUM'
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-rose-600 dark:text-rose-400'
                            }`}
                        >
                          {tier.tier} RISK
                        </span>
                        <span className="text-xs font-mono text-zinc-500">
                          Score {tier.scoreRange}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                        {tier.status}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {tier.actionRequired}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explicit Research Framing Notice */}
              <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed flex items-start gap-3.5">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-950 dark:text-white font-bold block mb-1">
                    Academic Honesty & Hackathon Scope:
                  </strong>
                  VoiceTrust is formulated as an innovative engineering proposal under Smart India Hackathon 2026. Proposed capabilities reflect designed architectural flows, acoustic analysis models, and proof-of-concept software workflows currently under active development. Capabilities are not presented as commercialized or third-party verified features.
                </div>
              </div>
            </div>
          )}

          {/* YIP KERALA SPECIFIC BREAKDOWN */}
          {project.yipSpecs && (
            <div className="space-y-8 mb-16">
              <div className="p-6 sm:p-8 rounded-3xl bg-lime-accent/10 dark:bg-lime-accent/5 border border-lime-deep/30 dark:border-lime-accent/30">
                <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold">
                  YIP Kerala Innovation Program (K-DISC)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white font-urbanist mt-1 mb-3">
                  Initiative Specification Matrix
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  This project card is specifically designed with editable placeholder fields. When your team receives the final evaluation criteria or submits the final design, you can update the fields directly in <code>src/data/portfolioData.ts</code>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800">
                    <h4 className="font-mono text-xs text-lime-deep dark:text-lime-accent font-bold mb-3">
                      Hardware Prototyping Components
                    </h4>
                    <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                      {project.yipSpecs.hardwareComponents.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800">
                    <h4 className="font-mono text-xs text-lime-deep dark:text-lime-accent font-bold mb-3">
                      Software & Firmware Stack
                    </h4>
                    <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                      {project.yipSpecs.softwareComponents.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-mono text-xs text-lime-deep dark:text-lime-accent font-bold mb-3">
                    Target Measurable Impact
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                    {project.yipSpecs.targetImpact.map((impact, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-accent shrink-0" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ENGINEERING PROJECTS SPECIFIC BREAKDOWN */}
          {project.engineeringSpecs && (
            <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold">
                Engineering Lab Breakdown
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white font-urbanist mt-1 mb-2">
                Deliverables & Practical Takeaways
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Domain: {project.engineeringSpecs.domain} • Type: {project.engineeringSpecs.labType}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-bold mb-3">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    {project.engineeringSpecs.keyDeliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-lime-deep dark:text-lime-accent shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-bold mb-3">
                    Key Learning Takeaways
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    {project.engineeringSpecs.learningTakeaways.map((l, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-lime-deep dark:text-lime-accent shrink-0 mt-0.5" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Technologies Stack Matrix */}
          <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-4">
              Technologies & Frameworks Deployed
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-white dark:bg-dark-850 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-zinc-200 dark:bg-dark-900 hover:bg-zinc-300 dark:hover:bg-dark-850 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>

            <a
              href="#contact"
              onClick={() => navigate('/#contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-lime-accent text-dark-950 hover:bg-lime-glow transition-all shadow-glow-lime"
            >
              <span>Discuss This Project With Allen</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer onOpenResume={onOpenResume} />
    </div>
  );
};

