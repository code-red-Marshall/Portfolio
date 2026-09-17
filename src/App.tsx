import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';
import CaseStudy from './components/CaseStudy';
import LeadQualityCaseStudy from './components/case-studies/LeadQualityCaseStudy';
import BreakageIntelligenceCaseStudy from './components/case-studies/BreakageIntelligenceCaseStudy';
import ECGIdentificationCaseStudy from './components/case-studies/ECGIdentificationCaseStudy';
import DishFlowCaseStudy from './components/case-studies/DishFlowCaseStudy';
import SolutionsCentralCaseStudy from './components/case-studies/SolutionsCentralCaseStudy';
import Blog from './components/Blog';
import AILiteracy from './components/AILiteracy';
import ProductThinking from './components/ProductThinking';
import ProfessionalBackground from './components/ProfessionalBackground';
import Education from './components/Education';
import Contact from './components/Contact';
import { AppView, CASE_STUDY_ROUTES, DEFAULT_PAGE_TITLE, resolveViewFromUrl } from './utils/routes';

function App() {
  const [activeView, setActiveView] = useState<AppView>(() => {
    return typeof window !== 'undefined' ? resolveViewFromUrl() : 'home';
  });

  // Keep page title in sync
  useEffect(() => {
    if (activeView === 'home') {
      document.title = DEFAULT_PAGE_TITLE;
    } else if (CASE_STUDY_ROUTES[activeView]) {
      document.title = CASE_STUDY_ROUTES[activeView].title;
    }
  }, [activeView]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const resolved = resolveViewFromUrl();
      setActiveView(resolved);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  const navigateTo = (view: AppView) => {
    if (view === 'home') {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
      setActiveView('home');
      setTimeout(() => {
        const caseStudySection = document.getElementById('case-study');
        if (caseStudySection) {
          caseStudySection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const route = CASE_STUDY_ROUTES[view];
      if (route && window.location.pathname !== route.path) {
        window.history.pushState({}, '', route.path);
      }
      setActiveView(view);
      window.scrollTo(0, 0);
    }
  };

  if (activeView === 'case-study-lead-quality') {
    return <LeadQualityCaseStudy onBack={() => navigateTo('home')} />;
  }

  if (activeView === 'case-study-breakage') {
    return <BreakageIntelligenceCaseStudy onBack={() => navigateTo('home')} />;
  }

  if (activeView === 'case-study-ecg') {
    return <ECGIdentificationCaseStudy onBack={() => navigateTo('home')} />;
  }

  if (activeView === 'case-study-dishflow') {
    return <DishFlowCaseStudy onBack={() => navigateTo('home')} />;
  }

  if (activeView === 'case-study-solutions-central') {
    return <SolutionsCentralCaseStudy onBack={() => navigateTo('home')} />;
  }

  return (
    <div className="font-inter bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectGallery />
        <CaseStudy 
          onOpenCaseStudy={() => navigateTo('case-study-lead-quality')} 
          onOpenBreakage={() => navigateTo('case-study-breakage')}
          onOpenECG={() => navigateTo('case-study-ecg')}
          onOpenDishFlow={() => navigateTo('case-study-dishflow')}
          onOpenSolutionsCentral={() => navigateTo('case-study-solutions-central')}
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