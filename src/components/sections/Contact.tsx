import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Copy, Check, ArrowUpRight, Github, Linkedin, ShieldCheck, MessageSquare, AlertCircle } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useToast } from '../../context/ToastContext';

export const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Hackathon Collaboration / SIH 2026',
    message: '',
    botTrap: '', // Anti-spam honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedViaMailto, setSubmittedViaMailto] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    showToast(`Email copied: ${personalInfo.email}`);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot check
    if (formData.botTrap) {
      // Bot detected, silently reject
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in your name, email, and message.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Prepare mailto link with encoded parameters
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.topic} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Allen,\n\nMy Name: ${formData.name}\nMy Email: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Open user's email client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedViaMailto(true);
      showToast('Opening your default email client with pre-filled message!', 'success');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-zinc-50 dark:bg-dark-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-lime-deep dark:bg-lime-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-semibold">
              08 // Initiate Dialogue
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-urbanist">
            Let's Connect<span className="text-lime-deep dark:text-lime-accent">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            Whether you want to discuss VoiceTrust (SIH 2026), explore collaborative innovation, or offer early engineering mentorship, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct channels & context (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 shadow-light-card dark:shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-lime-deep dark:text-lime-accent font-bold">
                  Direct Inquiries
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white font-urbanist mt-1">
                  Engineering ideas into intelligent solutions.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  I am actively seeking hackathon collaborations, student research initiatives, and engineering discussions.
                </p>
              </div>

              {/* Email One-Click Copy */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <span className="text-xs font-mono text-zinc-500 block">
                  Official Email (Editable Placeholder)
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-zinc-900 dark:text-white truncate">
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-dark-900 hover:bg-zinc-200 dark:hover:bg-dark-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location & Status Info */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <MapPin className="w-4 h-4 text-lime-deep dark:text-lime-accent shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <ShieldCheck className="w-4 h-4 text-lime-deep dark:text-lime-accent shrink-0" />
                  <span>{personalInfo.availability.text}</span>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold block mb-3">
                  Verified Social Channels
                </span>
                <div className="flex flex-col gap-2">
                  {personalInfo.socialLinks.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 dark:bg-dark-850 hover:bg-zinc-100 dark:hover:bg-dark-800 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {s.platform === 'GitHub' && <Github className="w-4 h-4 text-lime-deep dark:text-lime-accent" />}
                        {s.platform === 'LinkedIn' && <Linkedin className="w-4 h-4 text-lime-deep dark:text-lime-accent" />}
                        {s.platform === 'Email' && <Mail className="w-4 h-4 text-lime-deep dark:text-lime-accent" />}
                        <span>{s.platform}</span>
                      </div>
                      <span className="text-zinc-400 text-[11px] truncate max-w-[140px]">
                        @{s.username}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 shadow-light-card dark:shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-urbanist">
                  Send a Message
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  Direct Mailto Dispatch
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anti-spam hidden honeypot */}
                <input
                  type="text"
                  name="website_bot_trap"
                  value={formData.botTrap}
                  onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Topic / Purpose */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
                    Topic / Context
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-colors"
                  >
                    <option value="VoiceTrust & SIH 2026 Collaboration">VoiceTrust & SIH 2026 Collaboration</option>
                    <option value="YIP Kerala Innovation Discussion">YIP Kerala Innovation Discussion</option>
                    <option value="Engineering Mentorship / Early Opportunities">Engineering Mentorship / Early Opportunities</option>
                    <option value="Python & Web Tech Discussions">Python & Web Tech Discussions</option>
                    <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, hackathon, ideas, or how we can collaborate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-colors resize-none"
                  />
                </div>

                {/* Transparent Dispatch Note */}
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-dark-850 border border-zinc-200 dark:border-zinc-800/80 text-[11px] text-zinc-500 leading-normal flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-lime-deep dark:text-lime-accent shrink-0 mt-0.5" />
                  <span>
                    Submitting this form launches your email client directly with pre-composed parameters addressed to <code>{personalInfo.email}</code>. (To route directly through an automated backend, you can hook up EmailJS or Formspree in <code>Contact.tsx</code>).
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-lime-accent text-dark-950 hover:bg-lime-glow transition-all shadow-glow-lime disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Email Client...' : 'Send Message via Email Client'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
