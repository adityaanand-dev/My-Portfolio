import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DomainToggle from './components/DomainToggle';
import ArchitectureViewer from './components/ArchitectureViewer';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import InteractiveTerminal from './components/InteractiveTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // 'all' | 'sde' | 'cloud'
  const [activeDomain, setActiveDomain] = useState('all');

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      {/* Top Navbar */}
      <Navbar activeDomain={activeDomain} setActiveDomain={setActiveDomain} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero activeDomain={activeDomain} setActiveDomain={setActiveDomain} />

        {/* Domain Switcher Bar */}
        <DomainToggle activeDomain={activeDomain} setActiveDomain={setActiveDomain} />

        {/* Interactive Architecture Visualizer */}
        <ArchitectureViewer />

        {/* Featured Projects */}
        <Projects activeDomain={activeDomain} />

        {/* Professional Experience */}
        <Experience activeDomain={activeDomain} />

        {/* Skills Matrix */}
        <Skills activeDomain={activeDomain} />

        {/* Education & Certifications */}
        <Certifications />

        {/* Developer Sandbox Terminal */}
        <InteractiveTerminal activeDomain={activeDomain} setActiveDomain={setActiveDomain} />

        {/* Contact Section */}
        <Contact activeDomain={activeDomain} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
