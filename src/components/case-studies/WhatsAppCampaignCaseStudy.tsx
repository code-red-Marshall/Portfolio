import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, MessageCircle, ShieldCheck, Workflow, Database, Layers, CheckCircle2 } from 'lucide-react';
import ShareButton from '../ui/ShareButton';
import { getCaseStudyUrl } from '../../utils/routes';

const PROTOTYPE_URL = 'https://whatsapp-campaign-manager-eta.vercel.app/';

const WhatsAppCampaignCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productionDecisions = [
    {
      title: 'Build inside the existing product',
      description: 'The production experience belongs in the native Campaign Manager, built with the existing Play Framework and Scala stack. This keeps the workflow close to the platform capabilities it depends on.'
    },
    {
      title: 'Keep employee data within the platform',
      description: 'Rather than making exported audience files the foundation of the production workflow, the design keeps audience selection and campaign execution within the existing product environment.'
    },
    {
      title: 'Design for the full campaign lifecycle',
      description: 'The experience needs to support more than sending a message: template preparation, audience selection, campaign setup, dispatch visibility and delivery-status updates all form one workflow.'
    }
  ];

  const capabilities = [
    'WhatsApp template creation and review',
    'Audience selection and campaign setup',
    'Meta WhatsApp Business Platform integration',
    'Campaign dispatch and delivery-status tracking',
    'Webhook-based status updates',
    'Opt-out and privacy-aware campaign handling'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-inter">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-4">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
            <ArrowLeft size={18} /> Back to portfolio
          </button>
          <ShareButton url={getCaseStudyUrl('case-study-whatsapp')} variant="dark" size="sm" label="Share" />
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32">
        <header className="mb-16">
          <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <span className="rounded-full border border-emerald-800 bg-emerald-950/60 px-3 py-1">Enterprise SaaS</span>
            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">Product delivery</span>
            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">Integrations</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">WhatsApp Campaign Manager</h1>
          <p className="max-w-3xl border-l-4 border-emerald-500 pl-5 text-xl leading-relaxed text-slate-300 sm:text-2xl">
            Bringing WhatsApp campaigns into an enterprise platform while keeping the experience connected to the systems that already manage employee data.
          </p>
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:grid-cols-3">
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Company</p><p className="mt-1 font-semibold text-white">Vantage Circle</p></div>
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Production technology</p><p className="mt-1 font-semibold text-white">Play Framework · Scala</p></div>
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Integration</p><p className="mt-1 font-semibold text-white">Meta WhatsApp Business Platform</p></div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <img src="/whatsapp-campaign-thumbnail.png" alt="WhatsApp Campaign Manager product overview" className="h-auto w-full object-cover" />
          </div>
        </header>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">01 · The opportunity</p>
          <h2 className="mb-5 text-3xl font-bold text-white">A new channel, without creating a new data problem</h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-300">
            <p>WhatsApp offered a useful additional channel for employee communications and promotional campaigns. But introducing it into a multi-tenant HR technology platform raised a product question beyond the integration itself: how could campaign teams use the channel without creating unnecessary copies or movement of client employee data?</p>
            <p>The challenge was to make the workflow straightforward for campaign operators while respecting the platform's existing data boundaries and operational model.</p>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">02 · From prototype to production</p>
          <h2 className="mb-5 text-3xl font-bold text-white">Use a prototype to explore; use the native platform to ship</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-300"><Layers size={17}/> Exploration prototype</span>
              <h3 className="mb-3 text-xl font-semibold text-white">Next.js + Supabase</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-400">A standalone prototype helped explore the operator journey, Meta integration, template workflows, audience setup and delivery feedback.</p>
              <a href={PROTOTYPE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200">
                Explore prototype <ExternalLink size={15}/>
              </a>
              <p className="mt-2 text-xs text-slate-500">This link is the prototype, not the production application.</p>
            </div>
            <div className="rounded-2xl border border-emerald-900 bg-emerald-950/30 p-6">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300"><Database size={17}/> Production product</span>
              <h3 className="mb-3 text-xl font-semibold text-white">Native Play / Scala module</h3>
              <p className="text-sm leading-relaxed text-slate-300">The production product was built natively inside the existing Campaign Manager environment. This kept the workflow aligned with the platform's established data and application architecture.</p>
              <p className="mt-5 text-xs text-emerald-300">Production architecture</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">03 · Product decisions</p>
          <h2 className="mb-6 text-3xl font-bold text-white">The decisions that shaped the solution</h2>
          <div className="space-y-4">
            {productionDecisions.map((item, index) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-950 text-sm font-bold text-emerald-300">{index + 1}</span>
                <div><h3 className="mb-2 font-semibold text-white">{item.title}</h3><p className="text-sm leading-relaxed text-slate-400">{item.description}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">04 · The product experience</p>
          <h2 className="mb-5 text-3xl font-bold text-white">A connected campaign workflow</h2>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-300">The product brings the main steps of campaign operations into one flow, from preparing an approved message to understanding what happened after dispatch.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400"/>{item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-2 text-emerald-400"><ShieldCheck size={19}/><span className="text-sm font-semibold uppercase tracking-widest">05 · What this work demonstrates</span></div>
          <h2 className="mb-5 text-3xl font-bold text-white">Product thinking grounded in technical constraints</h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-slate-300">This project brought together product workflow design, third-party platform integration, data governance considerations and a transition from a fast prototype to a production implementation within an established technology stack.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div><MessageCircle className="mb-2 text-emerald-400" size={22}/><h3 className="font-semibold text-white">User workflow</h3><p className="mt-1 text-sm text-slate-400">Designing a usable campaign journey.</p></div>
            <div><Workflow className="mb-2 text-emerald-400" size={22}/><h3 className="font-semibold text-white">System integration</h3><p className="mt-1 text-sm text-slate-400">Connecting Meta capabilities to an enterprise product.</p></div>
            <div><ShieldCheck className="mb-2 text-emerald-400" size={22}/><h3 className="font-semibold text-white">Data governance</h3><p className="mt-1 text-sm text-slate-400">Making data boundaries part of product design.</p></div>
          </div>
        </section>

        <section className="border-t border-slate-800 pt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Next</p>
          <h2 className="mt-2 text-2xl font-bold text-white">What I would measure next</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-400">The next layer of this case study will include verified adoption, delivery and operational metrics, with clear measurement periods and attribution. Those figures will be added after the evidence is reviewed.</p>
        </section>
      </main>
    </div>
  );
};

export default WhatsAppCampaignCaseStudy;
