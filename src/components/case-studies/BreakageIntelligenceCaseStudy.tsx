import React, { useEffect } from 'react';
import { ArrowLeft, Database, ShieldCheck, BarChart3, MessageSquareText, Workflow } from 'lucide-react';
import ShareButton from '../ui/ShareButton';
import { getCaseStudyUrl } from '../../utils/routes';

const BreakageIntelligenceCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const capabilities = [
    ['Data preparation', 'Bring transaction exports into a consistent analytical structure, with cleaning and preparation steps before analysis.'],
    ['Cohort analysis', 'Explore activation, redemption and breakage patterns across useful dimensions.'],
    ['Interactive reporting', 'Present key trends in a dashboard designed to help product and business teams investigate questions.'],
    ['Natural-language exploration', 'Experiment with a local language model as an interface for asking questions about the available data.']
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-inter text-slate-700">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950"><ArrowLeft size={18}/> Back to portfolio</button>
          <ShareButton url={getCaseStudyUrl('case-study-breakage')} variant="ghost" size="sm" label="Share case study"/>
        </div>
      </nav>
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32">
        <header className="mb-16">
          <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
            <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1">Applied AI</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Analytics product</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Breakage Intelligence Lab</h1>
          <p className="max-w-3xl border-l-4 border-teal-500 pl-5 text-xl leading-relaxed text-slate-600 sm:text-2xl">An applied AI analytics prototype exploring how redemption data can support clearer product and business decisions.</p>
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-3">
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Product context</p><p className="mt-1 font-semibold text-slate-900">Redemption analytics</p></div>
            <div><p className="text-xs uppercase tracking-wider text-slate-500">My focus</p><p className="mt-1 font-semibold text-slate-900">Analytics and AI implementation</p></div>
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Technology</p><p className="mt-1 font-semibold text-slate-900">FastAPI · DuckDB · React · Ollama</p></div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <img src="/breakage-intelligence-thumbnail.webp" alt="Breakage Intelligence analytics product" className="h-auto w-full object-cover"/>
          </div>
        </header>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">01 · The problem</p>
          <h2 className="mb-5 text-3xl font-bold text-slate-950">Making redemption behaviour easier to understand</h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>Redemption and activation data can contain useful signals about customer behaviour, operational performance and product opportunities. But extracting those signals from raw exports often requires data preparation, spreadsheet work and repeated analytical queries.</p>
            <p>I framed this as a product workflow problem: bring preparation, cohort analysis, reporting and question-answering closer together, while making the provenance of analytical results clear. The work demonstrates a technical product approach, not a verified production rollout.</p>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">02 · The approach</p>
          <h2 className="mb-6 text-3xl font-bold text-slate-950">An analytics workflow with an AI-assisted interface</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map(([title, description]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">03 · Technical design</p>
          <h2 className="mb-5 text-3xl font-bold text-slate-950">Keep the analytical path structured</h2>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-600">I separated deterministic calculations in the data and query layers from the language-model interface used to interpret user questions. That choice limits the model's authority over numerical results: the LLM helps navigate analysis, while structured operations remain responsible for calculations.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5"><Database className="mb-3 text-teal-700" size={24}/><h3 className="font-semibold text-slate-950">Data layer</h3><p className="mt-1 text-sm text-slate-600">Preparation and analytical querying.</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-5"><BarChart3 className="mb-3 text-teal-700" size={24}/><h3 className="font-semibold text-slate-950">Visual layer</h3><p className="mt-1 text-sm text-slate-600">Dashboards and cohort views.</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-5"><MessageSquareText className="mb-3 text-teal-700" size={24}/><h3 className="font-semibold text-slate-950">AI interface</h3><p className="mt-1 text-sm text-slate-600">Natural-language access to analysis.</p></div>
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">04 · Product takeaways</p>
          <h2 className="mb-5 text-3xl font-bold text-slate-950">AI should make analysis easier, not less trustworthy</h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-slate-600">This project explores an important AI product trade-off: natural-language interfaces can make analytics more approachable, but the underlying numbers still need to come from transparent, testable data operations. The interface should help users ask better questions while preserving confidence in the results.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div><ShieldCheck className="mb-2 text-teal-700" size={22}/><h3 className="font-semibold text-slate-950">Trust</h3><p className="mt-1 text-sm text-slate-600">Ground answers in structured data.</p></div>
            <div><Workflow className="mb-2 text-teal-700" size={22}/><h3 className="font-semibold text-slate-950">Usability</h3><p className="mt-1 text-sm text-slate-600">Reduce friction in analytical workflows.</p></div>
            <div><BarChart3 className="mb-2 text-teal-700" size={22}/><h3 className="font-semibold text-slate-950">Decision support</h3><p className="mt-1 text-sm text-slate-600">Help teams move from data to questions worth investigating.</p></div>
          </div>
        </section>

        <section className="border-t border-slate-200 pt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Measurement</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">Outcomes to validate</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">This is presented as an applied AI analytics build, not as a deployed product with proven adoption or productivity gains. Dataset scale, latency and time-saved results can be added with their evaluation context once those details are confirmed.</p>
        </section>
      </main>
    </div>
  );
};

export default BreakageIntelligenceCaseStudy;
