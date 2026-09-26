import React from 'react';
import { ArrowRight, ExternalLink, Smartphone } from 'lucide-react';
import ShareButton from './ui/ShareButton';
import { getCaseStudyUrl } from '../utils/routes';

interface CaseStudyProps {
  onOpenWhatsApp?: () => void;
  onOpenCaseStudy: () => void;
  onOpenBreakage?: () => void;
  onOpenECG?: () => void;
  onOpenDishFlow?: () => void;
  onOpenSolutionsCentral?: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ 
  onOpenWhatsApp,
  onOpenCaseStudy, 
  onOpenBreakage, 
  onOpenECG, 
  onOpenDishFlow,
  onOpenSolutionsCentral 
}) => {
  return (
    <section id="case-study" className="px-6 py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Case Studies</h2>
          <p className="mt-3 text-slate-600">In-depth look at how I solve complex problems from end-to-end.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {/* Tile 0: WhatsApp Campaign Manager */}
          <div 
            onClick={onOpenWhatsApp}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full relative"
          >
            <div className="h-56 bg-slate-950 overflow-hidden text-center relative transition-transform border-b border-slate-100">
               <img 
                 src="/whatsapp-campaign-thumbnail.png" 
                 alt="WhatsApp Campaign Manager Case Study Thumbnail" 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
               />
               <div className="absolute top-3 right-3">
                 <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/90 text-white text-xs font-semibold rounded-full shadow-md backdrop-blur-sm">
                   <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                   Live Prototype
                 </span>
               </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-semibold rounded-full w-fit text-sm border border-emerald-100">
                  Product · Integrations · 0 → 1
                </div>
                
                {/* Highlighted 'Try the App' button */}
                <a
                  href="https://whatsapp-campaign-manager-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all ring-1 ring-emerald-400/40"
                  title="Try the live WhatsApp Campaign Manager app"
                >
                  <Smartphone size={14} className="text-emerald-100" />
                  <span>Try the app</span>
                  <ExternalLink size={12} className="opacity-90" />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                WhatsApp Campaign Manager
              </h3>
              <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                Bringing a new messaging channel to a 2M-employee HR-tech platform without moving any client data—from standalone Next.js prototype to native production architecture.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                  0 PII exports
                </span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                  Meta Graph API
                </span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                  GREEN rating
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all text-sm sm:text-base">
                  Read full case study
                  <ArrowRight size={18} />
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                  <ShareButton 
                    url={getCaseStudyUrl('case-study-whatsapp')}
                    variant="card"
                    size="sm"
                    label="Copy Link"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Tile 0: Solutions Central */}
          <div 
            onClick={onOpenSolutionsCentral}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="h-56 bg-white overflow-hidden text-center relative transition-transform border-b border-slate-100">
               <img 
                 src="/solutions-central-thumbnail.jpg" 
                 alt="Solutions Central Case Study Thumbnail" 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
               />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 font-semibold rounded-full w-fit mb-4 text-sm border border-purple-100">
                Solutions Engineering
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                Solutions Central
              </h3>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                Turning a scattered solutions request intake process and Confluence tracker into a unified, self-serve internal platform and Chrome assistant.
              </p>
              <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-2 text-purple-600 font-bold group-hover:gap-3 transition-all text-sm sm:text-base">
                  Read full case study
                  <ArrowRight size={18} />
                </div>
                <ShareButton 
                  url={getCaseStudyUrl('case-study-solutions-central')}
                  variant="card"
                  size="sm"
                  label="Copy Link"
                />
              </div>
            </div>
          </div>

          {/* Tile 1: DishFlow */}
          <div 
            onClick={onOpenDishFlow}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="h-56 bg-white overflow-hidden text-center relative transition-transform border-b border-slate-100">
               <img 
                 src="/dishflow-thumbnail.webp" 
                 alt="DishFlow Inventory Intelligence Platform Thumbnail" 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
               />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-semibold rounded-full w-fit mb-4 text-sm border border-emerald-100">
                Product Strategy & AI Design
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                DishFlow
              </h3>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                An AI-powered restaurant inventory intelligence platform that reduces waste, prevents stockouts, and introduces a predictive reasoning layer for kitchen operations.
              </p>
              <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all text-sm sm:text-base">
                  Read full case study
                  <ArrowRight size={18} />
                </div>
                <ShareButton 
                  url={getCaseStudyUrl('case-study-dishflow')}
                  variant="card"
                  size="sm"
                  label="Copy Link"
                />
              </div>
            </div>
          </div>

          {/* Tile 2: Lead Quality Analysis */}
          <div 
            onClick={onOpenCaseStudy}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="h-56 bg-white overflow-hidden text-center relative transition-transform border-b border-slate-100">
               <img 
                 src="/lead-quality-thumbnail.webp" 
                 alt="Finding the Real Lever Behind Lead Quality Thumbnail" 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
               />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-semibold rounded-full w-fit mb-4 text-sm border border-blue-100">
                Data Analysis Case Study
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Finding the Real Lever Behind Lead Quality
              </h3>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                An investigation into 3,000 leads generated for a debt reduction advertiser, exploring lead quality behavior, conversion drivers, and large-scale improvement opportunities.
              </p>
              <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all text-sm sm:text-base">
                  Read full case study
                  <ArrowRight size={18} />
                </div>
                <ShareButton 
                  url={getCaseStudyUrl('case-study-lead-quality')}
                  variant="card"
                  size="sm"
                  label="Copy Link"
                />
              </div>
            </div>
          </div>

          {/* Tile 3: Breakage Intelligence Lab */}
          <div 
            onClick={onOpenBreakage}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="h-56 bg-white overflow-hidden text-center relative transition-transform border-b border-slate-100">
               <img 
                 src="/breakage-intelligence-thumbnail.webp" 
                 alt="Breakage Intelligence Lab Thumbnail" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 font-semibold rounded-full w-fit mb-4 text-sm border border-teal-100">
                AI Analytics Platform
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                Breakage Intelligence Lab
              </h3>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                Building an embedded, privacy-first AI analytics platform (RedemptionIQ) using FastAPI, DuckDB, and local LLMs to replace manual workflows.
              </p>
              <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-2 text-teal-600 font-bold group-hover:gap-3 transition-all text-sm sm:text-base">
                  Read full case study
                  <ArrowRight size={18} />
                </div>
                <ShareButton 
                  url={getCaseStudyUrl('case-study-breakage')}
                  variant="card"
                  size="sm"
                  label="Copy Link"
                />
              </div>
            </div>
          </div>

          {/* Tile 4: ECG Biometric Identification */}
          <div 
            onClick={onOpenECG}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="h-56 bg-white overflow-hidden text-center relative transition-transform border-b border-slate-100">
               <img 
                 src="/ecg-case-study-thumbnail.webp" 
                 alt="ECG Biometric Identification Thumbnail" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-semibold rounded-full w-fit mb-4 text-sm border border-blue-100">
                Machine Learning Research
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                ECG-based Biometric Identification
              </h3>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                Developing a high-security biometric system using cardiac electrical patterns extracted from the Physionet ECG-ID database.
              </p>
              <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all text-sm sm:text-base">
                  Read full case study
                  <ArrowRight size={18} />
                </div>
                <ShareButton 
                  url={getCaseStudyUrl('case-study-ecg')}
                  variant="card"
                  size="sm"
                  label="Copy Link"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
