import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Briefcase, GraduationCap, Award, CheckCircle2, FileText, Info } from 'lucide-react';
import { personalInfo, experienceData, educationData, certificationsData, skillCategories, projects } from '../../data/portfolioData';
import { useToast } from '../../context/ToastContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      // Check if resume.pdf exists in public folder
      const response = await fetch(personalInfo.resumePath, { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = personalInfo.resumePath;
        link.download = `Allen_Ajit_Engineering_Resume.pdf`;
        link.click();
        showToast('Downloading Allen Ajit Resume PDF...', 'success');
        return;
      }
    } catch {
      // Fallback to markdown download if PDF not found
    }

    // Markdown ATS Fallback
    handleDownloadMarkdown();
    showToast('Downloaded ATS Resume (.md). Place your custom resume.pdf in /public to enable direct PDF downloads.', 'info');
  };

  const handleDownloadMarkdown = () => {
    const resumeText = `# ${personalInfo.name.toUpperCase()}
${personalInfo.role} | ${personalInfo.academicStage}
Location: ${personalInfo.location} | Email: ${personalInfo.email}
GitHub: ${personalInfo.socialLinks.find(s => s.platform === 'GitHub')?.url || 'https://github.com/allenajit'}
LinkedIn: ${personalInfo.socialLinks.find(s => s.platform === 'LinkedIn')?.url || 'https://linkedin.com/in/allenajit'}

================================================================================
OBJECTIVE
================================================================================
${personalInfo.headline}. ${personalInfo.tagline}

================================================================================
EDUCATION
================================================================================
${educationData.map(edu => `* ${edu.degree} — ${edu.field}
  ${edu.institution}, ${edu.location} (${edu.period})
  Status: ${edu.currentYear} | ${edu.grade || ''}
  Key Highlights:
  ${edu.highlights.map(h => `  - ${h}`).join('\n')}
  Foundational Coursework: ${edu.relevantCoursework.join(', ')}
`).join('\n')}

================================================================================
FLAGSHIP INITIATIVES & PROJECTS
================================================================================
${projects.map(p => `* ${p.title} (${p.year})
  Role: Solution Architect / Developer | Category: ${p.category}
  ${p.description}
  Key Technologies: ${p.technologies.join(', ')}
  Problem Statement: ${p.problemStatement}
`).join('\n')}

================================================================================
TECHNICAL SKILLS & COMPETENCIES
================================================================================
${skillCategories.map(cat => `* ${cat.title} (${cat.badge}):
  ${cat.skills.map(s => `${s.name} [${s.stage}] - ${s.description}`).join('\n  ')}
`).join('\n\n')}

================================================================================
EXPERIENCE & TEAMWORK
================================================================================
${experienceData.map(exp => `* ${exp.role} — ${exp.organization}
  ${exp.location} (${exp.period}) | Type: ${exp.type}
  ${exp.description}
  ${exp.achievements.map(a => `  - ${a}`).join('\n')}
  Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

================================================================================
CERTIFICATIONS & CREDENTIALS
================================================================================
${certificationsData.map(c => `* ${c.title} — ${c.issuer} (${c.issueDate})
  Credential ID: ${c.credentialId || 'Verified Coursework'}
  Skills: ${c.skills.join(', ')}
`).join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Allen_Ajit_ATS_Resume.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden text-zinc-900 dark:text-zinc-100"
        >
          {/* Top Actions Bar */}
          <div className="px-6 py-4 bg-zinc-100 dark:bg-dark-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-lime-deep dark:text-lime-accent" />
              <span className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                Engineering Curriculum Vitae (ATS Preview)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-dark-850 hover:bg-zinc-200 dark:hover:bg-dark-800 border border-zinc-300 dark:border-zinc-700 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                onClick={handleDownloadPdf}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-lime-accent text-dark-950 hover:bg-lime-glow transition-all shadow-glow-lime"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Placeholder Guide Banner */}
          <div className="px-6 py-2.5 bg-lime-accent/15 border-b border-lime-deep/20 dark:border-lime-accent/20 flex items-center justify-between text-xs text-zinc-800 dark:text-zinc-200">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-lime-deep dark:text-lime-accent shrink-0" />
              <span>
                <strong>Resume File Configuration:</strong> To link your official PDF, place <code>resume.pdf</code> inside the project's <code>/public</code> directory.
              </span>
            </div>
            <button
              onClick={handleDownloadMarkdown}
              className="text-[11px] font-mono text-lime-deep dark:text-lime-accent underline ml-2 shrink-0"
            >
              Get Markdown (.md)
            </button>
          </div>

          {/* Scrollable ATS Resume Document */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-dark-900 text-sm">
            {/* Header */}
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black text-zinc-950 dark:text-white font-urbanist tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-lime-deep dark:text-lime-accent mt-0.5">
                  {personalInfo.role} • {personalInfo.academicStage}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
                  {personalInfo.headline}
                </p>
              </div>

              <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-lime-deep dark:text-lime-accent" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="text-[11px] text-zinc-500">
                  github.com/allenajit • linkedin.com/in/allenajit
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h2>
              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-bold text-zinc-900 dark:text-white">
                        {edu.degree} — {edu.field}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      {edu.institution}, {edu.location}
                    </p>
                    <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-lime-deep dark:text-lime-accent mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Flagship Engineering Projects</span>
              </h2>
              <div className="space-y-4">
                {projects.slice(0, 3).map((p) => (
                  <div key={p.id} className="p-4 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-bold text-zinc-900 dark:text-white">
                        {p.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500">{p.year}</span>
                    </div>
                    <p className="text-xs font-medium text-lime-deep dark:text-lime-accent mb-2">
                      {p.category} • {p.status}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {p.technologies.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-dark-900 text-zinc-700 dark:text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Stack */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Technical Skills & Learning Journey</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="p-4 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase mb-2">
                      {cat.title} ({cat.badge})
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {cat.skills.map(s => `${s.name} (${s.stage})`).join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
