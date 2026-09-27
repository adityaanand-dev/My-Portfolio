import React from 'react';
import { Layers, Code2, Cloud, Sparkles, Check } from 'lucide-react';
import { domainModes } from '../data/portfolioData';

export default function DomainToggle({ activeDomain, setActiveDomain }) {
  const modes = [
    {
      id: 'all',
      title: 'Full-Stack & Cloud (Hybrid)',
      badge: 'Balanced Overview',
      desc: 'Complete engineering profile showing full-stack development backed by cloud-native infrastructure.',
      icon: Layers,
      color: 'indigo',
      borderClass: activeDomain === 'all' ? 'border-indigo-500 shadow-glow-card' : 'border-white/5 hover:border-white/20',
      activeBg: 'bg-indigo-600/15 text-indigo-400'
    },
    {
      id: 'sde',
      title: 'SDE (Major Domain)',
      badge: 'Software Engineering',
      desc: 'Frontend (React), Backend microservices (Python FastAPI, Java, Node.js), API design, and databases.',
      icon: Code2,
      color: 'emerald',
      borderClass: activeDomain === 'sde' ? 'border-emerald-500 shadow-glow-sde' : 'border-white/5 hover:border-white/20',
      activeBg: 'bg-emerald-600/15 text-emerald-400'
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps (Specialization)',
      badge: 'Infrastructure & IaC',
      desc: 'Multi-cloud DR (AWS + Azure), Terraform IaC, GitHub Actions CI/CD (<15s), Docker, and Cloudflare DNS failover.',
      icon: Cloud,
      color: 'sky',
      borderClass: activeDomain === 'cloud' ? 'border-sky-500 shadow-glow-cloud' : 'border-white/5 hover:border-white/20',
      activeBg: 'bg-sky-600/15 text-sky-400'
    }
  ];

  return (
    <section className="py-8 bg-dark-bg/95 relative z-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Recruiter Filter</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Tailor Your Perspective
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Toggle between my primary focus in <strong className="text-emerald-400">Software Development</strong> and my passion for <strong className="text-sky-400">Cloud & DevOps</strong>.
          </p>
        </div>

        {/* 3 Interactive Cards / Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const isSelected = activeDomain === mode.id;

            return (
              <button
                key={mode.id}
                onClick={() => setActiveDomain(mode.id)}
                className={`text-left p-4 sm:p-5 rounded-2xl glass-panel transition-all relative group cursor-pointer ${mode.borderClass}`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                )}

                <div className="flex items-center gap-3 mb-2.5">
                  <div className={`p-2.5 rounded-xl ${mode.activeBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      {mode.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {mode.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {mode.desc}
                </p>

                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className={isSelected ? 'text-white font-semibold' : 'text-slate-400 group-hover:text-slate-300'}>
                    {isSelected ? '● Currently Active' : 'Click to Switch'}
                  </span>
                  <span className="text-slate-400">&rarr;</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
