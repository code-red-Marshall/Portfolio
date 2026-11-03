import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import CaseStudy from './components/CaseStudy';
import LeadQualityCaseStudy from './components/case-studies/LeadQualityCaseStudy';
import BreakageIntelligenceCaseStudy from './components/case-studies/BreakageIntelligenceCaseStudy';
import ECGIdentificationCaseStudy from './components/case-studies/ECGIdentificationCaseStudy';
import DishFlowCaseStudy from './components/case-studies/DishFlowCaseStudy';
import SolutionsCentralCaseStudy from './components/case-studies/SolutionsCentralCaseStudy';
import WhatsAppCampaignCaseStudy from './components/case-studies/WhatsAppCampaignCaseStudy';
import SwitchflyCaseStudy from './components/case-studies/SwitchflyCaseStudy';
import Blog from './components/Blog';
import ProfessionalBackground from './components/ProfessionalBackground';
import Education from './components/Education';
import Contact from './components/Contact';
import { AppView, CASE_STUDY_ROUTES, DEFAULT_PAGE_TITLE, resolveViewFromUrl } from './utils/routes';

function App() {
  const returnScrollY = useRef(0);
  const restoreHomeScroll = useRef(false);
  const scrollInstantly = (top: number) => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo({ top, left: 0, behavior: 'auto' });
    root.style.scrollBehavior = previous;
  };
  const [activeView, setActiveView] = useState<AppView>(() => {
    return typeof window !== 'undefined' ? resolveViewFromUrl() : 'home';
  });

  // Keep page title in sync
  useLayoutEffect(() => {
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
      if (resolved === 'home') restoreHomeScroll.current = true;
      setActiveView(resolved);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (activeView === 'home') {
      if (restoreHomeScroll.current) {
        scrollInstantly(returnScrollY.current);
        restoreHomeScroll.current = false;
      }
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
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [activeView]);

  const navigateTo = (view: AppView) => {
    if (view === 'home') {
      if (window.location.pathname !== '/') window.history.pushState({}, '', '/');
      restoreHomeScroll.current = true;
      setActiveView('home');
    } else {
      returnScrollY.current = window.scrollY;
      const route = CASE_STUDY_ROUTES[view];
      if (route && window.location.pathname !== route.path) window.history.pushState({}, '', route.path);
      setActiveView(view);
      scrollInstantly(0);
    }
  };

  if (activeView === 'case-study-switchfly') {
    return <SwitchflyCaseStudy onBack={() => navigateTo('home')} />;
  }

  if (activeView === 'case-study-whatsapp') {
    return <WhatsAppCampaignCaseStudy onBack={() => navigateTo('home')} />;
  }

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
        <ProjectGallery />
        <CaseStudy 
          onOpenSwitchfly={() => navigateTo('case-study-switchfly')}
          onOpenWhatsApp={() => navigateTo('case-study-whatsapp')}
          onOpenCaseStudy={() => navigateTo('case-study-lead-quality')} 
          onOpenBreakage={() => navigateTo('case-study-breakage')}
          onOpenECG={() => navigateTo('case-study-ecg')}
          onOpenDishFlow={() => navigateTo('case-study-dishflow')}
          onOpenSolutionsCentral={() => navigateTo('case-study-solutions-central')}
        />
        <ProfessionalBackground />
        <Education />
        <Blog />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-[#f4f2ed] px-6 py-10 text-[#17221f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#d3d5cc] pt-6 text-left sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#66736c]">
            © 2026 Bhargav Nath
          </p>
          <p className="text-xs text-[#718077]">
            "Build what matters. Measure what moves. Learn what lasts."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;