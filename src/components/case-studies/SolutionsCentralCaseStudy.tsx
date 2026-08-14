import React, { useEffect } from 'react';
import { 
  ArrowLeft, Lock, Database, Search, Cpu, Box, 
  CheckCircle, TrendingUp, Zap, Clock, Shield, Globe, Activity, FileText
} from 'lucide-react';

const SolutionsCentralCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
    <div className="bg-slate-950 min-h-screen font-inter pb-20 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium"
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
            <div className="inline-block px-4 py-1.5 bg-purple-900/40 text-purple-200 font-semibold tracking-wide rounded-full text-sm border border-purple-800">
              Solutions Engineering
            </div>
            <div className="inline-block px-4 py-1.5 bg-slate-800 text-slate-200 font-semibold tracking-wide rounded-full text-sm border border-slate-700">
              Case Study
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Solutions Central
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 font-light border-l-4 border-purple-600 pl-6 leading-relaxed">
            Turning a six-person team's scattered intake process into a self-serve product
          </p>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Shield className="text-purple-400" size={20}/> 
                Project Details
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li><strong className="text-slate-200">Role:</strong> Solutions Engineer</li>
                <li><strong className="text-slate-200">Organization:</strong> Vantage Circle</li>
                <li><strong className="text-slate-200">Scope:</strong> 0 → 1, Solo Project</li>
                <li><strong className="text-slate-200">Surfaces:</strong> Ingestion · Dashboard · Extension · Auth</li>
                <li><strong className="text-slate-200">Owner:</strong> Bhargav Nath</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Database className="text-purple-400" size={20}/> 
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Python', 'GitHub API', 'Graph API', 'Chrome Extension', 'Confluence API', 'Okapi BM25'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* 1. The Problem */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">01 — The Problem</h2>
          <div className="prose prose-invert max-w-none text-lg leading-relaxed text-slate-400">
            <h3 className="text-xl font-semibold text-slate-200 mb-3">Nothing was connected, so people were the integration</h3>
            <p className="mb-4">
              Every step was manual. A request arrived in an MS Form and from there a person moved it — into a SharePoint Excel sheet, into a Confluence page, into an email thread. Nothing talked to anything else, so the same facts were re-typed in three places and the tracker was permanently slightly out of date. Everything the team learned along the way stayed in people's heads.
            </p>
            <p className="mb-4">
              The real cost was the back-and-forth. Scoping a request meant first working out whether the team had handled something similar, and there was no way to look that up — so it became meetings. Book time with whoever might remember, ask them to recall a request from months ago, wait, then do it again when the next related question came in. Every generic sales question took the same route: ping a consultant, wait, context-switch.
            </p>
            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-slate-300 my-6 bg-slate-900/30 py-2 pr-2 rounded">
              "The insight underneath it: the knowledge already existed — it was just unreachable. Years of solved requests sat in a spreadsheet nobody could search, so the team kept re-solving problems it had already solved and kept paying for the answer in meetings."
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-red-950/20 border border-red-900/40 p-6 rounded-xl">
                <h4 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Before
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Every handoff manual — form to spreadsheet to Confluence, re-typed by hand</li>
                  <li>• Confluence tracker drifted the moment anything changed</li>
                  <li>• Checking for a similar past request meant booking a meeting</li>
                  <li>• Playbooks and past solutions existed only as tribal knowledge</li>
                  <li>• No search across forms, specs, documents, or Confluence</li>
                  <li>• Sales had no self-serve path — every query went to a consultant</li>
                </ul>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-900/40 p-6 rounded-xl">
                <h4 className="font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> After
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Python + Graph API ingestion that diffs and commits on a schedule</li>
                  <li>• Confluence read and written natively — one representation, no drift</li>
                  <li>• Precedent lookup is a search, not a meeting</li>
                  <li>• A versioned repo as the single source of truth for everything</li>
                  <li>• One search index spanning every content type the team produces</li>
                  <li>• A Chrome assistant that answers sales questions in seconds</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What I Built */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">02 — What I Built</h2>
          <div className="prose prose-invert max-w-none text-lg leading-relaxed text-slate-400">
            <h3 className="text-xl font-semibold text-slate-200 mb-3">One pipeline, one source of truth, one dashboard</h3>
            <p className="mb-6">
              I re-architected intake-to-insight as a single data flow. Forms are pulled programmatically, everything is written as versioned markdown and JSON to a GitHub repository, and the dashboard reads that repository live at request time — so there is no build step between something changing and the team seeing it.
            </p>

            <div className="space-y-6 mt-8">
              {[
                { step: '1', name: 'Source', title: 'MS Forms · SharePoint Excel', desc: 'Sales and consultants submit requests through the form the team already used — no behaviour change asked of anyone upstream.' },
                { step: '2', name: 'Ingestion', title: 'Graph API puller (Python)', desc: 'Runs every 15 minutes across the working day, pulling and diffing changed rows, then committing them. Consultant edits made in the dashboard are preserved rather than overwritten on the next pull.' },
                { step: '3', name: 'Source of Truth', title: 'GitHub repository', desc: 'Every request, playbook entry, blueprint and document is a versioned file. Nothing is overwritten, and history comes free.' },
                { step: '4', name: 'Read Path', title: 'Next.js dashboard', desc: 'Server components read the repo at request time via the GitHub API. A commit is live on the next page load.' },
                { step: '5', name: 'Retrieval', title: 'Knowledge Hub + Chrome assistant', desc: 'A BM25 index over every content type, surfaced to consultants in the dashboard and to sales in the browser.' }
              ].map((flow) => (
                <div key={flow.step} className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-start gap-4 hover:border-purple-800 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-purple-900/60 text-purple-300 flex items-center justify-center font-bold border border-purple-700 flex-shrink-0">
                    {flow.step}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-purple-400 tracking-wider block mb-1">{flow.name}</span>
                    <h4 className="text-lg font-bold text-white mb-2">{flow.title}</h4>
                    <p className="text-sm text-slate-400">{flow.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. The Product / Dashboard Screenshots */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">03 — The Product</h2>
          <div className="prose prose-invert max-w-none text-lg leading-relaxed text-slate-400 mb-8">
            <h3 className="text-xl font-semibold text-slate-200 mb-3">What the team actually opens every morning</h3>
            <p>
              The dashboard is where consultants work. Everything reads from the same repository, so there is no separate admin surface and no second copy of anything.
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">SE Team Dashboard — Overview</h4>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-2xl overflow-hidden mb-4 shadow-2xl">
                <img 
                  src="/solutions-central-overview.png" 
                  alt="SE Dashboard Overview Screenshot" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed pl-4 border-l-2 border-purple-500">
                <strong>Overview</strong> — delivery rate and open workload up top, then a quarter-by-quarter status breakdown, per-consultant load, and complexity mix. Built so the first question a manager asks is answered before they scroll.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Solution Requests</h4>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-2xl overflow-hidden mb-4 shadow-2xl">
                <img 
                  src="/solutions-central-requests.png" 
                  alt="Solution Requests Table Screenshot" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed pl-4 border-l-2 border-purple-500">
                <strong>Intake</strong> — every request the team has ever received, filterable by status and searchable by client, ID, or feature. Consultants edit status, complexity, owner, and the solution itself inline. Each save writes to both the repository and the source Excel sheet, keeping the wider org's spreadsheet in sync. The "Pull" button triggers ingestion on demand when someone is waiting on a specific row.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Project Tracker</h4>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-2xl overflow-hidden mb-4 shadow-2xl">
                <img 
                  src="/solutions-central-tracker.png" 
                  alt="Project Tracker Screenshot" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed pl-4 border-l-2 border-purple-500">
                <strong>Delivery</strong> — portfolio health, status mix, and a live Confluence panel. Overdue is highlighted as its own KPI. The tracker reads and writes the team's real Confluence page directly to prevent drift. Status is computed rather than typed—preventing rows from silently claiming to be on track.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Knowledge Hub</h4>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-2xl overflow-hidden mb-4 shadow-2xl">
                <img 
                  src="/solutions-central-hub.png" 
                  alt="Knowledge Hub Search Screenshot" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed pl-4 border-l-2 border-purple-500">
                <strong>Retrieval</strong> — one search index across every content type (solution requests, playbook entries, blueprints, RFPs, product specs, and Confluence docs). Answers cite their sources as clickable chips. The empty state proposes the four or five question shapes the index is actually good at, helping users learn how to ask.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Worklogs</h4>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-2xl overflow-hidden mb-4 shadow-2xl">
                <img 
                  src="/solutions-central-worklogs.png" 
                  alt="Worklogs Timeline Screenshot" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed pl-4 border-l-2 border-purple-500">
                <strong>Activity</strong> — commit activity and manual worklogs in one timeline, grouped by day. Because ingestion commits under its own identity, the log doubles as a health check on the pipeline—a quiet day on the intake bot is visible without opening a monitoring tool.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Deep Dive: Two Assistants */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">04 — Deep Dive</h2>
          <div className="prose prose-invert max-w-none text-lg leading-relaxed text-slate-400">
            <h3 className="text-xl font-semibold text-slate-200 mb-3">Two assistants, two different jobs</h3>
            <p className="mb-6">
              Retrieval only pays off where the question actually gets asked, and the two audiences ask in completely different places. So there are two assistants over the same body of work — not one assistant with two skins. They differ in what they read, how they retrieve it, who can reach them, and what a session even starts from.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <span className="px-2 py-1 bg-purple-900/40 border border-purple-800 rounded text-xs font-semibold text-purple-300 uppercase tracking-wide">
                  FOR CONSULTANTS
                </span>
                <h4 className="text-xl font-bold text-white mt-3 mb-2">Solution Assistant</h4>
                <p className="text-sm text-slate-400 mb-4">
                  Lives inside the dashboard as a slide-over panel. Opens directly from any request, automatically supplying client, department, requester, and original ask details to bypass blank-prompt friction.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li><strong>• Fetch:</strong> Keywords Okapi BM25 filters to 45 candidates, feeding the strongest 14 (6 past requests, 4 playbooks, 4 blueprints) to the model.</li>
                  <li><strong>• Draft:</strong> Outputs six structured sections: problem summary, recommended approach, components, implementation steps, attachments, and open questions.</li>
                  <li><strong>• Refine & Keep:</strong> The draft is fully editable. One-click export commits a dated markdown file to the repo under the consultant's name.</li>
                  <li><strong>• Factuality:</strong> Server checks all citations, dropping unrecognized sources to prevent model hallucinations.</li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <span className="px-2 py-1 bg-blue-900/40 border border-slate-800 rounded text-xs font-semibold text-blue-300 uppercase tracking-wide">
                  FOR SALES
                </span>
                <h4 className="text-xl font-bold text-white mt-3 mb-2">Solutions Central Assistant</h4>
                <p className="text-sm text-slate-400 mb-4">
                  Built as a Chrome extension browser side panel. Integrates with sales workflows, allowing representatives to query the knowledge base without switching tabs.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li><strong>• Page Context:</strong> Reads active tab title, URL, visible text, and selection to automatically formulate contextual queries (e.g. "have we done this before?").</li>
                  <li><strong>• Access Control:</strong> Sales reps authenticate via invitation codes, generating role-limited tokens which deny access to the internal dashboard and tracker.</li>
                  <li><strong>• Safeguards:</strong> Refuses bulk-export prompts, rate-limits queries, and enforces a 24-hour local conversation history wipe.</li>
                  <li><strong>• Verifiability:</strong> Every answer links directly to its source files so claims can be verified before being presented to clients.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Decisions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">05 — Decisions</h2>
          <div className="space-y-6">
            {[
              { type: 'ARCHITECTURE', title: 'A git repository as the source of truth, not a database', why: 'The team already thinks in files. A database would mean running a second sync engine and handling schema migrations.', tradeoff: 'Every read is an API call, so the dashboard inherits GitHub\'s API rate limits. Perfect for the team\'s current size, but requires caching at 10x scale.' },
              { type: 'BUILD VS. BUY', title: 'BM25 retrieval instead of vector embeddings', why: 'The corpus is keyword-dense business text (client names, feature tags, product acronyms)—which is precisely what BM25 excels at. It cost nothing to run and shipped in days.', tradeoff: 'No semantic matching; a query phrased entirely in synonyms will miss. The trigger to transition to embeddings is users reporting misses, not corpus size.' },
              { type: 'PRAGMATIC PIVOT', title: 'Invite codes after email login hit a wall', why: 'Transactional email provider blocked the company domain because another team had claimed it. To avoid spending a week on email infrastructure, I implemented scoped invite codes the same day.', tradeoff: 'Shared codes mean weaker attribution and no per-user revocation. Treated as technical debt to be resolved later.' },
              { type: 'SECURITY BY DESIGN', title: 'Role-scoped tokens enforced at the edge', why: 'Handing a tool to customer-facing teams means security boundaries must be enforced server-side rather than depending on client compliance. Edge middleware handles routing access.', tradeoff: 'Restricts flexibility, but ensures a clean, easily auditable security configuration.' },
              { type: 'RISK', title: 'Guardrails before distribution, not after', why: 'A self-serve knowledge base containing client data is an exfiltration risk once distributed. Implemented zero data retention on LLM APIs, rate limits, and history expiry prior to roll-out.', tradeoff: 'Increased upfront design effort, but far cheaper than resolving data leakage retroactively.' }
            ].map((decision, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-purple-800/60 transition-colors">
                <span className="text-xs font-semibold text-purple-400 tracking-wider block mb-1">{decision.type}</span>
                <h4 className="text-lg font-bold text-white mb-3">{decision.title}</h4>
                <div className="space-y-2 text-sm text-slate-400">
                  <p><strong>Why:</strong> {decision.why}</p>
                  <p><strong>Trade-off:</strong> {decision.tradeoff}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Why This Is Relevant */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">06 — Why This Is Relevant</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Product sense', desc: 'Diagnosed the real problem behind "the workflow feels messy"—an entirely manual chain and a bottlenecked team—and designed a single data flow that addressed the cause rather than the symptom.' },
              { title: 'Ownership', desc: 'End-to-end and solo: built ingestion, dashboard, Confluence integration, a Chrome extension, authentication, and the security guardrails around all of it.' },
              { title: 'Ambiguity', desc: 'When the planned auth path hit an infrastructure wall, shipped a working alternative the same day. Status logic was rebuilt repeatedly as real usage exposed edge cases the spec never anticipated.' },
              { title: 'Systems thinking', desc: 'Designed one data flow rather than five separate integrations, so every surface reads from the same source and there is no second copy of anything left to drift out of sync.' }
            ].map((relevant, index) => (
              <div key={index} className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{relevant.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{relevant.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Back Button */}
        <div className="text-center pt-8 border-t border-slate-800">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </article>
    </div>
  );
};

export default SolutionsCentralCaseStudy;
