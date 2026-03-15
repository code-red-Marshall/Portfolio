import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  onOpenCaseStudy: () => void;
  onOpenBreakage?: () => void;
  onOpenECG?: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onOpenCaseStudy, onOpenBreakage, onOpenECG }) => {
  return (
    <section id="case-study" className="px-6 py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Case Studies</h2>
          <p className="mt-3 text-slate-600">In-depth look at how I solve complex problems from end-to-end.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Tile 1: Lead Quality Analysis */}
          <div 
            onClick={onOpenCaseStudy}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="h-56 bg-white overflow-hidden text-center relative transition-transform border-b border-slate-100">
               <img 
                 src="/lead-quality-thumbnail.png" 
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
              <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all mt-auto">
                Read full case study
                <ArrowRight size={20} />
              </div>
            </div>
          </div>

          {/* Tile 2: Breakage Intelligence Lab */}
          <div 
            onClick={onOpenBreakage}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="h-56 bg-white overflow-hidden text-center relative transition-transform border-b border-slate-100">
               <img 
                 src="/breakage-intelligence-thumbnail.png" 
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
              <div className="flex items-center gap-2 text-teal-600 font-bold group-hover:gap-4 transition-all mt-auto">
                Read full case study
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
          {/* Tile 3: ECG Biometric Identification */}
          <div 
            onClick={onOpenECG}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col w-full"
          >
            <div className="h-56 bg-white overflow-hidden text-center relative transition-transform border-b border-slate-100">
               <img 
                 src="/ecg-case-study-thumbnail.png" 
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
              <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all mt-auto">
                Read full case study
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
