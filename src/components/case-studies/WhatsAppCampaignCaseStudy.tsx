import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, MessageCircle, ShieldCheck, Workflow, Database, Layers, CheckCircle2, Activity, Route, PlayCircle, Maximize2, FileCode } from 'lucide-react';
import ShareButton from '../ui/ShareButton';
import { getCaseStudyUrl } from '../../utils/routes';

const PROTOTYPE_URL = 'https://whatsapp-campaign-manager-eta.vercel.app/';

interface FlowDiagram {
  id: 'system' | 'journey' | 'fire' | 'lifecycle';
  title: string;
  badge: string;
  file: string;
  shortDesc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  stories: string[];
  takeaways: {
    title: string;
    description: string;
  }[];
}

const FLOW_DIAGRAMS: FlowDiagram[] = [
  {
    id: 'system',
    title: 'System Architecture & Trust Boundaries',
    badge: 'Architecture',
    file: 'system.html',
    shortDesc: 'Components, trust boundaries and asynchronous data paths between Vercel serverless, Supabase, and Meta.',
    icon: Layers,
    stories: [
      'Send path: Operator fires → API worker pool → Meta Graph API v19.0',
      'Status loop: Meta sends delivery receipts → Webhook verification → DB logs',
      'Platform services: Supabase Auth/Postgres & Groq AI draft generation'
    ],
    takeaways: [
      {
        title: 'Edge & Serverless Boundary',
        description: 'Next.js App Router route handlers run as ephemeral serverless lambdas on Vercel, decoupled from Supabase persistence.'
      },
      {
        title: 'Asynchronous Webhook Ingestion',
        description: 'Status updates (sent → delivered → read / failed) flow exclusively through an HMAC-verified webhook callback endpoint.'
      },
      {
        title: 'AI Drafting with Pre-Submission Validation',
        description: 'Groq LLM generates template variations that pass through an automatic JSON repair loop before review.'
      }
    ]
  },
  {
    id: 'journey',
    title: 'Operator Journey Workflow',
    badge: 'Operator Workflow',
    file: 'operator-journey.html',
    shortDesc: 'End-to-end user path: CSV upload & profiling → template authoring → wizard setup → live tracking.',
    icon: Workflow,
    stories: [
      'CSV upload & profiling: Client file parsed, headers scored into phone/ID/name roles',
      'Template creation & review: Dynamic preview, strict rules enforced, Meta approval wait',
      'Campaign setup: 3-step wizard maps columns to variables with real row preview',
      'Dispatch & delivery: Batch sending, progress indicator, and live webhook receipts'
    ],
    takeaways: [
      {
        title: 'Heuristic Column Scoring',
        description: 'Analyzes messy CSV headers to infer phone numbers while penalizing secondary, landline, and emergency columns.'
      },
      {
        title: '30-Day Lockout Prevention',
        description: 'Client-side validator mirrors Meta\'s review heuristics in real time, preventing accidental rejections that burn template names.'
      },
      {
        title: 'Real-Data Sample Preview',
        description: 'Renders dynamic templates with authentic sample rows so operators verify formatting before firing.'
      }
    ]
  },
  {
    id: 'fire',
    title: 'Fire Execution Sequence',
    badge: 'Execution Sequence',
    file: 'fire-campaign.html',
    shortDesc: 'Timeline from the "Fire Campaign" click through synchronous guards, worker loops, to webhook receipts.',
    icon: Activity,
    stories: [
      'Pre-flight guards: Session revalidation, audience check, overlap guard, atomic lock claim',
      'Background dispatch: after() keeps execution alive, 8 workers send with backoff, batch logging (50/batch)',
      'Delivery receipts: Meta asynchronously calls webhook; campaign counters and logs update'
    ],
    takeaways: [
      {
        title: 'Synchronous Pre-Flight Safety',
        description: 'Session authentication, audience readiness, and per-recipient overlap checks run synchronously before returning HTTP 202.'
      },
      {
        title: 'Atomic Double-Send Lock',
        description: 'A conditional database UPDATE claims the campaign row (NOT IN Sending, Completed) to eliminate race conditions.'
      },
      {
        title: 'Background after() Worker Loop',
        description: 'Next.js after() keeps the serverless lambda active past response return to drive parallel batch sending.'
      }
    ]
  },
  {
    id: 'lifecycle',
    title: 'Campaign Status Lifecycle (FSM)',
    badge: 'Finite State Machine',
    file: 'campaign.html',
    shortDesc: 'Finite state machine: Draft → Preflight → Sending → Completed, plus refusal branches and 48s timeout recovery.',
    icon: Route,
    stories: [
      'Happy path: Draft → requested → preflight pass → Sending claim → Completed',
      'Refusal branches: Unapproved template, invalid audience, or overlap refusal (safely remains Draft)',
      'Budget recovery: 48s runtime ceiling flush → marked Failed → eligible for safe retry'
    ],
    takeaways: [
      {
        title: 'Strict State Transitions',
        description: 'Guarantees the campaign lifecycle has no ambiguous intermediate states between Draft, Sending, and Completed.'
      },
      {
        title: 'Safe Pre-Flight Refusals',
        description: 'If preflight validation or overlap detection fails, the campaign remains a Draft with actionable error reasons.'
      },
      {
        title: 'Serverless Budget Recovery',
        description: 'Approaching the 48s ceiling gracefully flushes logs and transitions status to Failed, enabling safe resumption.'
      }
    ]
  }
];

const WhatsAppCampaignCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeFlowId, setActiveFlowId] = useState<'system' | 'journey' | 'fire' | 'lifecycle'>('system');
  const activeFlow = FLOW_DIAGRAMS.find((diagram) => diagram.id === activeFlowId) || FLOW_DIAGRAMS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productionDecisions = [
    {
      title: 'Build inside the existing product',
      description: 'I chose a native Play Framework and Scala implementation for production instead of relying on the standalone prototype. This added rebuild effort, but kept the campaign workflow aligned with the existing platform architecture and capabilities.'
    },
    {
      title: 'Keep employee data within the platform',
      description: 'I designed audience selection around the existing platform environment rather than making exported employee lists the primary production workflow. The trade-off was tighter integration work in exchange for fewer disconnected data handoffs.'
    },
    {
      title: 'Design for the full campaign lifecycle',
      description: 'I treated template preparation, audience selection, setup, dispatch visibility and webhook-driven delivery updates as one operator journey. This increased scope beyond message sending, but made campaign execution and follow-up more usable.'
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
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:grid-cols-2 lg:grid-cols-4">
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Company</p><p className="mt-1 font-semibold text-white">Vantage Circle</p></div>
            <div><p className="text-xs uppercase tracking-wider text-slate-500">My role</p><p className="mt-1 font-semibold text-white">Solo end-to-end builder</p></div>
            <div><p className="text-xs uppercase tracking-wider text-slate-500">Production stack</p><p className="mt-1 font-semibold text-white">Play Framework · Scala</p></div>
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
            <p>The challenge was to give campaign operators a usable end-to-end workflow while respecting the platform's existing data boundaries and operational model. A successful API connection alone would not solve template management, audience selection, campaign visibility or delivery feedback.</p>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">02 · From prototype to production</p>
          <h2 className="mb-5 text-3xl font-bold text-white">Separate rapid workflow validation from production integration</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-300"><Layers size={17}/> Exploration prototype</span>
              <h3 className="mb-3 text-xl font-semibold text-white">Next.js + Supabase</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-400">I independently designed and built the Vercel-hosted prototype, including the UX/UI, frontend, backend, Meta integration, template workflow, audience setup and delivery feedback.</p>
              <a href={PROTOTYPE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200">
                Explore prototype <ExternalLink size={15}/>
              </a>
              <p className="mt-2 text-xs text-slate-500">This is an explorable demonstration prototype; it is not connected to the production application.</p>
            </div>
            <div className="rounded-2xl border border-emerald-900 bg-emerald-950/30 p-6">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300"><Database size={17}/> Production product</span>
              <h3 className="mb-3 text-xl font-semibold text-white">Native Play / Scala module</h3>
              <p className="text-sm leading-relaxed text-slate-300">I rebuilt the actual production application from scratch inside the existing Campaign Manager, implementing the UX/UI, frontend and backend for its native Play Framework and Scala environment. The Vercel prototype was for demonstrating the proposed experience; the production application was a separate implementation, not a deployment or direct code port of that prototype.</p>
              <p className="mt-5 text-xs text-emerald-300">Production architecture</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">02.1 · Architecture & interactive flow analysis</p>
          <h2 className="mb-5 text-3xl font-bold text-white">Explore how the prototype works</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-400">The diagrams below are interactive technical walkthroughs of the Vercel prototype. They are deliberately kept separate from the production story that follows.</p>
          {/* 2.1 Architecture & Interactive Flow Analysis */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>2.1 Architecture & Interactive Flow Analysis</span>
                </h3>
                <a
                  href="/prototype-analysis/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium px-3 py-1.5 bg-emerald-950/40 border border-emerald-800/60 rounded-lg transition-colors w-fit"
                >
                  <FileCode size={13} />
                  <span>Open Full Prototype Architecture</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                These four interactive diagrams document the standalone Next.js/Supabase prototype shown above. They make its data paths, trust boundaries, state transitions and campaign execution behavior explorable. They are an architectural walkthrough of the prototype—not screenshots or a representation of the native Play/Scala production interface.
              </p>

              {/* Interactive Animated Flow Explorer Container */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl mb-8">
                {/* Tab Switcher */}
                <div className="bg-slate-950/80 border-b border-slate-800 p-2 sm:p-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
                  {FLOW_DIAGRAMS.map((diagram) => {
                    const Icon = diagram.icon;
                    const isActive = activeFlow.id === diagram.id;
                    return (
                      <button
                        key={diagram.id}
                        type="button"
                        onClick={() => setActiveFlowId(diagram.id)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                          isActive
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 shadow-sm shadow-emerald-950/50'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                        }`}
                      >
                        <Icon size={16} className={isActive ? 'text-emerald-400' : 'text-slate-400'} />
                        <span>{diagram.badge}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Flow Metadata & Controls Bar */}
                <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Interactive Prototype Flow
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {activeFlow.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {activeFlow.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={`/prototype-analysis/${activeFlow.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700 hover:border-slate-600 transition-all cursor-pointer shadow-sm"
                      title="Open full screen in a new window"
                    >
                      <Maximize2 size={13} />
                      <span>Full Window</span>
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  </div>
                </div>

                {/* Guided Tour Banner Hint */}
                <div className="px-4 py-2.5 bg-emerald-950/30 border-b border-emerald-900/40 text-[11px] sm:text-xs text-emerald-300 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <PlayCircle size={15} className="text-emerald-400 flex-shrink-0 animate-bounce" />
                    <span>
                      <strong>Interactive walkthrough:</strong> Click <strong>"Play story"</strong> inside the diagram below for a guided step-by-step tour, or hover nodes to trace data connections.
                    </span>
                  </div>
                </div>

                {/* Iframe Viewport */}
                <div className="relative w-full bg-slate-950">
                  <iframe
                    key={activeFlow.id}
                    src={`/prototype-analysis/${activeFlow.file}?theme=dark`}
                    title={activeFlow.title}
                    className="w-full h-[520px] sm:h-[620px] lg:h-[680px] border-0 block"
                    loading="lazy"
                  />
                </div>

                {/* Flow Breakdown & Architecture Highlights */}
                <div className="p-5 sm:p-6 bg-slate-900/80 border-t border-slate-800 space-y-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Animation Chapters & Technical Guardrails
                  </div>
                  
                  {/* Guided Story Beats */}
                  <div className="flex flex-wrap gap-2 text-xs">
                    {activeFlow.stories.map((story, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-800/90 text-slate-300 border border-slate-700/80 rounded-lg flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {story}
                      </span>
                    ))}
                  </div>

                  {/* 3 Key Engineering Takeaways */}
                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    {activeFlow.takeaways.map((takeaway, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1">
                        <div className="text-xs font-bold text-emerald-400">{takeaway.title}</div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                          {takeaway.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fast ASCII Data-Path Summary */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-slate-400 flex items-center justify-between">
                  <span>Fast Reference: Data Path & Component Contract</span>
                </div>
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed shadow-lg">
                  <pre>{`  Operator (browser)
        │
        ▼
  Next.js app on Vercel ──────────────▶ Meta Graph API
   • Templates                           • submit template for review
   • Audiences (CSV upload)              • send template message
   • 3-step campaign wizard              • list / read templates
   • Dashboard + analytics
        │   ▲                                    │
        ▼   │                                    │ webhooks:
  Supabase Postgres                              │ sent → delivered → read / failed,
   templates · audiences · campaigns             │ template approved / rejected,
   message_logs · opt_outs                       │ inbound replies
        ▲                                        │
        └────────── /api/webhooks/whatsapp ◀─────┘
                    (HMAC-signed by Meta)`}</pre>
                </div>
              </div>
            </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">03 · Production architecture</p>
          <h2 className="mb-5 text-3xl font-bold text-white">A native module inside the existing Campaign Manager</h2>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-300">The production implementation was designed around the host platform's existing data and operational boundaries. Rather than moving employee records into a separate application database, the module resolves saved audience definitions against production data when a campaign is sent.</p>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <Database className="mb-3 text-emerald-400" size={22}/>
                <h3 className="font-semibold text-white">Existing platform data</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Saved audience queries resolve against the production MySQL environment at send time.</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <Workflow className="mb-3 text-emerald-400" size={22}/>
                <h3 className="font-semibold text-white">Native campaign module</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">The Play Framework / Scala implementation handles audience resolution, campaign execution, recipient checks and message records.</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <MessageCircle className="mb-3 text-emerald-400" size={22}/>
                <h3 className="font-semibold text-white">Meta + webhook feedback</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Meta handles message delivery; webhook callbacks update message states for operational tracking.</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-emerald-900/70 bg-emerald-950/30 p-4">
              <p className="text-sm font-semibold text-emerald-300">Key design principle</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Keep employee data in the existing production environment; pass only the required message payload to Meta and retain operational records in the host application.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="mb-2 font-semibold text-white">Reliability and duplicate prevention</h3>
              <p className="text-sm leading-relaxed text-slate-400">The production workflow uses backend checks and database-level safeguards to reduce duplicate sends and keep dispatch state consistent beyond the browser interface.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="mb-2 font-semibold text-white">Opt-out and delivery lifecycle</h3>
              <p className="text-sm leading-relaxed text-slate-400">Inbound STOP handling and webhook-driven delivery updates are part of the campaign lifecycle, not afterthoughts added to the dashboard.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">04 · How I built it</p>
          <h2 className="mb-5 text-3xl font-bold text-white">One person owning the product from concept through production</h2>
          <p className="mb-5 max-w-3xl text-lg leading-relaxed text-slate-300">I owned the end-to-end build across product definition, UX/UI, frontend, backend and third-party integration. I used Claude Code as an AI-assisted development tool to accelerate implementation, explore solutions and work through technical problems; I remained responsible for the architecture, product decisions, integration behaviour, testing and delivered experience.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Product workflow and requirements','UX/UI design and interaction flows','Frontend implementation','Backend and data integration','Meta WhatsApp Business Platform integration','Native Play/Scala production implementation'].map((item) => (
              <div key={item} className="rounded-lg border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300"><CheckCircle2 size={17} className="mr-2 inline text-emerald-400"/>{item}</div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">05 · Product decisions</p>
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">06 · The product experience</p>
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
          <div className="mb-3 flex items-center gap-2 text-emerald-400"><ShieldCheck size={19}/><span className="text-sm font-semibold uppercase tracking-widest">07 · What this work demonstrates</span></div>
          <h2 className="mb-5 text-3xl font-bold text-white">Product thinking grounded in technical constraints</h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-slate-300">This project brought together product workflow design, third-party platform integration, data governance considerations and a transition from a fast prototype to a production implementation within an established technology stack.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div><MessageCircle className="mb-2 text-emerald-400" size={22}/><h3 className="font-semibold text-white">User workflow</h3><p className="mt-1 text-sm text-slate-400">Designing a usable campaign journey.</p></div>
            <div><Workflow className="mb-2 text-emerald-400" size={22}/><h3 className="font-semibold text-white">System integration</h3><p className="mt-1 text-sm text-slate-400">Connecting Meta capabilities to an enterprise product.</p></div>
            <div><ShieldCheck className="mb-2 text-emerald-400" size={22}/><h3 className="font-semibold text-white">Data governance</h3><p className="mt-1 text-sm text-slate-400">Making data boundaries part of product design.</p></div>
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">08 · Production adoption</p>
          <h2 className="mb-5 text-3xl font-bold text-white">Early usage across client campaigns</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div><p className="text-4xl font-bold text-white">8</p><p className="mt-1 text-sm text-slate-400">Campaigns launched</p></div>
            <div><p className="text-4xl font-bold text-white">110,000+</p><p className="mt-1 text-sm text-slate-400">Distinct users represented in aggregate campaign audiences</p></div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-slate-500">Aggregated production figures across client campaigns. Client-level and campaign-level data is withheld for confidentiality. Audience size does not represent messages delivered, read or engaged with.</p>
        </section>

        <section className="border-t border-slate-800 pt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Further measurement</p>
          <h2 className="mt-2 text-2xl font-bold text-white">What I would measure next</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-400">As adoption grows, the next measures to evaluate are delivery rate, read rate, campaign completion, repeat usage and operational reliability, reported only where the underlying data can be shared.</p>
        </section>
      </main>
    </div>
  );
};

export default WhatsAppCampaignCaseStudy;
