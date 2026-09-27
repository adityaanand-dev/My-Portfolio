import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function InteractiveTerminal({ activeDomain, setActiveDomain }) {
  const [history, setHistory] = useState([
    { text: "Antigravity Cloud Terminal v2.4 initialized. Ready.", type: "system" },
    { text: "Type 'help' or click quick pills below to explore Aditya's systems.", type: "info" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef(null);

  const quickCommands = [
    { label: "help", cmd: "help" },
    { label: "skills", cmd: "skills" },
    { label: "projects", cmd: "projects" },
    { label: "switch sde", cmd: "switch sde" },
    { label: "switch cloud", cmd: "switch cloud" },
    { label: "contact", cmd: "contact" },
    { label: "clear", cmd: "clear" }
  ];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const newHistory = [...history, { text: `$ ${trimmed}`, type: "command" }];
    const lower = trimmed.toLowerCase();

    if (lower === 'help') {
      newHistory.push({
        text: `Available Commands:
  • help          : Display this command manual
  • skills        : List technical capabilities across Cloud & SDE
  • projects      : List production projects & architectural highlights
  • switch sde    : Switch whole website view to Software Development Focus
  • switch cloud  : Switch whole website view to Cloud & DevOps Focus
  • switch all    : Switch whole website view to Hybrid Focus
  • resume        : Print download links for SDE and Cloud resumes
  • contact       : Display direct email, phone, and social endpoints
  • clear         : Clear the terminal console output`,
        type: "output"
      });
    } else if (lower === 'skills') {
      newHistory.push({
        text: `Technical Stack Overview:
  [Cloud Platforms]  : AWS (Lambda, API GW, S3, DynamoDB, SES, CloudFront, IAM), Azure, Cloudflare
  [IaC & DevOps]     : Terraform, GitHub Actions, Docker, Linux, Bash, Git
  [Backend / APIs]   : Python (FastAPI), Java (Data Structures), Node.js, REST APIs
  [Frontend]         : React.js, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3
  [Databases]        : DynamoDB (NoSQL streams), PostgreSQL (Logical Replication)`,
        type: "output"
      });
    } else if (lower === 'projects') {
      newHistory.push({
        text: `Active & Flagship Projects:
  1. Multi-Cloud DR System (AWS + Azure + Terraform + Cloudflare) -> 99.99% Target Availability
  2. LaunchPad Serverless Portal (Aarsh AI) -> Decoupled React + Lambda + DynamoDB ($0 Idle Cost)
  3. Serverless Portfolio on AWS (S3 + CloudFront CDN + Lambda Microservice) -> <15s CI/CD
  4. Potato Leaf Disease Classifier (CNN + Grad-CAM) -> 95.67% Test Accuracy
  5. Stock Price Forecasting (LSTM RNN + Streamlit)`,
        type: "output"
      });
    } else if (lower === 'switch sde') {
      setActiveDomain('sde');
      newHistory.push({
        text: `[SYSTEM] Switched UI focus to: Software Development Engineer (SDE Mode)`,
        type: "success"
      });
    } else if (lower === 'switch cloud') {
      setActiveDomain('cloud');
      newHistory.push({
        text: `[SYSTEM] Switched UI focus to: Cloud & DevOps Engineer (Cloud Mode)`,
        type: "success"
      });
    } else if (lower === 'switch all' || lower === 'switch hybrid') {
      setActiveDomain('all');
      newHistory.push({
        text: `[SYSTEM] Switched UI focus to: Hybrid / All-Round Mode`,
        type: "success"
      });
    } else if (lower === 'resume') {
      newHistory.push({
        text: `Direct Resume Assets:
  • SDE Resume         : ${personalInfo.resumes.sde.path}
  • Cloud & DevOps     : ${personalInfo.resumes.cloud.path}`,
        type: "output"
      });
    } else if (lower === 'contact') {
      newHistory.push({
        text: `Aditya Anand Contact Endpoints:
  • Email   : ${personalInfo.email}
  • Phone   : ${personalInfo.phone}
  • Location: ${personalInfo.location}
  • GitHub  : ${personalInfo.socials.github}
  • LinkedIn: ${personalInfo.socials.linkedin}`,
        type: "output"
      });
    } else if (lower === 'clear') {
      setHistory([]);
      setInputVal("");
      return;
    } else {
      newHistory.push({
        text: `zsh: command not found: ${trimmed}. Type 'help' for available commands.`,
        type: "error"
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section id="terminal" className="py-20 bg-dark-bg/90 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Developer Sandbox</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Interactive System Console
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Test Aditya's CLI shell, query skills, inspect project blueprints, or toggle site themes via command line.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-[11px] font-mono text-slate-400">Quick run:</span>
          {quickCommands.map((q) => (
            <button
              key={q.cmd}
              onClick={() => handleCommand(q.cmd)}
              className="px-2.5 py-1 text-xs font-mono bg-slate-800/80 hover:bg-slate-700/80 text-sky-300 rounded-md border border-white/10 transition-colors flex items-center gap-1"
            >
              <span>{q.label}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-dark-bg border border-white/15 shadow-2xl overflow-hidden font-mono text-xs">
          
          {/* Title Bar */}
          <div className="px-4 py-2.5 bg-dark-card/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-slate-400 text-[11px] ml-2 font-mono">aditya-anand@cloud-node-01: ~</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">bash / zsh 5.9</div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 space-y-2.5 min-h-[260px] max-h-[400px] overflow-y-auto">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={`whitespace-pre-wrap leading-relaxed ${
                  item.type === 'command'
                    ? 'text-sky-300 font-semibold'
                    : item.type === 'system'
                    ? 'text-slate-400'
                    : item.type === 'success'
                    ? 'text-emerald-400'
                    : item.type === 'error'
                    ? 'text-rose-400'
                    : 'text-slate-300'
                }`}
              >
                {item.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="px-4 py-3 bg-dark-card/60 border-t border-white/10 flex items-center gap-2">
            <span className="text-emerald-400 font-bold">&gt;</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command (e.g. 'help', 'skills', 'switch cloud')..."
              className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-1.5 text-slate-400 hover:text-white rounded bg-white/5 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
