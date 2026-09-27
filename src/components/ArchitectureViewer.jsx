import React, { useState } from 'react';
import { 
  Cloud, 
  Server, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  RefreshCw, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Workflow, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function ArchitectureViewer() {
  const [selectedArch, setSelectedArch] = useState('multicloud');
  const [activeNode, setActiveNode] = useState(null);

  const architectures = {
    multicloud: {
      title: "Multi-Cloud Disaster Recovery Architecture (Active-Standby)",
      subtitle: "Enterprise High Availability across AWS & Azure with Terraform IaC",
      status: "Ongoing Implementation",
      metrics: [
        { label: "Target Availability", val: "99.99%" },
        { label: "RTO / RPO", val: "Near-Zero Data Loss" },
        { label: "Provisioning", val: "100% Terraform IaC" },
        { label: "Failover Speed", val: "<30s Cloudflare DNS" }
      ],
      description: "Designed to eliminate single cloud vendor lock-in and catastrophic regional outages. The primary application runs in AWS, while a warm standby is pre-provisioned in Azure via modular Terraform code.",
      nodes: [
        {
          id: 'cloudflare',
          name: 'Cloudflare Global Edge',
          role: 'Traffic Steering & Health Probes',
          icon: Globe,
          color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
          desc: 'Runs continuous health checks against `/health` endpoints. In case of primary AWS region latency or downtime, DNS instantly pivots traffic to Azure standby with zero human intervention.'
        },
        {
          id: 'aws-primary',
          name: 'AWS Primary Region',
          role: 'Active Compute & API Layer',
          icon: Server,
          color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
          desc: 'VPC hosting FastAPI microservices behind AWS API Gateway/ALB, connected to DynamoDB and Amazon S3. Handles 100% of live production traffic during normal operations.'
        },
        {
          id: 'sync-engine',
          name: 'Stateful Sync Engine',
          role: 'DynamoDB Streams & Lambda',
          icon: RefreshCw,
          color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
          desc: 'Event-driven replication: DynamoDB Streams invoke lightweight AWS Lambda triggers to mirror updated items and S3 objects directly to Azure Blob Storage asynchronously.'
        },
        {
          id: 'azure-standby',
          name: 'Azure Standby Region',
          role: 'Resilient Backup Environment',
          icon: Cloud,
          color: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
          desc: 'Azure VNet housing Azure PostgreSQL Flexible Server with logical replication active, along with Azure Blob Storage ready to serve traffic immediately upon failover.'
        }
      ],
      flow: [
        "1. Inbound user request reaches Cloudflare Edge DNS Load Balancer.",
        "2. Cloudflare routes live traffic to AWS Primary API Gateway / FastAPI service.",
        "3. Stateful changes in S3 and DynamoDB trigger event streams that replicate data into Azure Blob Storage.",
        "4. PostgreSQL Logical Replication continuously syncs relational transactions.",
        "5. If AWS health checks degrade, Cloudflare automatically fails over traffic to Azure in seconds."
      ]
    },
    launchpad: {
      title: "LaunchPad Serverless Career Portal Architecture",
      subtitle: "Decoupled Zero Idle-Cost Microservices (Aarsh AI Technologies)",
      status: "Production Ready",
      metrics: [
        { label: "Idle Server Cost", val: "$0.00 / month" },
        { label: "Auth Granularity", val: "Cognito 3-Role RBAC" },
        { label: "Frontend Speed", val: "CloudFront CDN Edge" },
        { label: "Email Pipeline", val: "Amazon SES Async" }
      ],
      description: "Engineered during my internship at Aarsh AI Technologies. Built to handle unpredictable student recruitment surges without running idle servers, decoupling frontend UI from serverless backend services.",
      nodes: [
        {
          id: 'spa-edge',
          name: 'React SPA on S3 + CloudFront',
          role: 'Edge-Cached Static Frontend',
          icon: Globe,
          color: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
          desc: 'React.js single page application hosted on private S3 origin with CloudFront edge caching, HTTPS termination, and sub-100ms global page loads.'
        },
        {
          id: 'cognito-auth',
          name: 'Amazon Cognito Pools',
          role: 'Role-Based Authentication',
          icon: ShieldCheck,
          color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
          desc: 'Issues JWT tokens verifying user roles: Student, Recruiter, or Admin, enforcing least-privilege API access on every request.'
        },
        {
          id: 'api-gateway',
          name: 'Amazon API Gateway',
          role: 'RESTful Route Decoupling',
          icon: Workflow,
          color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
          desc: 'Provides throttled, rate-limited REST endpoints forwarding validated requests directly to serverless Lambda microservices.'
        },
        {
          id: 'lambda-compute',
          name: 'AWS Lambda & DynamoDB',
          role: 'Event Microservices & Storage',
          icon: Database,
          color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
          desc: 'Autonomous microservices executing on-demand with zero cold starts for common paths, writing directly to low-latency DynamoDB tables.'
        }
      ],
      flow: [
        "1. Student/Recruiter interacts with React SPA delivered globally via CloudFront CDN.",
        "2. User logs in via Amazon Cognito; JWT claims determine dashboard permissions.",
        "3. Browser issues authenticated REST requests to API Gateway endpoints.",
        "4. Lambda functions process career applications, saving records into DynamoDB.",
        "5. Automated notification emails are dispatched asynchronously via Amazon SES."
      ]
    }
  };

  const current = architectures[selectedArch];

  return (
    <section id="architecture" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20 mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Systems & Cloud Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Architecture Visualizer
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Click to inspect the system design behind my flagship multi-cloud disaster recovery project and serverless production portal.
          </p>
        </div>

        {/* Architecture Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-dark-card border border-white/10 rounded-2xl shadow-lg">
            <button
              onClick={() => { setSelectedArch('multicloud'); setActiveNode(null); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedArch === 'multicloud'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cloud className="w-4 h-4" />
              <span>Multi-Cloud Disaster Recovery (AWS &harr; Azure)</span>
            </button>
            <button
              onClick={() => { setSelectedArch('launchpad'); setActiveNode(null); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedArch === 'launchpad'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Server className="w-4 h-4" />
              <span>LaunchPad Serverless Portal (Aarsh AI)</span>
            </button>
          </div>
        </div>

        {/* Main Architecture Interactive Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Top Bar with Metrics */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                  {current.status}
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-xs text-slate-400">Interactive Blueprint</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                {current.description}
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="bg-dark-bg/80 border border-white/5 p-2.5 rounded-xl text-center">
                  <div className="text-xs font-bold font-mono text-white">{m.val}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Node Grid */}
          <div className="mb-8">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Architecture Nodes (Click any node to inspect details):</span>
              <span className="text-sky-400 text-[11px]">Click to reveal mechanics &darr;</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {current.nodes.map((node) => {
                const Icon = node.icon;
                const isSelected = activeNode === node.id;

                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(isSelected ? null : node.id)}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 relative group ${
                      isSelected
                        ? 'bg-slate-800/90 border-sky-400 shadow-glow-card scale-[1.02]'
                        : 'bg-dark-card/70 border-white/10 hover:border-white/20 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl border ${node.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isSelected ? 'rotate-90 text-sky-400' : 'group-hover:translate-x-0.5'}`} />
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                      {node.name}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-400">
                      {node.role}
                    </p>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 leading-relaxed animate-in fade-in">
                        {node.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Execution Pipeline Steps */}
          <div className="bg-dark-bg/60 rounded-2xl p-5 border border-white/5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Step-by-Step Data & Failover Lifecycle:</span>
            </h4>
            <div className="space-y-2">
              {current.flow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                  <span className="text-sky-400 font-bold">&rsaquo;</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
