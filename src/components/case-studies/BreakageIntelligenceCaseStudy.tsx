import React, { useEffect } from 'react';
import { 
  ArrowLeft, Lock, Database, Search, Cpu, Box, 
  AlertTriangle, CheckCircle, TrendingUp, Zap, Clock, Shield 
} from 'lucide-react';

const BreakageIntelligenceCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

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

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-inter pb-20 text-slate-600">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </nav>

      <article className="pt-32 px-6 max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="mb-20 animate-fade-in">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 font-semibold tracking-wide rounded-full text-sm border border-teal-200">
              AI Analytics Platform
            </div>
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold tracking-wide rounded-full text-sm border border-blue-200">
              Case Study
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Breakage Intelligence Lab <span className="text-teal-600 block md:inline mt-2 md:mt-0">(RedemptionIQ)</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 font-light border-l-4 border-teal-500 pl-6 leading-relaxed">
            Building a Privacy-First AI Analytics Platform for Gift Card Intelligence
          </p>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                <Shield className="text-teal-600" size={20}/> 
                Project Details
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li><strong className="text-slate-900">Role:</strong> AI & Analytics Developer</li>
                <li><strong className="text-slate-900">Organization:</strong> Vantage Circle</li>
                <li><strong className="text-slate-900">Deployment:</strong> V3.0 (March 2026)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                <Database className="text-teal-600" size={20}/> 
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind CSS', 'FastAPI', 'DuckDB', 'Ollama (Llama 3)', 'Recharts'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* 1. Project Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Project Overview</h2>
          <div className="prose prose-slate max-w-none text-lg leading-relaxed text-slate-600">
            <p>
              Breakage Intelligence Lab, internally called <strong>RedemptionIQ</strong>, is a privacy-first AI analytics platform designed to help Product Managers analyze gift card redemption and activation behavior.
            </p>
            <p className="mt-4">
              The platform automates data ingestion, cohort analysis, and reporting while allowing users to query analytics through a <strong>natural language AI interface</strong>.
            </p>
            <div className="bg-teal-50 border border-teal-100 p-6 rounded-xl mt-6">
              <p className="text-teal-800 font-medium m-0 flex gap-3 items-start">
                <Lock className="shrink-0 mt-1" size={20} />
                <span>The system runs <strong>entirely on-premises</strong>, ensuring full data sovereignty and eliminating the need for external analytics vendors.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 2. The Problem */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">The Problem</h2>
          <p className="text-lg text-slate-600 mb-8">
            Product Managers responsible for the gift card business faced several operational challenges:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Box className="text-rose-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Fragmented Data Sources</h3>
              <p className="text-slate-600 text-sm">
                Transaction data existed across multiple internal systems. PMs had to download monthly server dumps from three different sources and manually merge them.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Clock className="text-amber-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Slow Manual Analysis</h3>
              <p className="text-slate-600 text-sm">
                Creating cohort-based pivot tables in Excel took <strong>3–4 hours every month</strong>, delaying important product decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <AlertTriangle className="text-red-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Data Security Risks</h3>
              <p className="text-slate-600 text-sm">
                Uploading sensitive employee reward data into external BI platforms violated internal governance policies and created privacy risks.
              </p>
            </div>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-slate-900 font-semibold mb-3">The Need:</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Automate analytics workflows</li>
              <li>Provide fast insights</li>
              <li>Maintain <strong className="text-slate-900">complete control over sensitive data</strong></li>
            </ul>
          </div>
        </section>

        {/* 3. The Solution */}
        <section className="mb-20 relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">The Solution</h2>
          
          <p className="text-lg text-slate-600 mb-8">
            I built <strong>RedemptionIQ</strong>, an internal AI-powered analytics platform designed to run entirely within the company’s infrastructure.
          </p>

          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Zap className="text-teal-600" size={24} /> Automated Pipeline
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'Ingests raw transaction dumps',
                'Cleans and deduplicates data',
                'Engineers analytical features',
                'Generates cohort analytics',
                'Serves dashboards in under 100ms'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="text-teal-600 shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-slate-900 font-semibold flex items-center gap-2">
                <Cpu className="text-blue-600" size={20} /> AI Query Interface
              </h3>
              <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200">Llama 3 (Ollama)</span>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">
                To improve accessibility for Product Managers, the platform includes an <strong>AI chat interface</strong> powered by Llama 3 running locally, enabling users to ask questions in plain English and receive instant visual insights.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg rounded-tl-none inline-block max-w-[80%] relative">
                  <div className="absolute -left-2 -top-px w-4 h-4 bg-blue-50 border-t border-l border-blue-100 skew-x-[45deg] origin-top-left align-top"></div>
                  <p className="text-blue-900 font-medium m-0">"What is the activation rate by region?"</p>
                </div>
                <div className="flex justify-end">
                  <div className="bg-teal-50 border border-teal-100 p-4 rounded-lg rounded-tr-none inline-block max-w-[80%] text-right relative">
                     <p className="text-teal-900 m-0 font-medium whitespace-pre-line text-left">Generated cohort bar chart for [Region]. \nInsights: NA region leads with 98%...</p>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg rounded-tl-none inline-block max-w-[80%]">
                  <p className="text-blue-900 font-medium m-0">"Show breakage trends for the last three months."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. System Architecture */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">System Architecture</h2>
          <p className="text-lg text-slate-600 mb-10">
            The platform was designed around a <strong>multi-layer architecture optimized for performance, security, and local execution.</strong>
          </p>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Frontend — React / Next.js</h3>
              <p className="text-slate-600 mb-4">The user interface provides an executive-style analytics dashboard with:</p>
              <ul className="flex flex-wrap gap-3">
                {['KPI cards', 'Cohort matrices', 'Interactive charts', 'AI chat interface'].map(i => (
                  <li key={i} className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700 font-medium">{i}</li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mt-4 italic">The UI originally followed a dark theme but has been adapted perfectly for accessibility and consistency.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Backend API — FastAPI</h3>
              <p className="text-slate-600 mb-4">The backend orchestrates the analytics pipeline and handles:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>File ingestion (CSV / XLSX)</li>
                <li>Data validation & Feature engineering</li>
                <li>API endpoints serving analytics results</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-amber-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Analytical Engine — DuckDB</h3>
                <p className="text-slate-600 text-sm">
                  DuckDB was used as the embedded analytical database. This allowed heavy SQL aggregations to run instantly without loading the entire dataset into Pandas, significantly improving performance and reducing memory usage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-purple-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pre-Computation Layer</h3>
                <p className="text-slate-600 text-sm">
                  To guarantee fast dashboard performance, the system pre-computes cohort analytics immediately after file ingestion. These results are stored as cached JSON responses, enabling <strong>sub-100ms dashboard load times.</strong>
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 p-8 rounded-xl border border-teal-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Intent-Parsing AI Query Interface</h3>
              <p className="text-slate-700 mb-6">
                Instead of allowing the model to generate raw SQL directly, the system uses an <strong>intent-parsing architecture</strong> that ensures determinism and security:
              </p>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                <div className="bg-white shadow-sm p-4 rounded-lg w-full md:w-1/4 border border-slate-200 font-medium text-slate-700">1. User asks question</div>
                <ArrowLeft className="rotate-[-90deg] md:rotate-180 text-teal-600 shrink-0" />
                <div className="bg-white shadow-sm p-4 rounded-lg w-full md:w-1/4 border border-slate-200 font-medium text-slate-700">2. Intent parser extracts metric & dimension</div>
                 <ArrowLeft className="rotate-[-90deg] md:rotate-180 text-teal-600 shrink-0" />
                <div className="bg-white shadow-sm p-4 rounded-lg w-full md:w-1/4 border border-slate-200 font-medium text-slate-700">3. Query builder generates safe SQL schema</div>
                 <ArrowLeft className="rotate-[-90deg] md:rotate-180 text-teal-600 shrink-0" />
                <div className="bg-teal-50 shadow-sm p-4 rounded-lg w-full md:w-1/4 border border-teal-200 text-teal-700 font-bold">4. Visual Results returned</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Responsible AI & Security */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Responsible AI & Security Design</h2>
          <p className="text-lg text-slate-600 mb-8">
            Because the system processes sensitive employee reward data, strict AI governance controls were implemented.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 border border-red-100">
                <Shield className="text-red-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">No Raw SQL from LLM</h3>
              <p className="text-slate-600 text-sm">
                The AI model is not allowed to generate SQL directly. It converts user queries into structured function calls using a deterministic query builder.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 border border-blue-100">
                <Lock className="text-blue-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Privacy by Design</h3>
              <p className="text-slate-600 text-sm">
                The entire system runs <strong>fully offline</strong>. No external APIs, no cloud-models. Llama 3 runs locally via Ollama. Raw data never leaves the internal network.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 border border-teal-100">
                <Search className="text-teal-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Human in the Loop</h3>
              <p className="text-slate-600 text-sm">
                 The AI acts purely as an analytics assistant. It provides insights and source metrics but <strong>does not trigger automated decisions</strong>, keeping final actions under human control.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Technical Challenge */}
        <section className="mb-20 bg-amber-50 border border-amber-200 p-8 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl"></div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="text-amber-500" /> Technical Challenge: The March 2026 Data Cascade
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-amber-800 font-bold mb-2">The Problem</h3>
              <p className="text-slate-700">
                While scaling the system to <strong>18,582 transactions</strong>, deduplication logic began failing, and currency normalization broke. The root cause was traced to a single ingestion step where Python’s `str.title()` function unexpectedly altered column names (<code className="bg-amber-100 px-2 py-0.5 rounded text-amber-900 text-sm font-semibold border border-amber-200">Reference ID → Reference Id</code>). This broke all downstream transformations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-sm">
                <h3 className="text-amber-800 font-bold mb-2 flex items-center gap-2"><Lock size={16}/> The Solution</h3>
                <ul className="list-disc list-inside text-slate-700 text-sm space-y-2">
                  <li>Replaced dynamic title-casing with a <strong>canonical column mapping dictionary</strong> specifying exact schema names.</li>
                  <li>Enforced strict currency normalization: map FX for calculations, but <strong>never overwrite original raw currency values</strong>.</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-xl border border-teal-200 shadow-sm">
                 <h3 className="text-teal-700 font-bold mb-2 flex items-center gap-2"><CheckCircle size={16}/> The Result</h3>
                 <p className="text-slate-700 text-sm">
                   Restored accurate deduplication and enabled consistent cross-currency normalization across <strong>9 global currencies</strong> (including USD and INR).
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Business Impact */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Business Impact</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-sm p-6 rounded-xl border border-slate-200 text-center">
              <TrendingUp className="text-teal-500 mx-auto mb-4" size={32} />
              <div className="text-3xl font-bold text-slate-900 mb-2">4 hrs</div>
              <div className="text-slate-600 text-sm font-medium">Saved per month by eliminating Excel workflows</div>
            </div>
            <div className="bg-white shadow-sm p-6 rounded-xl border border-slate-200 text-center">
               <Zap className="text-amber-500 mx-auto mb-4" size={32} />
               <div className="text-3xl font-bold text-slate-900 mb-2">&lt;100ms</div>
               <div className="text-slate-600 text-sm font-medium">Dashboard and query load times</div>
            </div>
            <div className="bg-white shadow-sm p-6 rounded-xl border border-slate-200 text-center">
               <Database className="text-blue-500 mx-auto mb-4" size={32} />
               <div className="text-3xl font-bold text-slate-900 mb-2">65.8M</div>
               <div className="text-slate-600 text-sm font-medium">Redeemed points analyzed across 18k records</div>
            </div>
             <div className="bg-white shadow-sm p-6 rounded-xl border border-slate-200 text-center">
               <Shield className="text-purple-500 mx-auto mb-4" size={32} />
               <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
               <div className="text-slate-600 text-sm font-medium">Data sovereignty and privacy compliance</div>
            </div>
          </div>
        </section>

        {/* 8. Roadmap & Takeaways */}
        <section className="mb-20 grid md:grid-cols-2 gap-10">
           <div>
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Future Roadmap</h2>
             <div className="space-y-6">
               <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="text-slate-900 font-bold mb-2 text-lg">Real-Time Data Pipelines</h3>
                 <p className="text-slate-600 text-sm">Transitioning from batch file uploads to streaming ingestion pipelines.</p>
               </div>
               <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="text-slate-900 font-bold mb-3 text-lg">Two-Agent Architecture</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded border border-slate-200">
                      <strong className="text-blue-600 block text-sm mb-1 font-bold">Analytics Agent</strong>
                      <span className="text-slate-600 text-xs">Handles quantitative queries & math</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded border border-slate-200">
                      <strong className="text-purple-600 block text-sm mb-1 font-bold">Narrative Agent</strong>
                      <span className="text-slate-600 text-xs">Translates findings for executives</span>
                    </div>
                 </div>
               </div>
             </div>
           </div>
           
           <div>
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Takeaways</h2>
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
               <div className="border-l-4 border-teal-500 pl-4 py-1 mb-6 bg-teal-50/50 rounded-r-lg">
                 <p className="text-slate-700 italic font-medium">
                   This project demonstrates my ability to design and implement <strong>AI-powered analytics systems that balance performance, usability, and data governance.</strong>
                 </p>
               </div>
               <h3 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Core Capabilities Demonstrated:</h3>
               <ul className="space-y-3">
                 {[
                   'Data pipeline engineering',
                   'Embedded analytics architecture',
                   'Responsible AI & Security design',
                   'LLM integration with deterministic guardrails',
                   'Business-focused data product development'
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 text-slate-600">
                     <CheckCircle className="text-teal-600 shrink-0" size={20} />
                     <span className="font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
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
};

export default BreakageIntelligenceCaseStudy;
