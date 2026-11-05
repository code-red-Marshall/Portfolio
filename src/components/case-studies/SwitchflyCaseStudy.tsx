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
    <div className="min-h-screen bg-[#f4f2ed] font-inter text-[#17221f]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#d8dbd3] bg-[#f4f2ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-[#59665f] hover:text-[#17221f]"><ArrowLeft size={18}/> Back to portfolio</button>
          <ShareButton url={getCaseStudyUrl('case-study-switchfly')} variant="ghost" size="sm" label="Share case study"/>
        </div>
      </nav>
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32">
        <header className="mb-16">
          <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-sky-800">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1">Enterprise integration</span>
            <span className="rounded-full border border-[#c8cec5] bg-white px-3 py-1">Travel and experiences</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#17221f] sm:text-6xl">Switchfly Integration</h1>
          <p className="max-w-3xl border-l-4 border-sky-500 pl-5 text-xl leading-relaxed text-[#59665f] sm:text-2xl">Expanding an employee rewards platform with travel options through a third-party integration.</p>
          <div className="mt-8 grid gap-4 rounded-2xl border border-[#d8dbd3] bg-white p-6 sm:grid-cols-3">
            <div><p className="text-xs uppercase tracking-wider text-[#718077]">Company</p><p className="mt-1 font-semibold text-[#17221f]">Vantage Circle</p></div>
            <div><p className="text-xs uppercase tracking-wider text-[#718077]">Integration partner</p><p className="mt-1 font-semibold text-[#17221f]">Switchfly</p></div>
            <div><p className="text-xs uppercase tracking-wider text-[#718077]">Product scope</p><p className="mt-1 font-semibold text-[#17221f]">Hotels · Cars · Activities</p></div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#d8dbd3] bg-white p-5">
              <p className="text-3xl font-bold tracking-tight text-[#17221f]">$14K+</p>
              <p className="mt-1 text-sm text-[#66736c]">Revenue impact from the travel experience integration.</p>
            </div>
            <div className="rounded-xl border border-[#d8dbd3] bg-white p-5">
              <p className="text-3xl font-bold tracking-tight text-[#17221f]">+17%</p>
              <p className="mt-1 text-sm text-[#66736c]">Redemption adoption for the travel experience.</p>
            </div>
          </div>
        </header>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">01 · The opportunity</p>
          <h2 className="mb-5 text-3xl font-bold text-[#17221f]">Make travel part of the rewards experience</h2>
          <div className="space-y-4 text-lg leading-relaxed text-[#59665f]">
            <p>The integration aimed to bring travel inventory — including hotels, car rentals and activities — into the employee rewards experience. The product challenge was not simply connecting an API; it was making an external travel experience fit naturally into an existing platform and redemption journey.</p>
            <p>My contribution was to connect provider capabilities to requirements, API validation, QA and release coordination. I worked within a cross-functional delivery team rather than claiming sole ownership of the implementation.</p>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">02 · My contribution</p>
          <h2 className="mb-6 text-3xl font-bold text-[#17221f]">Connecting product requirements with integration delivery</h2>
          <div className="space-y-4">
            {workstreams.map(([title, description], index) => (
              <div key={title} className="flex gap-4 rounded-xl border border-[#d8dbd3] bg-white p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-950 text-sm font-bold text-sky-800">{index + 1}</span>
                <div><h3 className="mb-2 font-semibold text-[#17221f]">{title}</h3><p className="text-sm leading-relaxed text-[#66736c]">{description}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">03 · Product and technical considerations</p>
          <h2 className="mb-5 text-3xl font-bold text-[#17221f]">The details that make an integration feel like one product</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[#d8dbd3] bg-white p-6"><Plug className="mb-3 text-sky-800" size={24}/><h3 className="mb-2 font-semibold text-[#17221f]">API contracts and dependencies</h3><p className="text-sm leading-relaxed text-[#66736c]">Validate provider responses, required fields, authentication and error handling before relying on the integration in the user journey.</p></div>
            <div className="rounded-xl border border-[#d8dbd3] bg-white p-6"><Plane className="mb-3 text-sky-800" size={24}/><h3 className="mb-2 font-semibold text-[#17221f]">Consistent travel experience</h3><p className="text-sm leading-relaxed text-[#66736c]">Consider how search, selection and redemption should behave alongside the platform's existing rewards and recognition features.</p></div>
            <div className="rounded-xl border border-[#d8dbd3] bg-white p-6"><Users className="mb-3 text-sky-800" size={24}/><h3 className="mb-2 font-semibold text-[#17221f]">Partner coordination</h3><p className="text-sm leading-relaxed text-[#66736c]">Keep internal teams and the external provider aligned on requirements, blockers, testing and release readiness.</p></div>
            <div className="rounded-xl border border-[#d8dbd3] bg-white p-6"><CheckCircle2 className="mb-3 text-sky-800" size={24}/><h3 className="mb-2 font-semibold text-[#17221f]">Quality and rollout</h3><p className="text-sm leading-relaxed text-[#66736c]">Validate critical user paths and edge cases before making the experience available to clients.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#d8dbd3] bg-white p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">04 · What this work demonstrates</p>
          <h2 className="mb-5 text-3xl font-bold text-[#17221f]">Making a partner integration usable within an existing product</h2>
          <p className="max-w-3xl leading-relaxed text-[#59665f]">Third-party integrations sit between systems, teams and user expectations. This work demonstrates the importance of translating provider capabilities into product requirements, making dependencies visible and keeping delivery focused on the complete customer experience — not just a successful API call.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#59665f]">
            <span className="rounded-full bg-[#e9ebe4] px-3 py-2"><Plug size={14} className="mr-2 inline"/>API integration</span>
            <span className="rounded-full bg-[#e9ebe4] px-3 py-2"><Users size={14} className="mr-2 inline"/>Stakeholder coordination</span>
            <span className="rounded-full bg-[#e9ebe4] px-3 py-2"><BarChart3 size={14} className="mr-2 inline"/>Launch measurement</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SwitchflyCaseStudy;
