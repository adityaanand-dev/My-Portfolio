import { ArrowUp, Mail, Heart, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 text-lg">
                ADITYA ANAND
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                CSE 2027
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Software Development Engineer (Major) &middot; Cloud & DevOps Specialist (Sub-domain).
            </p>
          </div>

          {/* Quick Resumes */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumes.sde.path}
              download
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
            >
              SDE Resume (.docx)
            </a>
            <a
              href={personalInfo.resumes.cloud.path}
              download
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 hover:bg-sky-500/20 transition-colors"
            >
              Cloud Resume (.docx)
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/10 flex items-center gap-2 text-xs font-mono"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} Aditya Anand. Crafted with precision &amp; modern web standards.
          </div>
          <div className="flex items-center gap-4">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              GitHub
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-slate-300 transition-colors">
              Outlook Mail
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
