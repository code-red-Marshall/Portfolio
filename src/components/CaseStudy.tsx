import React from 'react';
import { ArrowRight, ExternalLink, Smartphone } from 'lucide-react';
import ShareButton from './ui/ShareButton';
import { getCaseStudyUrl } from '../utils/routes';

interface CaseStudyProps {
  onOpenWhatsApp?: () => void;
  onOpenSwitchfly?: () => void;
  onOpenCaseStudy: () => void;
  onOpenBreakage?: () => void;
  onOpenECG?: () => void;
  onOpenDishFlow?: () => void;
  onOpenSolutionsCentral?: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ 
  onOpenWhatsApp,
  onOpenSwitchfly,
  onOpenCaseStudy, 
  onOpenBreakage, 
  onOpenECG, 
  onOpenDishFlow,
  onOpenSolutionsCentral 
}) => {
  return (
    <section id="case-study" className="bg-[#f4f2ed] px-6 py-20 text-[#17221f] lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-6 border-t border-[#d3d5cc] pt-8 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#718077]">Case studies / selected deep dives</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[#17221f]">The thinking behind the work.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#66736c] md:justify-self-end">Detailed examples of enterprise product delivery, applied AI and technical problem-solving.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 w-full">
          {/* Tile 0: WhatsApp Campaign Manager */}
          <div 
            onClick={onOpenWhatsApp}
            className="group relative flex cursor-pointer flex-col rounded-2xl border border-[#d9ddd4] bg-[#f8f7f2] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#aab8aa] hover:shadow-md"
          >
            <div className="relative aspect-[16/5] w-full overflow-hidden rounded-xl bg-[#0B2E21] ring-1 ring-[#d8dbd3]">
               <img
                 src="/whatsapp-case-study-banner.svg"
                 alt="WhatsApp Campaign Manager Case Study Thumbnail"
                 loading="lazy"
                 decoding="async"
                 className="absolute inset-0 h-full w-full object-cover"
               />
               <div className="absolute top-3 right-3">
                 <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/90 text-white text-xs font-semibold rounded-full shadow-md backdrop-blur-sm">
                   <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                   Production module
                 </span>
               </div>
            </div>
            
            <div className="flex flex-1 flex-col pt-4">
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
                  title="Explore the WhatsApp Campaign Manager prototype"
                >
                  <Smartphone size={14} className="text-emerald-100" />
                  <span>Explore prototype</span>
                  <ExternalLink size={12} className="opacity-90" />
                </a>
              </div>

              <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#17221f] mb-3 group-hover:text-emerald-600 transition-colors">
                WhatsApp Campaign Manager
              </h3>
              <p className="text-[13px] leading-5 text-[#66736c] mb-3 flex-1">
                Adding a WhatsApp campaign workflow to an enterprise HR-tech platform, from early prototype to native production module.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                  Native production module
                </span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                  Meta Graph API
                </span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                  Meta integration
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 pt-4 border-t border-[#d8dbd3] mt-auto">
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
            className="group flex cursor-pointer flex-col rounded-2xl border border-[#d9ddd4] bg-[#f8f7f2] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#aab8aa] hover:shadow-md"
          >
            <div className="aspect-[16/9] max-h-[190px] overflow-hidden rounded-xl bg-[#e3e5dc] ring-1 ring-[#d8dbd3]">
               <img 
                 src="/solutions-central-thumbnail.jpg" 
                 alt="Solutions Central Case Study Thumbnail" 
                 loading="lazy"
                 decoding="async"
                 className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
               />
            </div>
            
            <div className="flex flex-1 flex-col pt-4">
              <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 font-semibold rounded-full w-fit mb-4 text-sm border border-purple-100">
                Solutions Engineering
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                Solutions Central
              </h3>
              <p className="text-[13px] leading-5 text-[#66736c] mb-3 flex-1">
                An internal product built for the Solutions Engineering team, connecting request intake, project tracking, knowledge search and in-workflow assistance.
              </p>
              <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#d8dbd3] mt-auto">
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

          {/* Tile 3: Breakage Intelligence Lab */}
          <div 
            onClick={onOpenBreakage}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="aspect-[16/9] max-h-[190px] overflow-hidden rounded-xl bg-[#e3e5dc] ring-1 ring-[#d8dbd3]">
               <img 
                 src="/breakage-intelligence-thumbnail.webp" 
                 alt="Breakage Intelligence Lab Thumbnail" 
                 className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
               />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 font-semibold rounded-full w-fit mb-4 text-sm border border-teal-100">
                AI Analytics Platform
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                Breakage Intelligence Lab
              </h3>
              <p className="text-[13px] leading-5 text-[#66736c] mb-3 flex-1">
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


          {/* Switchfly Integration */}
          <div
            onClick={onOpenSwitchfly}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="aspect-[16/9] max-h-[190px] overflow-hidden rounded-xl bg-[#e3e5dc] ring-1 ring-[#d8dbd3]">
              <img src="/Project 1.webp" alt="Switchfly travel integration" loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="inline-block px-3 py-1 bg-sky-50 text-sky-700 font-semibold rounded-full w-fit mb-4 text-sm border border-sky-100">Enterprise integration</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">Switchfly Integration</h3>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">Expanding an employee rewards platform with travel options through a third-party integration.</p>
              <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">Read full case study <ArrowRight size={18}/></div>
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
                 className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
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
