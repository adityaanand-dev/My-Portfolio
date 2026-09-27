import React from 'react';
import { Award, GraduationCap, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { certificationsData, personalInfo } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section className="py-20 bg-dark-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Background</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Education
            </h2>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {personalInfo.education.degree}
                  </h3>
                  <div className="text-sm text-slate-300">
                    {personalInfo.education.institution}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-white/5">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {personalInfo.education.duration}
                </span>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Enrolled
                </span>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed">
                Coursework in Cloud Computing, Operating Systems, Computer Networks, Data Structures & Algorithms, Database Management Systems, and Distributed Computing.
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Qualifications</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Certifications & Accreditations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      {cert.score && (
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Score: {cert.score}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {cert.date}
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
