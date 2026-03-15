import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';
import CaseStudy from './components/CaseStudy';
import LeadQualityCaseStudy from './components/case-studies/LeadQualityCaseStudy';
import BreakageIntelligenceCaseStudy from './components/case-studies/BreakageIntelligenceCaseStudy';
import Blog from './components/Blog';
import AILiteracy from './components/AILiteracy';
import ProductThinking from './components/ProductThinking';
import ProfessionalBackground from './components/ProfessionalBackground';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [activeView, setActiveView] = useState<'home' | 'case-study-lead-quality' | 'case-study-breakage'>('home');

  useEffect(() => {
    if (activeView === 'home') {
      // Add intersection observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, observerOptions);

      // Observe all sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => observer.observe(section));

      return () => {
        observer.disconnect();
      };
    } else {
       window.scrollTo(0, 0);
    }
  }, [activeView]);

  if (activeView === 'case-study-lead-quality') {
    return <LeadQualityCaseStudy onBack={() => setActiveView('home')} />;
  }

  if (activeView === 'case-study-breakage') {
    return <BreakageIntelligenceCaseStudy onBack={() => setActiveView('home')} />;
  }

  return (
    <div className="font-inter bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectGallery />
        <CaseStudy 
          onOpenCaseStudy={() => setActiveView('case-study-lead-quality')} 
          onOpenBreakage={() => setActiveView('case-study-breakage')}
        />
        <Blog />
        <AILiteracy />
        <ProductThinking />
        <ProfessionalBackground />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Bhargav Nath. Built with purpose, designed for impact.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            "Build what matters. Measure what moves. Learn what lasts."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;