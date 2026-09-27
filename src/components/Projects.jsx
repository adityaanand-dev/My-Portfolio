import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Code2, 
  Cloud, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Cpu,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ activeDomain }) {
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState('multicloud-dr');

  // Filter logic: if activeDomain is set in navbar, default to that or let user filter
  const currentFilter = filter !== 'all' ? filter : activeDomain;

  const filteredProjects = projectsData.filter((proj) => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'sde') return proj.domain === 'sde' || proj.domain === 'all';
    if (currentFilter === 'cloud') return proj.domain === 'cloud' || proj.domain === 'all';
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-dark-bg/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Production architectures, serverless portals, multi-cloud resilience pipelines, and deep learning systems.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center bg-dark-card p-1 rounded-xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                currentFilter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('sde')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                currentFilter === 'sde'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SDE Focus
            </button>
            <button
              onClick={() => setFilter('cloud')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                currentFilter === 'cloud'
                  ? 'bg-sky-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cloud & DevOps
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            const isCloud = project.domain === 'cloud';

            return (
              <div
                key={project.id}
                className={`glass-panel rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded ? 'border-sky-500/40 bg-slate-900/90' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${
                        isCloud 
                          ? 'bg-sky-500/10 text-sky-300 border-sky-500/30' 
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      }`}>
                        {isCloud ? 'Cloud & DevOps' : 'Software Engineering'}
                      </span>
                      
                      {project.status === 'ONGOING' ? (
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                          ONGOING
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                          COMPLETED
                        </span>
                      )}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <div className="text-xs text-sky-400 font-mono mb-3">
                    {project.subtitle}
                  </div>

                  {/* Metrics Bar */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-4 bg-dark-bg/60 p-2.5 rounded-xl border border-white/5 font-mono">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xs font-bold text-slate-200">{m.value}</div>
                          <div className="text-[10px] text-slate-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Expandable Architecture Insights */}
                  {project.architectureDetails && (
                    <div className="mb-4">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1.5 py-1"
                      >
                        <span>{isExpanded ? 'Hide Architecture Breakdown' : 'View Architecture Breakdown'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-2 p-3.5 bg-dark-bg/80 rounded-xl border border-white/10 text-xs font-mono space-y-2 animate-in fade-in">
                          <div className="text-emerald-400 font-semibold">
                            {project.architectureDetails.title}
                          </div>
                          <div className="text-slate-400 text-[11px] mb-2">
                            {project.architectureDetails.summary}
                          </div>
                          <ul className="space-y-1.5 text-slate-300">
                            {project.architectureDetails.steps.map((st, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-[11px]">
                                <span className="text-sky-400">&bull;</span>
                                <span>{st}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
