import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ activeDomain }) {
  return (
    <section id="experience" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Demonstrated track record of delivering resilient cloud architecture, deep learning models, and client software.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {experienceData.map((item, idx) => {
            const isCloud = item.domain === 'cloud';

            return (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Dot */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-dark-bg transition-colors ${
                  isCloud 
                    ? 'border-sky-400 group-hover:bg-sky-400' 
                    : 'border-emerald-400 group-hover:bg-emerald-400'
                }`} />

                {/* Period Label for Desktop */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28 text-xs font-mono text-slate-400">
                  {item.period}
                </div>

                {/* Main Card */}
                <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  
                  {/* Period for Mobile */}
                  <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded font-medium ${
                        isCloud ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20' : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-4">
                    {item.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-bg/80 text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
