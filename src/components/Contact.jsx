import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ activeDomain }) {
  const [topic, setTopic] = useState(
    activeDomain === 'cloud' ? 'Cloud & DevOps Role' : 'Software Engineering (SDE) Role'
  );
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Confetti fallback
    }

    // Prepare mailto link with pre-filled content
    const subject = encodeURIComponent(`[${topic}] Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Aditya,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg/95 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Resilient
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Available for SDE, Cloud, and DevOps internships, full-time engineering roles, and high-impact software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Contact Information
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to email me directly or schedule a technical chat. I typically respond within 24 hours.
              </p>

              {/* Email Card */}
              <div className="p-3 bg-dark-bg/80 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-3 bg-dark-bg/80 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Phone</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-3 bg-dark-bg/80 rounded-xl border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded-xl border border-white/10 hover:border-sky-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-semibold text-white">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded-xl border border-white/10 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Choose the role or inquiry topic to streamline your connection.
              </p>

              {/* Topic Selector Pills */}
              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Inquiry Topic:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Software Engineering (SDE) Role',
                    'Cloud & DevOps Role',
                    'Full-Stack Project',
                    'Technical Discussion'
                  ].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        topic === t
                          ? 'bg-sky-600 text-white shadow-sm'
                          : 'bg-dark-bg/80 text-slate-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-bg/80 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:border-sky-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-bg/80 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:border-sky-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, project requirements, or opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-bg/80 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:border-sky-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    &bull; Opens your default email client with details pre-filled.
                  </span>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {formSubmitted && (
                  <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Your message client has been triggered! Thank you for reaching out.</span>
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
