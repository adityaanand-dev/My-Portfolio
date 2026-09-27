import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Download, 
  Cloud, 
  Code2, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Layers, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, domainModes } from '../data/portfolioData';

export default function Hero({ activeDomain, setActiveDomain }) {
  const [activeTab, setActiveTab] = useState('cloud-arch');

  const currentMode = domainModes[activeDomain] || domainModes.all;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-emerald-500/5 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                Open to SDE & Cloud/DevOps Roles &middot; B.Tech CSE 2027
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400">{personalInfo.name}</span>
              </h1>
              
              <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-200">
                {activeDomain === 'all' && (
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400">SDE</span>
                    <span className="text-slate-500">&times;</span>
                    <span className="text-sky-400">Cloud & DevOps</span>
                  </span>
                )}
                {activeDomain === 'sde' && (
                  <span className="text-emerald-400 flex items-center gap-2">
                    <Code2 className="w-7 h-7" /> Software Development Engineer
                  </span>
                )}
                {activeDomain === 'cloud' && (
                  <span className="text-sky-400 flex items-center gap-2">
                    <Cloud className="w-7 h-7" /> Cloud & DevOps Engineer
                  </span>
                )}
              </div>
            </div>

            {/* Dynamic Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {activeDomain === 'all' && (
                <>
                  Crafting production-ready applications with modern full-stack architectures (React, Python FastAPI, Java) 
                  backed by automated, self-healing multi-cloud infrastructure on AWS & Azure with Terraform IaC.
                </>
              )}
              {activeDomain === 'sde' && (
                <>
                  Focused on building elegant user experiences with React & Tailwind, decoupled microservices with FastAPI & Java, 
                  and resilient database layer design with single-digit millisecond latency.
                </>
              )}
              {activeDomain === 'cloud' && (
                <>
                  Specializing in cloud resilience, automated CI/CD pipelines (&lt;15s push-to-deploy), 
                  multi-cloud disaster recovery (AWS ↔ Azure), and zero idle-cost serverless architectures.
                </>
              )}
            </p>

            {/* Quick Metrics / Proof Points */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="glass-panel p-3 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-sky-400">99.99%</div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Multi-Cloud DR Availability SLA</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">&lt;15s</div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">CI/CD Deploy Pipeline Sync</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">95.67%</div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Custom Deep Learning CNN Accuracy</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-sky-500/40 font-medium text-sm transition-all"
              >
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Architecture Diagrams</span>
              </a>

              <a
                href={activeDomain === 'cloud' ? personalInfo.resumes.cloud.path : personalInfo.resumes.sde.path}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-sm font-medium transition-all"
                title={`Download ${activeDomain === 'cloud' ? 'Cloud & DevOps' : 'SDE'} Resume`}
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>
                  Resume ({activeDomain === 'cloud' ? 'Cloud' : 'SDE'})
                </span>
              </a>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Connect:</span>
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:text-white hover:bg-slate-700/60 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:text-sky-400 hover:bg-slate-700/60 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.email}
                className="p-2 rounded-lg bg-slate-800/60 hover:text-emerald-400 hover:bg-slate-700/60 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive System Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-emerald-500/20 blur-xl opacity-75"></div>
              
              <div className="relative rounded-2xl bg-dark-card border border-white/10 shadow-2xl overflow-hidden">
                {/* Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-dark-surface/90 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">aditya@cloud-system:~$</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    ACTIVE
                  </div>
                </div>

                {/* Sub-Tabs for Live Visualizer */}
                <div className="flex border-b border-white/5 bg-slate-900/60 px-2 pt-2">
                  <button
                    onClick={() => setActiveTab('cloud-arch')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 ${
                      activeTab === 'cloud-arch'
                        ? 'bg-dark-card text-sky-400 border-t border-x border-white/10 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Cloud className="w-3 h-3" />
                    <span>Multi-Cloud DR</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('serverless')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 ${
                      activeTab === 'serverless'
                        ? 'bg-dark-card text-emerald-400 border-t border-x border-white/10 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Server className="w-3 h-3" />
                    <span>LaunchPad Portal</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 ${
                      activeTab === 'stack'
                        ? 'bg-dark-card text-indigo-400 border-t border-x border-white/10 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Tech Specs</span>
                  </button>
                </div>

                {/* Tab 1: Multi-Cloud DR Live Schematic */}
                {activeTab === 'cloud-arch' && (
                  <div className="p-5 space-y-4 font-mono text-xs">
                    <div className="text-slate-300 font-semibold flex items-center justify-between">
                      <span>Topology: AWS ↔ Azure Active-Standby</span>
                      <span className="text-sky-400 text-[10px] bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                        Terraform IaC
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Ingress / Cloudflare */}
                      <div className="bg-slate-900/90 p-3 rounded-lg border border-sky-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-sky-400" />
                          <span className="text-slate-200">Cloudflare Traffic Manager</span>
                        </div>
                        <span className="text-[10px] text-sky-300">Health Probes /health</span>
                      </div>

                      {/* Primary AWS Box */}
                      <div className="bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/30 space-y-2">
                        <div className="flex items-center justify-between text-emerald-400 font-bold">
                          <span>PRIMARY &middot; AWS Region (VPC)</span>
                          <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.2 rounded text-emerald-300">LIVE</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                          <div className="bg-slate-900/60 p-1.5 rounded">FastAPI on Lambda/EC2</div>
                          <div className="bg-slate-900/60 p-1.5 rounded">DynamoDB + S3 Sync</div>
                        </div>
                      </div>

                      {/* Standby Azure Box */}
                      <div className="bg-indigo-950/20 p-3 rounded-lg border border-indigo-500/30 space-y-2">
                        <div className="flex items-center justify-between text-indigo-400 font-bold">
                          <span>STANDBY &middot; Azure Region (VNet)</span>
                          <span className="text-[10px] bg-indigo-500/20 px-1.5 py-0.2 rounded text-indigo-300">STANDBY REPL</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                          <div className="bg-slate-900/60 p-1.5 rounded">Azure Blob Storage Sync</div>
                          <div className="bg-slate-900/60 p-1.5 rounded">PostgreSQL Logical Repl</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span>RTO / RPO Target: Near Zero</span>
                      <span className="text-emerald-400 font-semibold">99.99% Availability</span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Serverless LaunchPad */}
                {activeTab === 'serverless' && (
                  <div className="p-5 space-y-4 font-mono text-xs">
                    <div className="text-slate-300 font-semibold flex items-center justify-between">
                      <span>LaunchPad Career Portal (Aarsh AI)</span>
                      <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Zero-Idle Cost
                      </span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-center gap-2 p-2 bg-slate-900/80 rounded border border-white/5">
                        <span className="text-sky-400 font-bold">1. Client:</span>
                        <span className="text-slate-300">React.js SPA on S3 + CloudFront</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-slate-900/80 rounded border border-white/5">
                        <span className="text-indigo-400 font-bold">2. Auth:</span>
                        <span className="text-slate-300">Amazon Cognito RBAC (Students/Recruiters)</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-slate-900/80 rounded border border-white/5">
                        <span className="text-emerald-400 font-bold">3. API:</span>
                        <span className="text-slate-300">Amazon API Gateway &rarr; AWS Lambda</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-slate-900/80 rounded border border-white/5">
                        <span className="text-amber-400 font-bold">4. Data & Mail:</span>
                        <span className="text-slate-300">DynamoDB (NoSQL) + Amazon SES notifications</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Architecture: Decoupled Microservices</span>
                      <span className="text-sky-400">CI/CD: GitHub Actions</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Tech Specs */}
                {activeTab === 'stack' && (
                  <div className="p-5 space-y-3 font-mono text-xs">
                    <div className="text-slate-300 font-semibold mb-2">Core Technical Stack:</div>
                    
                    <div className="space-y-2 text-[11px]">
                      <div className="flex justify-between p-2 bg-slate-900/80 rounded border border-white/5">
                        <span className="text-sky-400">Cloud & IaC</span>
                        <span className="text-slate-300">AWS, Azure, Terraform, Docker</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-900/80 rounded border border-white/5">
                        <span className="text-emerald-400">Backend / APIs</span>
                        <span className="text-slate-300">Python (FastAPI), Java, Node.js</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-900/80 rounded border border-white/5">
                        <span className="text-indigo-400">Frontend</span>
                        <span className="text-slate-300">React.js, Tailwind CSS, JavaScript ES6+</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-900/80 rounded border border-white/5">
                        <span className="text-amber-400">Databases</span>
                        <span className="text-slate-300">DynamoDB, PostgreSQL, S3/Blob</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Status: Actively Building</span>
                      <span className="text-emerald-400">&gt; Ready for Production</span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
