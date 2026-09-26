import React, { useEffect } from 'react';
import { 
  ArrowLeft, ExternalLink, ShieldCheck, Database, Smartphone, 
  AlertTriangle, CheckCircle2, Sparkles, RefreshCw, Layers, Cpu
} from 'lucide-react';
import ShareButton from '../ui/ShareButton';
import { getCaseStudyUrl } from '../../utils/routes';

const APP_URL = 'https://whatsapp-campaign-manager-eta.vercel.app/';

interface WhatsAppCampaignCaseStudyProps {
  onBack: () => void;
}

const WhatsAppCampaignCaseStudy: React.FC<WhatsAppCampaignCaseStudyProps> = ({ onBack }) => {
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
    <div className="bg-slate-950 min-h-screen font-inter pb-24 text-slate-300 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Top Fixed Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-b border-slate-800/80 z-50 transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium text-sm sm:text-base cursor-pointer group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Prominent Highlight Button: Try the App */}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm shadow-lg shadow-emerald-900/40 hover:shadow-emerald-700/50 hover:scale-105 active:scale-95 transition-all ring-1 ring-emerald-400/40"
            >
              <Smartphone size={16} className="text-emerald-100" />
              <span>Try the App</span>
              <ExternalLink size={14} className="opacity-80" />
            </a>

            <ShareButton 
              url={getCaseStudyUrl('case-study-whatsapp')}
              variant="dark"
              size="sm"
              label="Share"
            />
          </div>
        </div>
      </nav>

      {/* Main Content Article */}
      <article className="pt-28 sm:pt-32 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Hero Header */}
        <header className="mb-16 animate-fade-in">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
            <span className="px-3.5 py-1 bg-emerald-950/80 text-emerald-400 font-semibold tracking-wide rounded-full text-xs sm:text-sm border border-emerald-800/60 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Product · Integrations · 0 → 1
            </span>
            <span className="px-3.5 py-1 bg-slate-800/90 text-slate-300 font-medium rounded-full text-xs sm:text-sm border border-slate-700">
              Enterprise Scale · 2M Employees
            </span>
            <span className="px-3.5 py-1 bg-teal-950/60 text-teal-300 font-medium rounded-full text-xs sm:text-sm border border-teal-800/60">
              Meta WhatsApp Business Platform
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            WhatsApp Campaign Manager
          </h1>
          <p className="text-lg sm:text-2xl text-slate-300 mb-8 font-light border-l-4 border-emerald-500 pl-5 sm:pl-6 leading-relaxed">
            Bringing a new messaging channel to a 2M-employee HR-tech platform without moving any client data
          </p>

          {/* Interactive Live App Banner */}
          <div className="bg-gradient-to-r from-emerald-950/50 via-slate-900 to-teal-950/50 border border-emerald-800/60 rounded-2xl p-5 sm:p-6 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl shadow-emerald-950/30">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <h2 className="text-base sm:text-lg font-bold text-white">Live Prototype Available</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Test the prototype app directly: dynamic Meta template builder with validation engine, CSV audience detection scoring, 3-step wizard, and analytics.
              </p>
            </div>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20 whitespace-nowrap self-start sm:self-auto cursor-pointer"
            >
              <span>Try the App</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Project Details Box */}
          <div className="bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-base">
                <ShieldCheck className="text-emerald-400" size={20} /> 
                Project Metadata
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><strong className="text-slate-100">Company:</strong> Vantage Circle (employee rewards & recognition SaaS)</li>
                <li><strong className="text-slate-100">Role:</strong> Sole builder: product, design, engineering, Meta integration and rollout</li>
                <li><strong className="text-slate-100">Timeline:</strong> July to September 2026 (~8 weeks from first API call to production architecture)</li>
                <li><strong className="text-slate-100">Scope:</strong> 0 → 1 Channel Expansion (Prototype → Native Production Module)</li>
                <li><strong className="text-slate-100">Status:</strong> Prototype shipped and sent real campaigns. Production module built natively inside Campaign Manager. Staged rollout in progress.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-base">
                <Cpu className="text-emerald-400" size={20} /> 
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Meta Graph API', 'Webhooks (HMAC)', 'Next.js', 'Supabase Postgres', 
                  'Vercel', 'Play Framework / Scala 3', 'MySQL', 'Groq (LLM)', 'TypeScript'
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800/90 border border-slate-700/80 rounded-lg text-xs text-slate-200 font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  Core Architectural Stance
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Zero data movement. The prototype and the production module share only a verified Meta WhatsApp Business Account—their databases are never connected.
                </p>
              </div>
            </div>
          </div>

          {/* Key Numbers / Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">0</div>
              <div className="text-xs text-slate-400 font-medium">PII Copies Per Campaign</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 mb-1">~0 min</div>
              <div className="text-xs text-slate-400 font-medium">Manual Data Handling</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">8 Weeks</div>
              <div className="text-xs text-slate-400 font-medium">First API Call to Prod</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">GREEN</div>
              <div className="text-xs text-slate-400 font-medium">Meta Sender Quality Rating</div>
            </div>
          </div>
        </header>

        {/* TL;DR Section */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <span className="text-emerald-400 text-lg">00</span>
            TL;DR
          </h2>
          <div className="prose prose-invert max-w-none text-base sm:text-lg leading-relaxed text-slate-300 space-y-4">
            <p>
              Vantage Circle ran its perks and rewards campaigns over email, and email engagement had flattened. WhatsApp was the obvious next channel. The easy route, a third-party tool like Wati, would have meant exporting client companies' employee data to an outside vendor, and that was a non-starter.
            </p>
            <p>
              I built the channel myself, in two acts:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
                  <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-xs">1</span>
                  Act One: The Prototype
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A standalone Next.js, Supabase, and Vercel stack integrating directly with Meta's WhatsApp Business Platform. Covered template authoring against Meta's strict review rules, CSV audience upload with automatic field detection, a 3-step campaign wizard, real dispatches, and webhook analytics. It sent real campaigns to real employees.
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-lg">
                  <span className="w-6 h-6 rounded-full bg-teal-950 border border-teal-500 flex items-center justify-center text-xs">2</span>
                  Act Two: Production Module
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Built natively inside Vantage Circle's existing production Campaign Manager (Play Framework / Scala 3). Instead of hardening the prototype and persisting external PII copies, I rebuilt the product <em>where the data already lives</em>: zero exports, one trust boundary, audiences resolved live at send time, and safety rails enforced directly by the database.
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-emerald-500 pl-5 italic text-slate-200 my-6 bg-emerald-950/20 py-3 pr-4 rounded-r-lg font-medium">
              "The core product decision: the problem was never where the app was hosted. The problem was that data had to travel to the app, so I moved the app to the data."
            </blockquote>
          </div>
        </section>

        {/* 1. The Problem */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <span className="text-emerald-400 text-lg">01</span>
            The Problem
          </h2>
          <div className="space-y-8 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">1.1 Context</h3>
              <p className="mb-4">
                Vantage Circle is a multi-tenant platform serving around 2 million employees across hundreds of client organisations. Its growth and perks teams drive engagement (deal redemptions, points usage, reward activation) through campaigns, and until now those campaigns were email only.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="font-semibold text-slate-100 text-sm mb-1 text-emerald-400">Low Attention</div>
                  <p className="text-xs text-slate-400">Promotional email competes in a crowded inbox. WhatsApp messages get opened and read almost immediately.</p>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="font-semibold text-slate-100 text-sm mb-1 text-emerald-400">No Mobile-First Reach</div>
                  <p className="text-xs text-slate-400">Many client employees (retail, manufacturing, field staff) rarely check a corporate inbox, but almost all use WhatsApp daily.</p>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="font-semibold text-slate-100 text-sm mb-1 text-emerald-400">Time-Sensitive Perks</div>
                  <p className="text-xs text-slate-400">A festival sale or an expiring-points nudge is only effective if seen <em>today</em> before the reward window closes.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">1.2 Why "Just Buy a Tool" Didn't Work</h3>
              <p className="mb-4">
                Off-the-shelf WhatsApp campaign tools (Wati, Waplify, and others) all work the same way: you upload your contacts to <em>their</em> servers. For a company whose product is built on client trust, and whose contacts are <em>other companies' employees</em>, that meant:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-4 text-sm sm:text-base">
                <li>Client PII leaving Vantage Circle's infrastructure for every single campaign run.</li>
                <li>A new vendor to put through rigorous security review for every enterprise client.</li>
                <li>No audit trail of whose data was sent where, opening severe compliance liabilities.</li>
              </ul>
              <p>
                The company already had a verified WhatsApp Business Account with Meta. What was missing was an <strong>internal tool on top of it</strong> that could talk directly to Vantage's own data, let an admin compose, target, and fire campaigns, and never let a single record leave.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">1.3 Goals I Set</h3>
              <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-md">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Goal</th>
                      <th className="py-3 px-4 font-semibold">How I Measured It</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                    <tr>
                      <td className="py-3 px-4 font-medium text-slate-200">Send targeted WhatsApp campaigns with zero user data leaving Vantage infrastructure</td>
                      <td className="py-3 px-4 text-emerald-400 font-semibold">Number of PII copies created per campaign (Target: 0)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-slate-200">Make campaign setup fast for a non-engineer</td>
                      <td className="py-3 px-4 text-slate-400">Time from login to campaign sent</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-slate-200">Give operators real performance visibility</td>
                      <td className="py-3 px-4 text-slate-400">Delivery rate, read rate, and failure reasons per campaign, all from real webhook data</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-slate-200">Never harm the sender reputation</td>
                      <td className="py-3 px-4 text-slate-400">No double sends, STOP honoured, no broken personalization, Meta quality rating kept GREEN</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs sm:text-sm text-slate-400">
                <strong className="text-slate-200">Out of scope for v1:</strong> Chatbots and two-way conversational flows, A/B testing, self-serve portals for client HR admins, and event-triggered transactional messages (which already lived on a separate notifications pipeline).
              </div>
            </div>
          </div>
        </section>

        {/* 2. Act One: The Prototype */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <span className="text-emerald-400 text-lg">02</span>
            Act One: The Prototype
          </h2>
          <div className="space-y-8 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I started with a standalone app because I needed to learn one thing fast: <strong>what does it actually take to get a message from our system onto an employee's phone through Meta?</strong> Most of the difficulty turned out to be in the parts no documentation warns you about.
            </p>

            {/* 2.1 Architecture Diagram */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">2.1 Architecture</h3>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed shadow-lg">
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

            {/* 2.2 What I Built */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">2.2 What I Built</h3>
              
              <div className="space-y-6">
                <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                    <Sparkles size={18} />
                    Template studio, with Meta's review rules built in
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Every marketing message on WhatsApp must be a pre-approved template. Meta's review rules are strict and mostly undocumented—I learned them through immediate rejections:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-400">
                    <li>The body <strong>cannot start or end with a placeholder.</strong> <code className="text-rose-400">...Tap to explore &#123;&#123;4&#125;&#125;</code> gets rejected as <code className="text-rose-400">INVALID_FORMAT</code>, while <code className="text-emerald-400">...Tap to explore &#123;&#123;4&#125;&#125; and start saving today.</code> passes.</li>
                    <li><strong>Every placeholder needs a sample value</strong>, and human/automated reviewers evaluate the assembled sample to verify context (e.g. a Diwali template with a September date triggers suspicion).</li>
                    <li><strong>A rejected template's name is locked for 30 days.</strong> One failed submission burns a clean name for an entire month.</li>
                  </ul>
                  <p className="text-sm text-slate-300 leading-relaxed pt-2">
                    That 30-day lock made proactive validation a hard operational requirement. I authored Meta's rules as a pure validation module (character bounds, placeholder sequencing, no variables in footers, URL variable suffix constraints, plus scam heuristic alerts). <strong>The exact same validation engine runs on every keystroke in the UI, in the API before submission, and over AI-generated drafts.</strong>
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-300 font-medium">Live Phone Preview</span>
                    <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-300 font-medium">"Draft with AI" via Groq + Auto-Repair</span>
                    <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-300 font-medium">Live Template Quality Fetch</span>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-lg font-bold text-teal-400 flex items-center gap-2">
                    <Database size={18} />
                    Audience upload with heuristic field detection
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Data team CSV lists never looked the same twice (<code className="text-slate-300">Mobile No</code>, <code className="text-slate-300">whatsapp_phone_number</code>, <code className="text-slate-300">Emp Code</code>). A brittle column contract was replaced with automated profile detection: the engine scores headers into roles (phone, identifier, name, custom data) and prompts for confirmation.
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    The heuristic scoring deliberately penalises headers like <code className="text-amber-300">alternate</code>, <code className="text-amber-300">secondary</code>, <code className="text-amber-300">emergency</code>, and <code className="text-amber-300">landline</code> so an unsendable number never wins by accident. Distinct-value checks act as sanity safeguards: an organization column showing <em>1</em> distinct value confirms single-client scoping, whereas 5,000 distinct values warns the operator before a send is queued.
                  </p>
                </div>

                <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                    <Layers size={18} />
                    3-step campaign wizard & signed webhook analytics
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <code className="text-slate-200">Audience → Template & Variables → Review & Send</code>. Audience comes first so variable mapping uses real columns, and preview renders using a <strong>real row from the uploaded file</strong>. The review step acts as the last line of defense, displaying sendable counts, format splits, and skip reasons.
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Because Meta provides no polling endpoint for message status, the HMAC-signed webhook <em>is</em> the analytics pipeline, ingesting <code className="text-slate-300">sent → delivered → read / failed</code> callbacks and mapping error codes to plain-English operator instructions.
                  </p>
                </div>
              </div>
            </div>

            {/* 2.3 Going Live: Production Bugs Table */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">2.3 Going Live: The Problems That Only Show Up in Production</h3>
              <p className="mb-4 text-sm sm:text-base text-slate-300">
                The prototype sent its first test message on August 10 from my laptop. Three days later it sent its first real production message. The gap between those dates highlighted critical runtime disparities:
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-md">
                <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4 font-semibold">What Broke</th>
                      <th className="py-3 px-4 font-semibold">Why It Was Invisible Locally</th>
                      <th className="py-3 px-4 font-semibold">Fix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-rose-400">Send loop froze on Vercel</td>
                      <td className="py-3 px-4 text-slate-400">Ran as background promise after HTTP response. Serverless freezes execution immediately upon response return.</td>
                      <td className="py-3 px-4 text-emerald-400">Moved to Next.js post-response <code className="text-emerald-300">after()</code> execution with an explicit duration budget.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-rose-400">Delivery status stuck at "sent"</td>
                      <td className="py-3 px-4 text-slate-400">Meta's webhook subscription still pointed to a dead local tunnel URL used during testing.</td>
                      <td className="py-3 px-4 text-emerald-400">Repointed subscription to live Vercel domain; automated verification handshake.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-rose-400">Delivered = 1, Read = 1 AND Failed = 1</td>
                      <td className="py-3 px-4 text-slate-400">Sends were tallied as delivered immediately when Meta accepted dispatch, prior to asynchronous webhook failure.</td>
                      <td className="py-3 px-4 text-emerald-400">Counters update solely on genuine webhook callbacks. Real <code className="text-slate-200">GROUP BY</code> queries replace heuristics.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-rose-400">Failed templates stuck as "PENDING"</td>
                      <td className="py-3 px-4 text-slate-400">Failed Meta calls were caught and logged, saving default status. One-way sync couldn't correct an unreceived template.</td>
                      <td className="py-3 px-4 text-emerald-400">Introduced explicit <code className="text-slate-200">FAILED</code> state storing Meta error code + one-click Retry action.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-rose-400">Template approvals never updated</td>
                      <td className="py-3 px-4 text-slate-400">Webhook receiver processed message statuses but ignored template event type payloads.</td>
                      <td className="py-3 px-4 text-emerald-400">Routed template-status events with verified HMAC test signatures against production.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-rose-400">Hanging calls & cascade failures</td>
                      <td className="py-3 px-4 text-slate-400">Default <code className="text-slate-300">fetch</code> has no timeout and no retry strategy.</td>
                      <td className="py-3 px-4 text-emerald-400">15s timeout with jittered backoff, retrying <em>only</em> 429/5xx (never business rejections like invalid numbers).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs sm:text-sm text-slate-300">
                <strong className="text-amber-400">Financial infrastructure blocker:</strong> Meta charges WhatsApp Business as recurring auto-debit, governed in India under strict RBI e-mandate regulations. Cards must be enrolled in recurring mandates <em>and</em> enabled for international commerce, or issuing banks silently reject without OTP triggers. Resolving this unblocked the first real delivery on August 13, 2026.
              </div>
            </div>

            {/* 2.4 What Real Sends Taught Me */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="text-amber-400" size={20} />
                2.4 What Real Sends Taught Me: The Error 131049 Revelation
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                The largest campaign sent to <strong>167 employees resulted in 30 failures (18%)</strong>. Analyzing the logs revealed that over half of failures were Meta error <code className="text-amber-400 font-mono font-bold">131049</code>.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-emerald-400 font-bold">Understanding 131049</div>
                  <p className="text-slate-400 leading-relaxed">
                    This is neither a bug nor a bad phone number: it is WhatsApp's global rolling daily cap on marketing messages an individual user can receive from <em>all businesses combined</em>.
                  </p>
                  <p className="text-slate-300">
                    <strong>Solution:</strong> Retry ~24 hours later. The dashboard was updated to translate this error into actionable guidance: <em>"Recipient at daily marketing capacity — retry tomorrow."</em>
                  </p>
                </div>
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-teal-400 font-bold">Operational Insights</div>
                  <p className="text-slate-400 leading-relaxed">
                    Stacking marketing campaigns on overlapping employee audiences actively works against delivery. Led to audience frequency checks before dispatch.
                  </p>
                  <p className="text-slate-300">
                    True transactional nudges (expiring points, redemption confirmations) should use <code className="text-teal-300">UTILITY</code> categorization, which is exempt from marketing caps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Turning Point */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <span className="text-emerald-400 text-lg">03</span>
            The Turning Point: The Prototype Worked, and That Was the Problem
          </h2>
          <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              The prototype did its job: proving the channel worked. But once leadership requested rolling out to <strong>client companies' employees</strong> rather than internal staff, the CSV upload model became untenable.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-md">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-900 text-slate-200 border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Every Campaign Required...</th>
                    <th className="py-3 px-4 font-semibold">Inherent Enterprise Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Hand-run manual export of client PII from production</td>
                    <td className="py-3 px-4 text-rose-400">A person manually handles unencrypted employee data for every send</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">A CSV file saved on local laptops or shared in chat threads</td>
                    <td className="py-3 px-4 text-rose-400">Uncontrolled duplicate copies created with no retention or expiration controls</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Upload to an externally hosted app and database (Vercel/Supabase)</td>
                    <td className="py-3 px-4 text-rose-400">Client PII transported outside production trust boundary</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Rows persisted in a secondary database indefinitely</td>
                    <td className="py-3 px-4 text-rose-400">Additional data store subject to compliance, GDPR/SOC2 audit, and purging</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Static snapshot without link back to source database records</td>
                    <td className="py-3 px-4 text-rose-400">Stale audiences: opt-outs or deactivated employees missed post-export</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-red-950/20 border border-red-900/40 rounded-xl">
              <div className="text-red-400 font-bold text-lg mb-2">The Cost of Sticking with the Prototype</div>
              <p className="text-sm text-slate-300">
                A typical campaign generated <strong>4 uncontrolled copies of client PII</strong> and required <strong>~45 minutes</strong> of manual data handling before dispatch. When asked to "push the prototype to production," I investigated Vantage Circle's existing production mail infrastructure and discovered it already ran an internal Campaign Manager with direct, trusted database queries.
              </p>
              <p className="text-sm text-emerald-400 font-semibold mt-3">
                That changed the engineering question from "How do I secure the prototype?" to "Why is the data travelling at all?"
              </p>
            </div>
          </div>
        </section>

        {/* 4. The Decision: Where Should WhatsApp Live? */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <span className="text-emerald-400 text-lg">04</span>
            The Decision: Where Should WhatsApp Live?
          </h2>
          <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-md">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-900 text-slate-200 border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Option</th>
                    <th className="py-3 px-4 font-semibold">Mechanism</th>
                    <th className="py-3 px-4 font-semibold">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-200">A. Keep Prototype + CSV</td>
                    <td className="py-3 px-4 text-slate-400">Maintain status quo CSV upload workflow</td>
                    <td className="py-3 px-4 text-rose-400 font-semibold">✗ Rejected: Continues PII leakage risk</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-200">B. Prototype UI + Prod API</td>
                    <td className="py-3 px-4 text-slate-400">External frontend requests recipients from production API</td>
                    <td className="py-3 px-4 text-rose-400 font-semibold">✗ Rejected: PII still transits browser/edge; dual maintenance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-200">C. Sync Pipeline to External DB</td>
                    <td className="py-3 px-4 text-slate-400">Nightly scheduled cron copies eligible recipients to Supabase</td>
                    <td className="py-3 px-4 text-rose-400 font-semibold">✗ Rejected: Automates duplicate PII store instead of eliminating it</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-emerald-400">D. Native Module in Campaign Manager</td>
                    <td className="py-3 px-4 text-slate-300">WhatsApp built natively inside production Play/Scala app, reading existing MySQL</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">✓ Chosen: Zero data movement, one trust boundary, unified auth</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-800/60 p-6 rounded-2xl space-y-3">
              <h3 className="text-emerald-400 font-bold text-lg">The Key Insight: Databases Never Connected</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The prototype and production module share <strong>only the verified Meta WhatsApp Business Account</strong>. Going to production was an architectural <strong>handoff, not a data pipeline</strong>. Any network bridge between the two databases would have recreated the exact vulnerability the project aimed to eliminate.
              </p>
              <div className="pt-2 text-xs text-slate-400">
                <strong>Costs accepted knowingly:</strong> Developing in Play Framework / Scala 3 rather than Next.js; navigating strict Test → UAT → Production change-management gating; and managing hand-applied DDL schema updates due to the absence of an automated migration runner.
              </div>
            </div>
          </div>
        </section>

        {/* 5. Act Two: The Production Module */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <span className="text-emerald-400 text-lg">05</span>
            Act Two: The Production Module
          </h2>
          <div className="space-y-8 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I rebuilt the product inside Vantage Circle's Campaign Manager as a native WhatsApp module, porting the <em>proven business logic</em> (Meta API contract, template rules, error code dictionary) and matching the host UI.
            </p>

            {/* 5.1 Send Pipeline */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">5.1 The Send Pipeline</h3>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed shadow-lg mb-6">
                <pre>{` PRODUCTION SERVER                                                 META
 ┌──────────────────────────────────────────────────────┐
 │  Production MySQL (client data never leaves)         │
 │   employee mobile numbers, encrypted at rest         │
 │           │                                          │
 │           │ ② saved audience query runs at send time │
 │           ▼                                          │
 │  Campaign service                                    │
 │   decrypt → normalise phone → drop opt-outs          │
 │   → drop recently contacted → fill variables         │
 │           │                                          │
 │           │ ③ claim a MESSAGE row first              │
 │           │   (unique key = no double send)          │
 │           ▼                                          │
 │  whatsapp_data (the one new table)                   │  ④ send
 │   TEMPLATE · RECIPIENT_LIST · CAMPAIGN               │ ────────────▶ Graph API
 │   MESSAGE · OPT_OUT                                  │ ◀──────────── message id
 │           ▲                                          │
 │           │ ⑥ update status / record STOP            │
 │  /whatsapp/webhook  ◀────────────────────────────────│── ⑤ sent/delivered/
 │           │                                          │     read/failed, replies
 │           ▼                                          │
 │  ⑦ Dashboard + campaign analytics read this table    │
 └──────────────────────────────────────────────────────┘`}</pre>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-md">
                <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Step</th>
                      <th className="py-2.5 px-4 font-semibold">What Happens</th>
                      <th className="py-2.5 px-4 font-semibold">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-emerald-400">① Define audience</td>
                      <td className="py-2.5 px-4 text-slate-300">Audience is a saved <code className="text-slate-200">SELECT + COUNT</code> query pair</td>
                      <td className="py-2.5 px-4 text-slate-400">Audiences are live definitions, not static snapshots. "Inactive 3 months" resolves as of send time.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-emerald-400">② Resolve</td>
                      <td className="py-2.5 px-4 text-slate-300">Query runs live; phone numbers decrypted in memory only</td>
                      <td className="py-2.5 px-4 text-slate-400">PII exists exclusively in transient memory during dispatch—never in SQL logs or files.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-emerald-400">③ Claim</td>
                      <td className="py-2.5 px-4 text-slate-300">Write a <code className="text-slate-200">MESSAGE</code> row guarded by a database unique key</td>
                      <td className="py-2.5 px-4 text-slate-400">Mid-send crash, double-click, or parallel retry cannot send duplicate messages to the same user.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-emerald-400">④ Send</td>
                      <td className="py-2.5 px-4 text-slate-300">Chunked concurrent HTTP requests to Meta Graph API</td>
                      <td className="py-2.5 px-4 text-slate-400">Dedicated backend environment with no serverless function timeouts.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-emerald-400">⑤ Callback</td>
                      <td className="py-2.5 px-4 text-slate-300">Meta pushes delivery statuses & replies to HMAC webhook</td>
                      <td className="py-2.5 px-4 text-slate-400">Reliable event-driven updates straight from the messaging network.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-emerald-400">⑥ Record</td>
                      <td className="py-2.5 px-4 text-slate-300">Status written back to row; STOP reply creates <code className="text-slate-200">OPT_OUT</code> row</td>
                      <td className="py-2.5 px-4 text-slate-400">Opt-out state is globally enforced across all future campaigns and audiences.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-emerald-400">⑦ Analyse</td>
                      <td className="py-2.5 px-4 text-slate-300">Dashboard queries rates straight from <code className="text-slate-200">whatsapp_data</code></td>
                      <td className="py-2.5 px-4 text-slate-400">Zero data replication lag—operational metrics are calculated directly from source records.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5.2 One Table on Purpose */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">5.2 One Table, On Purpose</h3>
              <p className="mb-4 text-sm sm:text-base text-slate-300">
                Because production lacked an automated migration framework, adding multiple tables would multiply manual DBA risk across Test, UAT, and Production. I designed the architecture around <strong>a single purely additive table</strong> (<code className="text-emerald-400">whatsapp_data</code>) distinguished by <code className="text-emerald-400">record_type</code>:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <span className="font-mono text-emerald-400 font-bold block mb-1">TEMPLATE</span>
                  <span className="text-slate-400 text-xs">Content, Meta status, rejection reason, quality rating</span>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <span className="font-mono text-emerald-400 font-bold block mb-1">RECIPIENT_LIST</span>
                  <span className="text-slate-400 text-xs">Named SELECT + COUNT query definition pair</span>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <span className="font-mono text-emerald-400 font-bold block mb-1">CAMPAIGN</span>
                  <span className="text-slate-400 text-xs">Template link, audience, variable mappings, status</span>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <span className="font-mono text-emerald-400 font-bold block mb-1">MESSAGE</span>
                  <span className="text-slate-400 text-xs">Recipient x campaign: status, error, Meta message ID</span>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <span className="font-mono text-emerald-400 font-bold block mb-1">OPT_OUT</span>
                  <span className="text-slate-400 text-xs">Phone number that responded STOP / unsubscribe</span>
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-slate-200 text-sm">Key Database Engineering Trade-Off: Stored Generated Column</div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  How do you enforce database-level duplicate prevention when records are stored as flexible JSON payloads without foreign keys? I added a <strong>MySQL stored generated column</strong> that extracts the user ID specifically for <code className="text-slate-300">MESSAGE</code> records. MySQL can then place a strict unique constraint on <code className="text-emerald-400">(campaign_id, extracted_user_id)</code>. All other record types leave it NULL and are unaffected.
                </p>
              </div>
            </div>

            {/* 5.3 Safety Rails */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">5.3 Safety Rails Enforced Low in the Stack</h3>
              <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-md">
                <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Rail</th>
                      <th className="py-2.5 px-4 font-semibold">Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-200">No Double Sends</td>
                      <td className="py-2.5 px-4 text-emerald-400">Unique key on claimed MESSAGE row enforced by MySQL engine, not UI button state</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-200">STOP Honoured</td>
                      <td className="py-2.5 px-4 text-slate-400">Inbound STOP webhook automatically inserts OPT_OUT row; filtered out before dispatch across all lists</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-200">Frequency Protection</td>
                      <td className="py-2.5 px-4 text-slate-400">Wizard queries audience overlap against recent sends before saving (mitigating error 131049)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-200">No Broken Personalisation</td>
                      <td className="py-2.5 px-4 text-slate-400">Recipient missing any mapped parameter is skipped and logged—never sent "Hi , ..."</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-200">Masked Logs</td>
                      <td className="py-2.5 px-4 text-slate-400">Message rows persist only the trailing 4 digits of phone numbers</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-200">Webhook Fails Closed</td>
                      <td className="py-2.5 px-4 text-slate-400">Invalid signatures or missing secrets reject all traffic; prototype fail-open vulnerability closed</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-200">Access Governance</td>
                      <td className="py-2.5 px-4 text-slate-400">WhatsApp tab gated behind production enterprise role-based authorization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5.4 Operator Experience & 5.5 Cutover */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-3">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  <Smartphone className="text-emerald-400" size={18} />
                  5.4 The Operator Experience
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Engineered around operational decisions rather than raw message logs:
                </p>
                <ul className="text-xs space-y-2 text-slate-300 list-disc pl-4">
                  <li><strong>Failure alerts:</strong> Translates technical codes into actions (e.g. <em>"Mostly Meta marketing cap: retry tomorrow"</em>).</li>
                  <li><strong>3-step wizard:</strong> Audience selection first, variable validation against live data, and audience overlap warnings.</li>
                  <li><strong>Actionable KPIs:</strong> Delivery & read rates with WoW trends; "Needs attention" card highlighting pending or rejected drafts.</li>
                </ul>
              </div>

              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-3">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  <RefreshCw className="text-teal-400" size={18} />
                  5.5 Cutover Strategy
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Because the systems share a Meta account and zero database connections, cutover is clean:
                </p>
                <ul className="text-xs space-y-2 text-slate-300 list-disc pl-4">
                  <li><strong>Webhook:</strong> Hard cutover—repointing Meta's single callback URL directly to the production endpoint.</li>
                  <li><strong>Templates:</strong> One-time import of approved templates from Meta Graph API (source of truth).</li>
                  <li><strong>History:</strong> Frozen in prototype; internal test sends are discarded to avoid moving dummy PII.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Results */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <span className="text-emerald-400 text-lg">06</span>
            Results
          </h2>
          <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-md">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-900 text-slate-200 border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Dimension</th>
                    <th className="py-3 px-4 font-semibold">Prototype (CSV)</th>
                    <th className="py-3 px-4 font-semibold text-emerald-400">Production Module</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Copies of client PII per campaign</td>
                    <td className="py-3 px-4 text-slate-400">4 (est.)</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">0 (in-memory only during dispatch)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Manual data handling time</td>
                    <td className="py-3 px-4 text-slate-400">~45 minutes</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">~0 minutes (pick saved query)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Audience freshness</td>
                    <td className="py-3 px-4 text-slate-400">Frozen at export date</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">Live resolved at send time</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Systems holding client PII</td>
                    <td className="py-3 px-4 text-slate-400">3 (Prod DB, CSV file, Supabase DB)</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">1 (Production DB only)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Opt-out enforcement</td>
                    <td className="py-3 px-4 text-slate-400">Per-file, lost between exports</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">Global across every list & campaign</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Double-send protection</td>
                    <td className="py-3 px-4 text-slate-400">UI button state</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">Database unique key constraint</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">New infrastructure footprint</td>
                    <td className="py-3 px-4 text-slate-400">Separate host + DB instance</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">None (1 additive table in existing app)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-3">
              <h3 className="text-white font-bold text-lg mb-2">Key Accomplishments Delivered:</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Delivered a completely new high-engagement messaging channel in-house without outside vendors or external processors.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Sent real campaigns through Meta with end-to-end delivery, read tracking, and HMAC security.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Maintained verified WhatsApp Business Account reputation at <strong>GREEN quality rating</strong>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Established complete operational playbook for Meta rules, 30-day locks, and error code actions.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. What I'd Tell Someone Doing This Next */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <span className="text-emerald-400 text-lg">07</span>
            What I'd Tell Someone Doing This Next
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '1',
                title: 'Prototype to learn the platform, not to ship the prototype.',
                desc: "The prototype's real output was knowledge: Meta's undocumented review rules, what 131049 means, that status only arrives by webhook. All of that transferred to production. The code didn't need to."
              },
              {
                num: '2',
                title: 'Ask where the data lives before asking where the app lives.',
                desc: '"Push it to production" sounded like a hosting task. It was really a trust-boundary question, and the right answer was to delete a whole category of risk, not secure it.'
              },
              {
                num: '3',
                title: 'A local success is not evidence.',
                desc: 'My first "successful send" ran from a laptop through a tunnel, and it hid two bugs that only existed on serverless. After that, a fix counted only once it was verified on the deployed system with real data.'
              },
              {
                num: '4',
                title: 'Never let a failed external call impersonate an external state.',
                desc: 'Defaulting a failed submission to "PENDING" made a local record lie about Meta\'s state, and a one-way sync meant nothing could ever correct it. Failure deserves its own status.'
              },
              {
                num: '5',
                title: 'Put the guardrail as low as it can go.',
                desc: 'A disabled button isn\'t a control, and a unique key is. Opt-outs, double sends, and signature checks all belong where nobody can route around them.'
              },
              {
                num: '6',
                title: 'Constraints are design inputs.',
                desc: '"No migration runner" produced the one-table design, and "must match the existing app" produced a UI operators already knew. Working with the host system\'s limits is what made the module shippable instead of a permanent side project.'
              },
              {
                num: '7',
                title: 'Translate platform errors into decisions.',
                desc: 'An operator shouldn\'t need to know what 131049 is. They need to know "retry tomorrow, don\'t touch the data." Every error code on the dashboard comes with a next step.'
              }
            ].map((lesson) => (
              <div key={lesson.num} className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-emerald-800/60 transition-colors">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-emerald-400 font-mono font-bold text-sm">0{lesson.num}</span>
                  <h4 className="text-base font-bold text-white">{lesson.title}</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed pl-7">{lesson.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. What's Next */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-3">
            <span className="text-emerald-400 text-lg">08</span>
            What's Next
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Server-Side Send Gate', desc: 'Add strict server-side send gating before broad rollout so dispatches never depend on UI button states alone.' },
              { title: 'Automated 24h Cap Retry', desc: "Automatically schedule a secondary send wave 24 hours later for recipients hitting Meta's 131049 rolling daily marketing cap." },
              { title: 'Production Number Profiling', desc: 'Run automated formatting profiling against client employee records to catch malformed country codes prior to campaign launch.' },
              { title: 'Visual Audience Builder', desc: 'Provide non-technical marketers a visual query builder on top of saved SQL definitions to remove data team bottlenecks.' },
              { title: 'Native Quick-Reply Opt-Out', desc: "Support Meta's native 'Stop promotions' quick-reply button alongside natural language STOP text recognition." },
              { title: 'Webhook Relay Architecture', desc: 'Implement multi-target webhook fan-out if staging or secondary analytics consumers need live event access.' }
            ].map((item, index) => (
              <div key={index} className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
                <h4 className="font-bold text-emerald-400 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA & Return Navigation */}
        <div className="pt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium text-sm sm:text-base cursor-pointer group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio Home</span>
          </button>

          {/* Highlight Try the App Button */}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base shadow-xl shadow-emerald-950/50 hover:shadow-emerald-700/60 hover:scale-105 active:scale-95 transition-all ring-1 ring-emerald-400/40 cursor-pointer"
          >
            <Smartphone size={18} className="text-emerald-100" />
            <span>Try the App</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </article>
    </div>
  );
};

export default WhatsAppCampaignCaseStudy;
