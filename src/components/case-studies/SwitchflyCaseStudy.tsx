import React, { useEffect } from 'react';
import { ArrowLeft, Plane, Plug, Users, CheckCircle2, BarChart3 } from 'lucide-react';
import ShareButton from '../ui/ShareButton';
import { getCaseStudyUrl } from '../../utils/routes';

const SwitchflyCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const workstreams = [
    ['Requirements and scope', 'Translate the travel redemption opportunity into a clear integration scope covering the experiences exposed to employees.'],
    ['API discovery and validation', 'Work through API behaviour and integration requirements with the external provider, using request and response testing to clarify dependencies.'],
    ['Cross-functional delivery', 'Coordinate product, engineering, design and partner stakeholders through implementation, QA and release preparation.'],
    ['Launch and feedback', 'Support the rollout and use early feedback and product analytics to identify issues and opportunities for iteration.']
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-inter text-slate-200">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"><ArrowLeft size={18}/> Back to portfolio</button>
          <ShareButton url={getCaseStudyUrl('case-study-switchfly')} variant="dark" size="sm" label="Share case study"/>
        </div>
      </nav>
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32">
        <header className="mb-16">
          <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <span className="rounded-full border border-sky-800 bg-sky-950/50 px-3 py-1">Enterprise integration</span>
            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">Travel and experiences</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">Switchfly Integration</h1>
          <p className="max-w-3xl border-l-4 border-sky-500 pl-5 text-xl leading-relaxed text-slate-300 sm:text-2xl">Expanding an employee rewards platform with travel options through a third-party integration.</p>
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:grid-cols-3">
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Company</p><p className="mt-1 font-semibold text-white">Vantage Circle</p></div>
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Integration partner</p><p className="mt-1 font-semibold text-white">Switchfly</p></div>
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Product scope</p><p className="mt-1 font-semibold text-white">Hotels · Cars · Activities</p></div>
          </div>
        </header>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">01 · The opportunity</p>
          <h2 className="mb-5 text-3xl font-bold text-white">Make travel part of the rewards experience</h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-300">
            <p>The integration brought travel inventory — including hotels, car rentals and activities — into the employee rewards experience. The product challenge was not simply connecting an API; it was making an external travel experience fit naturally into an existing platform and redemption journey.</p>
            <p>That meant understanding provider capabilities, clarifying the experience and data requirements, and coordinating the work needed to move from integration discovery to a tested release.</p>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">02 · My contribution</p>
          <h2 className="mb-6 text-3xl font-bold text-white">Connecting product requirements with integration delivery</h2>
          <div className="space-y-4">
            {workstreams.map(([title, description], index) => (
              <div key={title} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-950 text-sm font-bold text-sky-300">{index + 1}</span>
                <div><h3 className="mb-2 font-semibold text-white">{title}</h3><p className="text-sm leading-relaxed text-slate-400">{description}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">03 · Product and technical considerations</p>
          <h2 className="mb-5 text-3xl font-bold text-white">The details that make an integration feel like one product</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6"><Plug className="mb-3 text-sky-300" size={24}/><h3 className="mb-2 font-semibold text-white">API contracts and dependencies</h3><p className="text-sm leading-relaxed text-slate-400">Validate provider responses, required fields, authentication and error handling before relying on the integration in the user journey.</p></div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6"><Plane className="mb-3 text-sky-300" size={24}/><h3 className="mb-2 font-semibold text-white">Consistent travel experience</h3><p className="text-sm leading-relaxed text-slate-400">Consider how search, selection and redemption should behave alongside the platform's existing rewards and recognition features.</p></div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6"><Users className="mb-3 text-sky-300" size={24}/><h3 className="mb-2 font-semibold text-white">Partner coordination</h3><p className="text-sm leading-relaxed text-slate-400">Keep internal teams and the external provider aligned on requirements, blockers, testing and release readiness.</p></div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6"><CheckCircle2 className="mb-3 text-sky-300" size={24}/><h3 className="mb-2 font-semibold text-white">Quality and rollout</h3><p className="text-sm leading-relaxed text-slate-400">Validate critical user paths and edge cases before making the experience available to clients.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">04 · What this work demonstrates</p>
          <h2 className="mb-5 text-3xl font-bold text-white">Technical product management is often about managing the seams</h2>
          <p className="max-w-3xl leading-relaxed text-slate-300">Third-party integrations sit between systems, teams and user expectations. This work demonstrates the importance of translating provider capabilities into product requirements, making dependencies visible and keeping delivery focused on the complete customer experience — not just a successful API call.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full bg-slate-800 px-3 py-2"><Plug size={14} className="mr-2 inline"/>API integration</span>
            <span className="rounded-full bg-slate-800 px-3 py-2"><Users size={14} className="mr-2 inline"/>Stakeholder coordination</span>
            <span className="rounded-full bg-slate-800 px-3 py-2"><BarChart3 size={14} className="mr-2 inline"/>Launch measurement</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SwitchflyCaseStudy;
