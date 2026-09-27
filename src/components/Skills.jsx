import React from 'react';
import { 
  Cpu, 
  Cloud, 
  GitBranch, 
  Server, 
  Layout, 
  Database, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills({ activeDomain }) {
  const iconMap = {
    Cloud: Cloud,
    GitBranch: GitBranch,
    Server: Server,
    Layout: Layout,
    Database: Database
  };

  return (
    <section id="skills" className="py-20 bg-dark-bg/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Infrastructure Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Spanning full-stack software development, distributed architectures, and automated cloud engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cpu;
            const isRelevant = 
              activeDomain === 'all' || 
              cat.domain === 'all' || 
              cat.domain === activeDomain;

            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isRelevant 
                    ? 'border-white/10 hover:border-sky-500/40 shadow-glow-card' 
                    : 'border-white/5 opacity-60 hover:opacity-90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 text-sky-400 border border-white/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {cat.category}
                      </h3>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      {cat.domain === 'cloud' ? 'Cloud Focus' : cat.domain === 'sde' ? 'SDE Focus' : 'Core'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((s, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="bg-dark-bg/60 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                            {s.name}
                            {s.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Core Strength"></span>
                            )}
                          </span>
                          <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.2 rounded">
                            {s.level}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 leading-snug">
                          {s.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Aditya Anand Stack</span>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
