import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Download, 
  FileText, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronDown,
  Layers,
  Code2,
  Cloud
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeDomain, setActiveDomain }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdown, setResumeDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-bg/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-bg rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 text-lg">
                  AA
                </span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-white tracking-tight flex items-center gap-1.5">
                {personalInfo.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="text-xs text-slate-400 font-mono hidden sm:block">
                SDE &middot; Cloud/DevOps
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Domain Mode Switcher Pill */}
          <div className="hidden md:flex items-center bg-dark-card/90 border border-white/10 p-1 rounded-xl shadow-inner">
            <button
              onClick={() => setActiveDomain('all')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeDomain === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
              title="View Hybrid SDE + Cloud Profile"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Hybrid</span>
            </button>

            <button
              onClick={() => setActiveDomain('sde')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeDomain === 'sde'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
              title="Focus on Software Engineering (React, Backend, APIs)"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>SDE Focus</span>
            </button>

            <button
              onClick={() => setActiveDomain('cloud')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeDomain === 'cloud'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
              title="Focus on Cloud & DevOps (AWS, Azure, Terraform, CI/CD)"
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Cloud/DevOps</span>
            </button>
          </div>

          {/* Action: Resume Dropdown */}
          <div className="hidden sm:flex items-center gap-3 relative">
            <div className="relative">
              <button
                onClick={() => setResumeDropdown(!resumeDropdown)}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium bg-gradient-to-r from-sky-500/15 to-indigo-500/15 hover:from-sky-500/25 hover:to-indigo-500/25 text-sky-300 border border-sky-500/30 rounded-lg transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resumeDropdown ? 'rotate-180' : ''}`} />
              </button>

              {resumeDropdown && (
                <div 
                  className="absolute right-0 mt-2 w-64 glass-panel rounded-xl shadow-2xl p-2 border border-white/10 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setResumeDropdown(false)}
                >
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
                    Select Target Resume
                  </div>
                  
                  <a
                    href={personalInfo.resumes.sde.path}
                    download
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 text-slate-200 transition-colors group"
                    onClick={() => setResumeDropdown(false)}
                  >
                    <FileText className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-emerald-300 flex items-center gap-1">
                        SDE Resume
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-normal">DOCX</span>
                      </div>
                      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        Focused on Full-Stack, Java, Python, React & APIs
                      </div>
                    </div>
                  </a>

                  <a
                    href={personalInfo.resumes.cloud.path}
                    download
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 text-slate-200 transition-colors group mt-1"
                    onClick={() => setResumeDropdown(false)}
                  >
                    <FileText className="w-4 h-4 text-sky-400 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-sky-300 flex items-center gap-1">
                        Cloud & DevOps Resume
                        <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.2 rounded font-normal">DOCX</span>
                      </div>
                      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        AWS, Azure, Terraform, CI/CD & Disaster Recovery
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold bg-white text-slate-950 rounded-lg hover:bg-slate-200 transition-colors shadow-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 glass-panel rounded-2xl p-4 space-y-4">
            {/* Domain Switcher Mobile */}
            <div>
              <div className="text-xs text-slate-400 font-semibold mb-2">DOMAIN PERSPECTIVE:</div>
              <div className="grid grid-cols-3 gap-1 bg-dark-card p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => { setActiveDomain('all'); setMobileMenuOpen(false); }}
                  className={`py-1.5 text-xs font-medium rounded-lg text-center ${
                    activeDomain === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Hybrid
                </button>
                <button
                  onClick={() => { setActiveDomain('sde'); setMobileMenuOpen(false); }}
                  className={`py-1.5 text-xs font-medium rounded-lg text-center ${
                    activeDomain === 'sde' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                  }`}
                >
                  SDE
                </button>
                <button
                  onClick={() => { setActiveDomain('cloud'); setMobileMenuOpen(false); }}
                  className={`py-1.5 text-xs font-medium rounded-lg text-center ${
                    activeDomain === 'cloud' ? 'bg-sky-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Cloud/DevOps
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-slate-200 hover:bg-white/5 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Resume buttons */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <a
                href={personalInfo.resumes.sde.path}
                download
                className="flex items-center justify-between w-full px-3 py-2 text-xs bg-emerald-500/10 text-emerald-300 rounded-lg border border-emerald-500/20"
              >
                <span>Download SDE Resume</span>
                <Download className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.resumes.cloud.path}
                download
                className="flex items-center justify-between w-full px-3 py-2 text-xs bg-sky-500/10 text-sky-300 rounded-lg border border-sky-500/20"
              >
                <span>Download Cloud & DevOps Resume</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
