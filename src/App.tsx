import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';
import Blog from './components/Blog';
import AILiteracy from './components/AILiteracy';
import ProductThinking from './components/ProductThinking';
import ProfessionalBackground from './components/ProfessionalBackground';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectGallery />
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